import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useForm } from "@inertiajs/react";

export default function SwitchState({ exam }) {
    // const [enabled, setEnabled] = useState(false);
    const { data, setData, processing, put } = useForm({
        enabled: exam.isActive,
    });

    useEffect(() => {
        localStorage.setItem("isInitialRender", true);
    }, []);

    useEffect(() => {
        if (localStorage.getItem("isInitialRender") === "true") {
            localStorage.setItem("isInitialRender", false);
            console.log("d5ol");
            return;
        }
        put(`/exams/${exam.id}`, { enabled: data.enabled });
    }, [data.enabled]);

    return (
        <div>
            <Switch
                disabled={processing}
                checked={data.enabled}
                onChange={() => {
                    setData("enabled", !data.enabled);
                }}
                className={`${data.enabled ? "bg-green-600" : "bg-gray-500"}
          relative inline-flex h-[18px] w-[34px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${
                        data.enabled ? "translate-x-4" : "translate-x-0"
                    }
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    );
}
