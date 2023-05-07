import AuthLayoutTeacher from "@/Layouts/AuthLayoutTeacher";
import { usePage } from "@inertiajs/react";
import React from "react";

const TeacherDashboard = () => {
    const { user } = usePage().props.auth;
    return <AuthLayoutTeacher>welcome {user.name}</AuthLayoutTeacher>;
};

export default TeacherDashboard;
