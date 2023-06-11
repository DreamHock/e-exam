import InputLabel from "@/Components/InputLabel";
import React, { useState } from "react";

const Question = ({ q, setQ, ...props }) => {
    const [text, setText] = useState("");
    const [mark, setMark] = useState(0);

    const autoResize = (event) => {
        event.target.style.height = "auto";
        event.target.style.height = `${event.target.scrollHeight}px`;
    };

    return (
        <div {...props}>
            <textarea
                id="message"
                rows="4"
                className=" mb-4 resize-none overflow-hidden block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your question here..."
                value={q.question}
                onChange={(e) => {
                    setQ({ ...q, question: e.target.value });
                }}
                onInput={autoResize}
            ></textarea>
            <InputLabel>Mark:</InputLabel>
            <input
                value={q.mark}
                onChange={(e) => {
                    setQ({ ...q, mark: e.target.value });
                }}
                type="number"
                className="rounded-md w-20 border-gray-300"
            />
        </div>
    );
};

export default Question;
