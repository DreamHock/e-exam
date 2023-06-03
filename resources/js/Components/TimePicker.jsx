import React from "react";

const TimePicker = ({ timeHandler, time }) => {
    return (
        <div className="p-2 bg-gray-100">
            <div className="inline-flex items-center gap-2 text-lg border rounded-md shadow-lg p-2">
                <select
                    onChange={(e) =>
                        timeHandler(time, "hour", e.target.value)
                    }
                    name=""
                    id=""
                    style={{ appearance: "none" }}
                    className="time-picker px-2 outline-none bg-transparent rounded-md"
                >
                    <option value="12">12</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
                <span className="px-2">:</span>
                <select
                    onChange={(e) =>
                        timeHandler(time, "minute", e.target.value)
                    }
                    name=""
                    id=""
                    className="time-picker px-2 outline-none  bg-transparent rounded-md"
                >
                    <option value="00">00</option>
                    <option value="01">15</option>
                    <option value="01">30</option>
                    <option value="01">45</option>
                </select>
                <select
                    onChange={(e) =>
                        timeHandler(time, "time", e.target.value)
                    }
                    name=""
                    id=""
                    className="time-picker px-2 outline-none  bg-transparent rounded-md"
                >
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
            </div>
        </div>
    );
};

export default TimePicker;
