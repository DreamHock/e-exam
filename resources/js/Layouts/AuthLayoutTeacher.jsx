import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
import React from "react";

const AuthLayoutTeacher = ({ children }) => {
    return (
        <div className=" min-h-screen bg-slate-100 flex">
            <aside className="py-2 px-4 sm:w-1/6 flex flex-col items-center">
                <a href={route("list.exams")} id="logo" className=" mb-6">Teacher</a>
                <div className=" flex flex-col items-center">
                    <NavLink href={route("list.exams")}>List exams</NavLink>
                    <NavLink href={route('exams.create')}>Create an exam</NavLink>
                </div>
            </aside>
            <div className="w-full">
                <header className="flex items-center justify-end px-4 py-2 h-10 bg-white">
                    <NavLink method="post" href={route("logout")} as="button">
                        Logout
                    </NavLink>
                </header>
                <div className=" p-4">{children}</div>
            </div>
        </div>
    );
};

export default AuthLayoutTeacher;
