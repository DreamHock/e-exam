import MyModal from "@/Components/Modal";
import MultipleSelect from "@/Components/MultipleSelect";
import SwitchState from "@/Components/SwitchState";
import AuthLayoutTeacher from "@/Layouts/AuthLayoutTeacher";
import { router } from "@inertiajs/react";
import React, { useEffect } from "react";
import { useState } from "react";

const ListExams = ({ exams, groups }) => {

    const [modelState,setModelState] = useState({
        open : false,
        exame : null ,
        times : {
            startTime: {
                hour: "",
                minute: "",
                time: "",
            },
            endTime: {
                hour: "",
                minute: "",
                time: "",
            },
        }

    })
    const [invitedGroups, setInvitedGroups] = useState([...groups])
    const [examsState, setExamsList] = useState([...exams])
    const handleDeleteExam = (examId) => {
        router.delete(`/exams/${examId}`);
    };

    const handleEditExam = (examId) => {
        router.get(`/exams/${examId}/edit`);
    };

    const handerAffectExam = (examId,chosenGroups)=>{
        
    }

    

    return (
        <AuthLayoutTeacher>
            <div>
                <table className="rounded-md shadow  bg-white p-4">
                    <thead>
                        <tr className=" child:text-start child:p-2">
                            <th>Controle name</th>
                            <th>state</th>
                            {/* <th>Start at</th>
                            <th>End at</th>
                            <th>State</th> */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {examsState.map((exam, index) => {
                            return (
                                <tr key={exam.id} className=" child:p-2">
                                    <td>{exam.name}</td>
                                    {/* <td>{exam.date}</td>
                                    <td>
                                        {exam.start} {exam.startTime}
                                    </td>
                                    <td>
                                        {exam.end} {exam.endtime}
                                    </td> */}
                                    <td className="">
                                        <SwitchState exam={exam} />
                                    </td>
                                    <td className="w-fit flex items-center">
                                        <div
                                            onClick={() => {
                                                handleEditExam(exam.id);
                                            }}
                                            className=" h-fit cursor-pointer p-2 rounded-l bg-sky-200 hover:bg-sky-300 text-sky-800 inline select-none"
                                        >
                                            Update
                                        </div>
                                        <div
                                            onClick={() => {
                                                handleDeleteExam(exam.id);
                                            }}
                                            className="h-fit cursor-pointer p-2 rounded-r bg-red-200 hover:bg-red-300 text-red-800 inline select-none"
                                        >
                                            Delete
                                        </div>

                                        <MultipleSelect
                                            allgroups={invitedGroups}
                                            selectedGroups={exam.Groups}
                                            exam = {exam}
                                            className="h-4"
                                            examsState = {examsState}
                                            setExamsList = {setExamsList}
                                        />
                                        <div
                                            onClick={() => {
                                                setModelState({
                                                    open : true,
                                                    exame : exam
                                                })
                                            }}
                                            className=" h-fit cursor-pointer p-2 rounded bg-green-200 hover:bg-green-300 text-green-800 inline select-none"
                                        >
                                            Affect
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <MyModal modelState={modelState} setModelState={setModelState} />
            </div>
        </AuthLayoutTeacher>
    );
};

export default ListExams;
