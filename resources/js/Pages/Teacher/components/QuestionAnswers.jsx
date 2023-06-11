import React, { useEffect, useState } from "react";
import Question from "./Question";
import AddAnswer from "./AddAnswer";
import Answer from "./Answer";
import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";

const initialState = {
    answer: "",
    disabled: true,
    correct: false,
};

const question = {
    question: "",
    mark: 0,
    answers: [],
};

const QuestionAnswers = ({
    number,
    deleteQuestion,
    questions,
    setQuestions,
    index,
}) => {
    const { data, setData } = useForm({ answers: [] });
    const [newAnswer, setnewAnswer] = useState(initialState);
    const [q, setQ] = useState(question);

    useEffect(() => {
        setQ({ ...q, answers: data.answers });
    }, [data]);

    useEffect(() => {
        const updatedQuestions = [...questions];
        updatedQuestions[index] = q;
        setQuestions(updatedQuestions);
    }, [q]);

    const handleInputChange = (target, value) => {
        const clone = { ...newAnswer };
        clone[target] = value;
        setnewAnswer(clone);
    };

    const handleAddanswer = () => {
        if (newAnswer.answer !== "" && data.answers.length < 4) {
            setData("answers", [...data.answers, newAnswer]);
            setnewAnswer(initialState);
        }
    };

    const handleDeleteAnswer = (index) => {
        const updatedAnswers = [...data.answers];
        updatedAnswers.splice(index, 1);
        setData("answers", updatedAnswers);
    };

    const handleModifyanswer = (index, target, value) => {
        const updatedAnswers = [...data.answers];
        updatedAnswers[index][target] = value;
        setData("answers", updatedAnswers);
    };
    return (
        <>
            <div className="flex bg-white rounded-md shadow-md">
                <div className=" rounded-md flex">
                    <div className="p-2">
                        <InputLabel>Question {number}</InputLabel>
                        <Question className=" mb-4" q={q} setQ={setQ} />
                        {data.answers.length < 4 && (
                            <AddAnswer
                                newAnswer={newAnswer}
                                handleAddanswer={handleAddanswer}
                                handleInputChange={handleInputChange}
                            />
                        )}
                        <ul>
                            {data.answers.map((answer, index) => (
                                <Answer
                                    key={index}
                                    index={index}
                                    answer={answer}
                                    handleDeleteAnswer={handleDeleteAnswer}
                                    handleModifyanswer={handleModifyanswer}
                                />
                            ))}
                        </ul>
                    </div>
                    <button
                        type="button"
                        onClick={() => deleteQuestion(number - 1)}
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
