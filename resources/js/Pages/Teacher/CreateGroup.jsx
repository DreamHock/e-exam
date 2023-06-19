import AuthLayoutTeacher from "@/Layouts/AuthLayoutTeacher";
import QuestionAnswers from "./components/QuestionAnswers";
import { useEffect, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
import Test from "@/Components/Time";
import GroupInformations from "./components/GroupInformations";
import TransferList from "./components/TrasferList";
import { Alert, Snackbar } from "@mui/material";

const initialState = {
    question: "",
    mark: 0,
    answers: [],
};

const CreateGroup = ({ students }) => {


    const [info, setInfo] = useState({
        name: "",
    });
    const [SnakeBar, setSnakeBar] = useState({ open: false, message: "", error: false });
    const [studentOneGroup, setStudentsOneGroup] = useState([])
    const [studentNotOnGroup, setStudentsNotOnGroup] = useState([...students])

    useEffect(() => {
        console.log(studentNotOnGroup, "not");
        console.log(studentOneGroup, "on");
    }, [studentNotOnGroup, studentOneGroup])

    const submitHandler = () => {
        if (info.name.length > 0) {

            var selectedStudents = studentOneGroup.map(Ele => Ele.id)
            console.log(selectedStudents);
            router.post("/groups", {
                name: info.name,
                selectedStudents: selectedStudents
            });
        } else {
            HandelSnakeBar(true, "please enter group name")
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
                    Create Group
                </PrimaryButton>
            </div>

            <GroupInformations
                infoHandler={infoHandler}
            />
            <h2 className="">Students</h2>
            <TransferList left={studentNotOnGroup} setLeft={setStudentsNotOnGroup} right={studentOneGroup} setRight={setStudentsOneGroup} />

            {/* <div className="flex flex-wrap gap-4">
                {questions.map((question, index) => {
                    return (
                        <QuestionAnswers
                            questions={questions}
                            setQuestions={setQuestions}
                            index={index}
                            deleteQuestion={deleteQuestion}
                            number={index + 1}
                        />
                    );
                })}
                <button
                    type="button"
                    className=" text-8xl flex justify-center items-center border-2 rounded-md bg-gray-200 hover:bg-gray-300"
                >
                    +
                </button>
            </div> */}
            {/* </form> */}
            <Snackbar open={SnakeBar.open} autoHideDuration={6000} onClose={() => {
                setSnakeBar({ open: false, message: "", error: false })
            }}>
                <Alert onClose={() => setSnakeBar({ open: false, message: "", error: false })} severity={SnakeBar.error ? "error" : "success"} sx={{ width: '100%' }}>
                    {SnakeBar.message}
                </Alert>
            </Snackbar>
        </AuthLayoutTeacher>
    );
};

export default CreateGroup;
