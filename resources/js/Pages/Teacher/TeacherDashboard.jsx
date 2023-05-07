import AuthLayoutTeacher from "@/Layouts/AuthLayoutTeacher";
import { usePage } from "@inertiajs/react";
import React from "react";

const TeacherDashboard = () => {
    const { user } = usePage().props.auth;
    return <AuthLayoutTeacher>Dashboard</AuthLayoutTeacher>;
};

export default TeacherDashboard;
