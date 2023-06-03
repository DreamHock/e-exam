import Checkbox from "@/Components/Checkbox";
import TextInput from "@/Components/TextInput";

const AddAnswer = ({ handleAddanswer, handleInputChange, newAnswer }) => {

    return (
        <div className="flex gap-3 items-center mb-2">
            <TextInput
                placeholder="Possible answer..."
                type="text"
                value={newAnswer.answer}
                onChange={(e) => handleInputChange("answer", e.target.value)}
            />
            <div className="flex items-center gap-1 text-indigo-600 shadow-sm">
                <div>correct</div>
                <Checkbox
                    onChange={(e) =>
                        handleInputChange("correct", e.target.checked)
                    }
                    checked={newAnswer.correct}
                />
            </div>
            <button onClick={handleAddanswer}>Add answer</button>
        </div>
    );
};

export default AddAnswer;
