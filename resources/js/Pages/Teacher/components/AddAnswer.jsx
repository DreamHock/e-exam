import Checkbox from "@/Components/Checkbox";
import TextInput from "@/Components/TextInput";
import { useState } from "react";

const AddAnswer = ({ data, setData, questionIndex }) => {
    const [newAnswer, setNewAnswer] = useState("");
    const [checked, setChecked] = useState(false);

    const handleAddanswer = () => {
        const questions = data.qs;
        questions[questionIndex]["answers"].push({
            answer: newAnswer,
            correct: checked,
        });
        setData("qs", questions);
    };
    return (
        <div className="flex gap-3 items-center mb-2">
            <TextInput
                placeholder="Possible answer..."
                type="text"
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
            />
            <div className="flex items-center gap-1 text-indigo-600 shadow-sm">
                <div>correct</div>
                <Checkbox
                    onChange={(e) => setChecked(e.target.checked)}
                    checked={checked}
                />
            </div>
            <button
             onClick={handleAddanswer}
            >
                Add answer
            </button>
        </div>
    );
};

export default AddAnswer;
