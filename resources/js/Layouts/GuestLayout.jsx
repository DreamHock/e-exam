export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className=" group flex items-center cursor-default">
                <div className=" font-bold text-3xl bg-slate-200 hover:bg-slate-300 p-2 rounded-l-lg duration-100">
                    <span className="text-5xl text-sky-500 underline">T</span>
                    eacher
                </div>
                <div className=" group-hover:border-4 group-hover:border-r-orange-500 duration-100 group-hover:border-l-sky-500 h-full"></div>
                <div className=" font-bold text-3xl bg-slate-200 hover:bg-slate-300 p-2 rounded-r-lg duration-100">
                    <span className="text-5xl text-orange-500 underline">
                        S
                    </span>
                    tudent
                </div>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
