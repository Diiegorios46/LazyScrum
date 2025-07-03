import img from "../resources/img1.png";
import icono from "../resources/icono.png";

const Login = () => {
    return (
        <section className="relative grid grid-cols-1 w-full h-screen place-items-center">
            <img className="absolute z-0 h-full w-full object-cover" src={img} alt="" />

            <div className="flex flex-col justify-center items-center h-full z-10 w-full">
                <div className="flex items-center gap-2">
                    <img src={icono} alt="icono" className="w-8 h-8" />
                    <h1 className="text-3xl font-medium">Lazy Scrum</h1>
                </div>
                <form className="flex flex-col justify-center items-center w-full max-w-md gap-6 bg-white/80 rounded-xl shadow-lg p-8 mt-6">
                    <h1 className="text-3xl mb-4 font-bold text-gray-800">Login</h1>
                    <input
                        className="w-full p-4 border-none rounded shadow-sm"
                        type="text"
                        placeholder="Enter your email"
                    />
                    <input
                        className="w-full p-4 border-none rounded shadow-sm"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <label className="text-xs text-gray-600 text-center">
                        By registering, I accept the Terms of Service and their privacy policy.
                    </label>
                    <button
                        className="w-full p-4 rounded-full border-none bg-[#438adb] hover:bg-blue-400 text-xl text-white transition-colors"
                        type="button"
                    >
                        Login
                    </button>
                </form>
                <div className="flex flex-col justify-center items-center mt-4">
                    <span className="text-gray-700">Do you not have an account?</span>
                    <a href="/" className="text-blue-500 hover:underline">Register</a>
                </div>
            </div>
        </section>
    )
}

export default Login;