import React, { useEffect, useState } from "react";
import Question from "./Question";
import AddAnswer from "./AddAnswer";
import Answer from "./Answer";
import InputLabel from "@/Components/InputLabel";

const QuestionAnswers = ({ data, setData, index, question }) => {
    const handleDeleteQuestion = () => {
        const questions = data.qs;
        questions.splice(index, 1);
        setData("qs", questions);
    };

    useEffect(() => {
        console.log(question);
    }, []);
    return (
        <>
            <div className="flex bg-white rounded-md shadow-md">
                <div className=" rounded-md flex">
                    <div className="p-2">
                        <InputLabel>Question {index + 1}</InputLabel>
                        <Question
                            className=" mb-4"
                            index={index}
                            question={question}
                            setData={setData}
                            data={data}
                        />
                        {question.answers.length < 4 && (
                            <AddAnswer data={data} setData={setData} questionIndex={index} />
                        )}
                        <ul>
                            {question.answers.map((answer, i) => (
                                <Answer
                                    questionIndex={index}
                                    key={i}
                                    i={i}
                                    answer={answer}
                                    data={data}
                                    setData={setData}
                                />
                            ))}
                        </ul>
                    </div>
                    <button
                        type="button"
                        onClick={() => handleDeleteQuestion()}
                        className=" flex items-center justify-center p-2 text-red-800 bg-red-200 hover:bg-red-300 rounded-r"
                    >
                        X
                    </button>
                </div>
            </div>
        </>
    );
};

export default QuestionAnswers;
