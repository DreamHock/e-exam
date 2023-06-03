import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const hours = [
    "12",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
];
const minutes = ["00", "15", "30", "45"];
const times = ["am", "pm"];

export default function Test({ timeHandler, time }) {
    const [selectedHour, setSelectedHour] = useState(hours[0]);
    const [selectedMinute, setSelectedMinute] = useState(minutes[0]);
    const [selectedTime, setSelectedTime] = useState(times[0]);

    useEffect(() => {
        timeHandler(time, "hour", selectedHour);
    }, [selectedHour]);

    useEffect(() => {
        timeHandler(time, "minute", selectedMinute);
    }, [selectedMinute]);

    useEffect(() => {
        timeHandler(time, "time", selectedTime);
    }, [selectedTime]);

    return (
        <div className=" flex gap-2 items-center">
            <Listbox value={selectedHour} onChange={setSelectedHour}>
                <div className="relative mt-1">
                    <Listbox.Button className=" w-10 h-10  cursor-default rounded-lg bg-white shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        {selectedHour}
                    </Listbox.Button>
                    {/* <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    > */}
                    <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {hours.map((hour, hourIdx) => (
                            <Listbox.Option
                                key={hourIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 flex justify-center ${
                                        active
                                            ? "bg-amber-100 text-amber-900"
                                            : "text-gray-900"
                                    }`
                                }
                                value={hour}
                            >
                                {hour}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    {/* </Transition> */}
                </div>
            </Listbox>
            <div>:</div>
            <Listbox value={selectedMinute} onChange={setSelectedMinute}>
                <div className="relative mt-1">
                    <Listbox.Button className=" w-10 h-10  cursor-default rounded-lg bg-white shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        {selectedMinute}
                    </Listbox.Button>
                    {/* <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    > */}
                    <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {minutes.map((minute, minuteIdx) => (
                            <Listbox.Option
                                key={minuteIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 flex justify-center ${
                                        active
                                            ? "bg-amber-100 text-amber-900"
                                            : "text-gray-900"
                                    }`
                                }
                                value={minute}
                            >
                                {minute}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    {/* </Transition> */}
                </div>
            </Listbox>
            <Listbox value={selectedTime} onChange={setSelectedTime}>
                <div className="relative mt-1">
                    <Listbox.Button className=" w-10 h-10  cursor-default rounded-lg bg-white shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        {selectedTime}
                    </Listbox.Button>
                    {/* <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    > */}
                    <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {times.map((time, timeIdx) => (
                            <Listbox.Option
                                key={timeIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 flex justify-center ${
                                        active
                                            ? "bg-amber-100 text-amber-900"
                                            : "text-gray-900"
                                    }`
                                }
                                value={time}
                            >
                                {time}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    {/* </Transition> */}
                </div>
            </Listbox>
        </div>
    );
}
