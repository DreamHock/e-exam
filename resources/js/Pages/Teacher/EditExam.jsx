import AuthLayoutTeacher from "@/Layouts/AuthLayoutTeacher";
import QuestionAnswers from "./components/QuestionAnswers";
import { useEffect, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { router, useForm } from "@inertiajs/react";
import ExamInformations from "./components/ExamInformations";
import { format, parse } from "date-fns";

const initialState = {
    question: "",
    mark: 0,
    answers: [],
};

const EditExam = ({ exam }) => {
    var eT = parse(exam.end, "hh:mm:ss", new Date());
    var sT = parse(exam.start, "hh:mm:ss", new Date());

    const { data, setData, put } = useForm({
        name: exam.name,
        // date: exam.date,
        // startTime: {
        //     hour: format(sT, "hh"),
        //     minute: format(sT, "mm"),
        //     time: exam.startTime,
        // },
        // endTime: {
        //     hour: format(eT, "hh"),
        //     minute: format(eT, "mm"),
        //     time: exam.endtime,
        // },
        qs: [...exam.questions],
    });

    const addQuestion = () => {
        setData("qs", [...data.qs, initialState]);
    };

    const submitHandler = () => {
        put(`/exams/${exam.id}`, {
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
                    Save changes
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

export default EditExam;
