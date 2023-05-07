import AuthLayoutStudent from "@/Layouts/AuthLayoutStudent";
import { usePage } from "@inertiajs/react";
import React from "react";

const studentDashboard = () => {
    const { user } = usePage().props.auth;
    return (
        <AuthLayoutStudent>
            <div>welcome {user.name}</div>
        </AuthLayoutStudent>
    );
};

export default studentDashboard;
