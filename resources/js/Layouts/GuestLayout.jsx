import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link
                    href="/"
                    className=" group text-3xl bg-slate-200 hover:bg-slate-300 px-2 py-1 rounded-lg duration-100 flex items-center"
                >
                    <span className="text-5xl font-bold">
                        E
                    </span>
                    <span className="text-5xl duration-100">-exam</span>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
