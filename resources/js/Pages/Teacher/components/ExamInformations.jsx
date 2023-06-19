import InputLabel from "@/Components/InputLabel";
import Test from "@/Components/Time";
import TextInput from "@/Components/TextInput";
import TimePicker from "@/Components/TimePicker";
import React, { useEffect } from "react";

const ExamInformations = ({ data, setData }) => {
    useEffect(() => {
        console.log(data);
    }, []);
    return (
        <div className=" mb-4 w-96 flex flex-col self-end gap-4">
            <h2 className="mb-2">Exam informations</h2>
            <div>
                <InputLabel htmlFor="name">Name</InputLabel>
                <TextInput
                    onChange={(e) => setData("name", e.target.value)}
                    id="name"
                    value={data.name}
                />
            </div>
            {/* <div>
                <InputLabel htmlFor="date">Date</InputLabel>
                <input
                    onChange={(e) => setData("date", e.target.value)}
                    id="date"
                    className=" border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                    type="date"
                    value={data.date}
                />
            </div> */}
            {/* <div className="flex gap-10">
                <div>
                    <InputLabel htmlFor="start-time">Start time</InputLabel>
                    <Test time="startTime" data={data} setData={setData} />
                </div>
                <div>
                    <InputLabel htmlFor="end-time">End time</InputLabel>
                    <Test time="endTime" data={data} setData={setData} />
                </div>
            </div> */}
        </div>
    );
};

export default ExamInformations;
