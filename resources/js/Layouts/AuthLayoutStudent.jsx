import { Link } from "@inertiajs/react";
import React from "react";

const AuthLayoutStudent = ({ children }) => {
    return (
        <div className=" min-h-screen bg-slate-100">
            <header className="flex items-center justify-between px-4 py-2 h-10 bg-white">
                <div>Student</div>
                <Link method="post" href={route('logout')} as='button'>Logout</Link>
            </header>
            <div className=" p-4">{children}</div>
        </div>
    );
};

export default AuthLayoutStudent;
