import React from "react";

const AnswerComponents = () => {
    return (
        <div className="flex justify-center">
            <div>
                <AddAnswer
                    newAnswer={newAnswer}
                    handleAddanswer={handleAddanswer}
                    handleInputChange={handleInputChange}
                />
                <ul>
                    {answers.map((answer, index) => (
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
        </div>
    );
};

export default AnswerComponents;
