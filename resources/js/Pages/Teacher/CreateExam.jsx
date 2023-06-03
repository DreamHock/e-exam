import AuthLayoutTeacher from "@/Layouts/AuthLayoutTeacher";
import QuestionAnswers from "./components/QuestionAnswers";
import { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
import ExamInformations from "./components/ExamInformations";
import Test from "@/Components/Test";

const initialState = {
    question: "",
    mark: 0,
    answers: [],
};

const CreateExam = () => {
    const [questions, setQuestions] = useState([initialState]);
    const [show, setShow] = useState(false);
    const [selectedtime, setSelectedTime] = useState({
        startTime: { hour: 12, minute: 0, time: "am" },
        endTime: { hour: 12, minute: 0, time: "am" },
    });
    const [info, setInfo] = useState({
        name: "",
        date: new Date(),
    });

    const addQuestion = () => {
        setQuestions([...questions, initialState]);
    };
    const deleteQuestion = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions);
    };

    const submitHandler = () => {
        router.post("/exams", {
            name: info.name,
            date: info.date,
            ...selectedtime,
            questions: questions,
        });
    };

    const timeHandler = (time, target, value) => {
        const updatedTime = { ...selectedtime };
        updatedTime[time][target] = value;
        setSelectedTime(updatedTime);
    };

    const infoHandler = (target, value) => {
        const updatedInfo = { ...info };
        updatedInfo[target] = value;
        setInfo(updatedInfo);
    };

    const otherInfoHandler = () => {};

    return (
        <AuthLayoutTeacher>
            {/* <form action="" onSubmit={submitHandler}> */}
            <div className="flex justify-end">
                <PrimaryButton
                    onClick={submitHandler}
                    type="submit"
                    className=""
                >
                    Create exam
                </PrimaryButton>
            </div>

            <ExamInformations
                infoHandler={infoHandler}
                timeHandler={timeHandler}
            />
            <h2 className="">Questions</h2>
            <div className="flex flex-wrap gap-4">
                {questions.map((question, index) => {
                    return (
                        <QuestionAnswers
                            questions={questions}
                            setQuestions={setQuestions}
                            index={index}
                            deleteQuestion={deleteQuestion}
                            number={index + 1}
                        />
                    );
                })}
                <button
                    onClick={addQuestion}
                    type="button"
                    className=" text-8xl flex justify-center items-center border-2 rounded-md border-gray-800 bg-gray-200 hover:bg-gray-300"
                >
                    +
                </button>
            </div>
            {/* </form> */}
        </AuthLayoutTeacher>
    );
};

export default CreateExam;
