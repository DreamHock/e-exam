import InputLabel from "@/Components/InputLabel";
import Test from "@/Components/Test";
import TextInput from "@/Components/TextInput";
import TimePicker from "@/Components/TimePicker";
import React from "react";

const GroupInformations = ({ name="", infoHandler }) => {
    return (
        <div className=" mb-4 w-96 flex flex-col self-end gap-4">
            <h2 className="mb-2">Exam informations</h2>
            <div>
                <InputLabel  htmlFor="name">Name Group</InputLabel>
                <TextInput
                    defaultValue={name}
                    onChange={(e) => infoHandler("name", e.target.value)}
                    id="name"
                />
            </div>
           
        </div>
    );
};

export default GroupInformations;
