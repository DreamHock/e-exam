import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Guest from "@/Layouts/GuestLayout";
import { Link, Head, usePage } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const user = usePage().props.auth.user;
    console.log(user);
    return (
        <Guest>
            <div className="flex flex-col items-center">
                <Head title="Welcome" />
                <h2 className=" text-xl font-bold mb-2">
                    Welcome to exam application!
                </h2>
                <div className="flex items-center gap-3">
                    {!user ? (
                        <>
                            <Link
                                href={route('login')}
                                // className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                <SecondaryButton color="red" className="">
                                    Login
                                </SecondaryButton>
                            </Link>
                            {/* <div className="font-bold">Or</div>

                            <Link
                                href="login/students"
                                // className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                <SecondaryButton>Student</SecondaryButton>
                            </Link> */}
                        </>
                    ) : user.role == "teacher" ? (
                        <Link href={route("list.exams")}>
                            <SecondaryButton>List exams</SecondaryButton>
                        </Link>
                    ) : (
                        <Link href={route("student.dashboard")}>
                            <SecondaryButton>dashboard</SecondaryButton>
                        </Link>
                    )}
                </div>
            </div>
        </Guest>
    );
}
