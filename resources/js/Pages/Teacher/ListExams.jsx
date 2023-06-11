import SwitchState from "@/Components/SwitchState";
import AuthLayoutTeacher from "@/Layouts/AuthLayoutTeacher";
import { router } from "@inertiajs/react";
import React, { useEffect } from "react";

const ListExams = ({ exams }) => {
    useEffect(() => {
        console.log(exams);
    }, [exams]);

    const handleDeleteExam = (examId) => {
        router.delete(`/exams/${examId}`);
    };

    const handleEditExam = (examId) => {
        router.get(`/exams/${examId}/edit`);
    };

    return (
        <AuthLayoutTeacher>
            <div>
                <table className="rounded-md shadow  bg-white p-4">
                    <thead>
                        <tr className=" child:text-start child:p-2">
                            <th>Controle name</th>
                            <th>Date</th>
                            <th>Start at</th>
                            <th>End at</th>
                            <th>State</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exams.map((exam, index) => {
                            return (
                                <tr key={exam.id} className=" child:p-2">
                                    <td>{exam.name}</td>
                                    <td>{exam.date}</td>
                                    <td>
                                        {exam.start} {exam.startTime}
                                    </td>
                                    <td>
                                        {exam.end} {exam.endtime}
                                    </td>
                                    <td className="">
                                        <SwitchState exam={exam} />
                                    </td>
                                    <td className="w-fit">
                                        <div
                                            onClick={() => {
                                                handleEditExam(exam.id);
                                            }}
                                            className=" cursor-pointer p-2 rounded-l bg-sky-200 hover:bg-sky-300 text-sky-800 inline select-none"
                                        >
                                            Update
                                        </div>
                                        <div
                                            onClick={() => {
                                                handleDeleteExam(exam.id);
                                            }}
                                            className=" cursor-pointer p-2 rounded-r bg-red-200 hover:bg-red-300 text-red-800 inline select-none"
                                        >
                                            Delete
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {/* <Modal/> */}
            </div>
        </AuthLayoutTeacher>
    );
};

export default ListExams;
