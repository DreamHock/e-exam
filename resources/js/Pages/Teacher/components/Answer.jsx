import Checkbox from "@/Components/Checkbox";
import TextInput from "@/Components/TextInput";
import React, { useState } from "react";

const Answer = ({ answer, handleDeleteAnswer, index, handleModifyanswer }) => {
    const [disabled, setDisabled] = useState(true);
    const [answerInput, setAnswerInput] = useState(answer.answer);
    return (
        <li className="flex gap-3 mb-2">
            <TextInput
                className={`${!answer.correct ? " border border-red-700" : "border border-green-700"}`}
                disabled={disabled}
                type="text"
                value={answerInput}
                onChange={(e) => setAnswerInput(e.target.value)}
            />
            {disabled ? (
                <>
                    <button onClick={() => handleDeleteAnswer(index)}>
                        Delete
                    </button>
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
                            onChange={(e) =>
                                handleModifyanswer(
                                    index,
                                    "correct",
                                    e.target.checked
                                )
                            }
                            checked={answer.correct}
                        />
                    </div>
                    <button
                        onClick={() => {
                            handleModifyanswer(index, "answer", answerInput);
                            setDisabled(true);
                        }}
                    >
                        Save
                    </button>
                </div>
            )}
        </li>
    );
};

export default Answer;
