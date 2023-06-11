import SwitchState from "@/Components/SwitchState";
import AuthLayoutTeacher from "@/Layouts/AuthLayoutTeacher";
import { router } from "@inertiajs/react";
import { format } from "date-fns";
import React, { useEffect } from "react";

const ListGroup = ({ groups }) => {
    useEffect(() => {
        console.log(groups);
    }, [groups]);

    const handleDeleteGroup = (groupId) => {
        router.delete(`/groups/${groupId}`);
    };

    const handleEditGroup = (groupId) => {
        router.get(`/groups/${groupId}/edit`);
    };
    
    return (
        <AuthLayoutTeacher>
            <div>
                <table className="rounded-md shadow  bg-white p-4">
                    <thead>
                        <tr className=" child:text-start child:p-2">
                            <th>Group name</th>
                            <th>created at</th>
                            <th>modified at</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups.map((group, index) => {
                            var created_at = new Date(group.created_at)
                            var updated_at = group.updated_at != null ? new Date(group.updated_at) : null
                            return (
                                <tr key={group.id} className=" child:p-2">
                                    <td>{group.groupsName}</td>
                                    <td>
                                        {format(created_at, "yy/MM/dd hh:mm:ss")}
                                    </td>
                                    <td className="flex justify-center items-center">
                                        {updated_at == null ?
                                            <svg className=" w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"></path>
                                            </svg> :
                                            format(updated_at, "yy/MM/dd hh:mm:ss")}
                                    </td>
                                    <td className="w-fit">
                                        <div
                                            onClick={() => {
                                                handleEditGroup(group.id)
                                            }}
                                            className=" cursor-pointer p-2 rounded-l bg-sky-200 hover:bg-sky-300 text-sky-800 inline select-none"
                                        >
                                            Update
                                        </div>
                                        <div
                                            onClick={() => {
                                                handleDeleteGroup(group.id)
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

export default ListGroup;
