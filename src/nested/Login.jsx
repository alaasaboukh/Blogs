function Login({ show, setShow }) {
    return (
        show && (
            <div className="fixed w-full h-full flex items-center justify-center bg-black bg-opacity-50 p-5">
                <div className="login w-[400px] bg-white p-6 rounded-lg shadow-lg relative">
                    <h4 className="text-center text-xl font-semibold uppercase text-gray-900 mb-4">
                        please login here!
                    </h4>
                    <form>
                        <div className="box mb-3">
                            <label className="">Email</label>
                            <input
                                type="email"
                                className=" w-full p-2 outline-none rounded-md border border-[#ddd] mt-1"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div className="box">
                        <label className="mb-2">Password</label>
                        <input
                            type="password"
                            className=" w-full p-2 outline-none rounded-md mb-3 border border-[#ddd] mt-1"
                            placeholder="type your password"
                        />
                        </div>
                        <div className="Remember flex mb-3">
                            <input type="checkbox" />
                            <h3 className="ml-2">Remember me</h3>
                        </div>
                        <button
                            onClick={(e) => e.preventDefault()}
                            className="mx-auto w-full px-6 py-2 block bg-gray-900 text-white rounded-md transition-all duration-500 hover:bg-orange-500"
                        >
                            Login
                        </button>
                        <span className="float-right mt-2 text-gray-900 cursor-pointer transition-all duration-500 hover:text-blue-700 hover:underline">Forget Password?</span>
                        <button
                            onClick={() => setShow(false)}
                            className="absolute top-0 right-3 transition-all duration-500 hover:text-red-500 text-2xl outline-none"
                        >
                            x
                        </button>
                    </form>
                </div>
            </div>
        )
    );
}

export default Login;
