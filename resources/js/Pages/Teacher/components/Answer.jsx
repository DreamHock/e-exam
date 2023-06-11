import Checkbox from "@/Components/Checkbox";
import TextInput from "@/Components/TextInput";
import React, { useState } from "react";

const initialAnswer = { answer: "", correct: false };
const Answer = ({ answer, data, setData, i, questionIndex }) => {
    const index = i;
    const [disabled, setDisabled] = useState(true);

    const handleAnswerChange = (target, e) => {
        const questions = data.qs;
        questions[questionIndex]["answers"][index][target] =
            target === "answer" ? e.target.value : e.target.checked;
        setData("qs", questions);
    };

    const handleDeleteAnswer = () => {
        const questions = data.qs;
        questions[questionIndex]["answers"].splice(index, 1);
        setData("qs", questions);
    };
    
    const handleSaveAnswer = () => {
        setDisabled(true);
    }

    return (
        <li className="flex gap-3 mb-2">
            <TextInput
                className={`${
                    !answer.correct
                        ? " border border-red-700"
                        : "border border-green-700"
                }`}
                disabled={disabled}
                type="text"
                value={answer.answer}
                onChange={(e) => handleAnswerChange("answer", e)}
            />
            {disabled ? (
                <>
                    <button onClick={() => handleDeleteAnswer()}>Delete</button>
                    <button
                        onClick={() => {
                            setDisabled(false);
                        }}
                    >
                        Modify
                    </button>
                </>
            ) : (
                <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1 text-indigo-600 shadow-sm">
                        <div>correct</div>
                        <Checkbox
                            onChange={(e) => handleAnswerChange("correct", e)}
                            checked={answer.correct}
                        />
                    </div>
                    <button
                        onClick={handleSaveAnswer}
                    >
                        Save
                    </button>
                </div>
            )}
        </li>
    );
};

export default Answer;
