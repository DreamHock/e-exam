import AuthLayoutTeacher from "@/Layouts/AuthLayoutTeacher";
import QuestionAnswers from "./components/QuestionAnswers";
import { useEffect, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
import ExamInformations from "./components/ExamInformations";
import Test from "@/Components/Test";
import { format, parse } from "date-fns";

const initialState = {
    question: "",
    mark: 0,
    answers: [],
};

const CreateExam = ({ exam }) => {
    var eT = parse(exam.end, "hh:mm:ss", new Date());
    var sT = parse(exam.start, "hh:mm:ss", new Date());
    const [questions, setQuestions] = useState(exam.questions);
    const [show, setShow] = useState(false);
    const [selectedtime, setSelectedTime] = useState({
        startTime: {
            hour: format(sT, "hh"),
            minute: format(sT, "mm"),
            time: exam.startTime,
        },
        endTime: {
            hour: format(eT, "hh"),
            minute: format(eT, "mm"),
            time: exam.endTime,
        },
    });
    const [info, setInfo] = useState({
        name: "",
        date: new Date(),
    });

    const [ex, setEx] = useState({
        name: exam.name,
        date: exam.date,
        startTime: {
            hour: format(sT, "hh"),
            minute: format(sT, "mm"),
            time: exam.startTime,
        },
        endTime: {
            hour: format(eT, "hh"),
            minute: format(eT, "mm"),
            time: exam.endTime,
        },
        qs: [...exam.questions],
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
                ex={ex}
                exam={exam}
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
                    className=" text-8xl flex justify-center items-center border-2 rounded-md bg-gray-200 hover:bg-gray-300"
                >
                    +
                </button>
            </div>
            {/* </form> */}
        </AuthLayoutTeacher>
    );
};

export default CreateExam;
