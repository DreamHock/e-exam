import { Link } from "@inertiajs/react";
import React from "react";

const AuthLayoutTeacher = ({ children }) => {
    return (
        <div className=" min-h-screen bg-slate-100 flex">
            <aside className="flex flex-col items-center p-4 min-h-screen bg-white w-52">
                <div className="mb-4">Teacher</div>
                <Link href={route("exams.create")}>Create Exam</Link>
            </aside>
            <div className=" p-4 w-full">
                <div className="flex justify-between">
                    <div>
                        {"> "}
                        {route().current()}
                    </div>
                    <Link method="post" href={route("logout")} as="button">
                        Logout
                    </Link>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default AuthLayoutTeacher;
