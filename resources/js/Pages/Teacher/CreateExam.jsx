import AuthLayoutTeacher from "@/Layouts/AuthLayoutTeacher";
import QuestionAnswers from "./components/QuestionAnswers";
import { useEffect } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import ExamInformations from "./components/ExamInformations";

const initialState = {
    question: "",
    mark: 0,
    answers: [],
};

const CreateExam = ({ exam }) => {
    useEffect(() => {
        console.log(exam);
    }, []);

    const { data, setData, post } = useForm({
        name: "",
        date: "",
        startTime: {
            hour: "",
            minute: "",
            time: "",
        },
        endTime: {
            hour: "",
            minute: "",
            time: "",
        },
        qs: [
            {
                question: "",
                mark: 0,
                answers: [],
            },
        ],
    });

    const addQuestion = () => {
        setData("qs", [...data.qs, initialState]);
    };

    const submitHandler = () => {
        post("/exams", {
            data,
        });
    };

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

            <ExamInformations setData={setData} data={data} />
            <h2 className="">Questions</h2>
            <div className="flex flex-wrap gap-4">
                {data.qs.map((question, index) => {
                    return (
                        <QuestionAnswers
                            question={question}
                            data={data}
                            setData={setData}
                            index={index}
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
