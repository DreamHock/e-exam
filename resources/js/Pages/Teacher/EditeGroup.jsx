import AuthLayoutTeacher from "@/Layouts/AuthLayoutTeacher";
import QuestionAnswers from "./components/QuestionAnswers";
import { useEffect, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
import Test from "@/Components/Test";
import GroupInformations from "./components/GroupInformations";
import TransferList from "./components/TrasferList";
import { Alert, Snackbar } from "@mui/material";

const initialState = {
    question: "",
    mark: 0,
    answers: [],
};

const EditeGroup = ({ group,groupStudent,studentWithNoGroup }) => {


    const [info, setInfo] = useState({
        name: group.groupsName,
    });
    const [SnakeBar, setSnakeBar] = useState({ open: false, message: "", error: false });
    const [studentOneGroup, setStudentsOneGroup] = useState([...groupStudent])
    const [studentNotOnGroup, setStudentsNotOnGroup] = useState([...studentWithNoGroup])

    useEffect(() => {
        console.log(studentNotOnGroup, "not");
        console.log(studentOneGroup, "on");
    }, [studentNotOnGroup, studentOneGroup])

    const submitHandler = () => {
        if(info.name.length>0){

            var selectedStudents = studentOneGroup.map(Ele => Ele.id);
            var unWantedStudents = groupStudent.map((ele)=>{
                if(! selectedStudents.includes(ele.id)){
                    return ele.id ;
                }
            })
            console.log(selectedStudents)
            console.log(unWantedStudents)
            router.put("/groups/"+group.id, {
                name: info.name,
                selectedStudents :selectedStudents,
                unWantedStudents :unWantedStudents

            });
        }else{
            HandelSnakeBar(true,"please enter group name")
        }
    };

    const HandelSnakeBar = (error, message) => {
        setSnakeBar({
            open: true,
            message: message,
            error: error,
        })
    }

    const infoHandler = (target, value) => {
        const updatedInfo = { ...info };
        updatedInfo[target] = value;
        setInfo(updatedInfo);
    };

    return (
        <AuthLayoutTeacher>
            {/* <form action="" onSubmit={submitHandler}> */}
            <div className="flex justify-end">
                <PrimaryButton
                    className=""
                    onClick={submitHandler}
                >
                    update Group
                </PrimaryButton>
            </div>

            <GroupInformations
                infoHandler={infoHandler}
                name={info.name}
                
            />
            <h2 className="">Students</h2>
            <TransferList left={studentNotOnGroup} setLeft={setStudentsNotOnGroup} right={studentOneGroup} setRight={setStudentsOneGroup} />

            
            {/* </form> */}
            <Snackbar open={SnakeBar.open} autoHideDuration={6000} onClose={()=>{
                setSnakeBar({ open: false, message: "", error: false })
            }}>
                <Alert onClose={()=>setSnakeBar({ open: false, message: "", error: false })} severity={SnakeBar.error?"error":"success"} sx={{ width: '100%' }}>
                    {SnakeBar.message}
                </Alert>
            </Snackbar>
        </AuthLayoutTeacher>
    );
};

export default EditeGroup;
