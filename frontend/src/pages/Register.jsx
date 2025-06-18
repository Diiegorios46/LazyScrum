import img from "../resources/img1.png";

const Register = () => {
    return (
        <section className="grid grid-cols-1  w-full h-screen place-items-center ">
            <img className="absolute z-0 h-full w-full bg-cover" src={img} alt=""/>

            <div className="flex flex-col justify-center items-center h-full z-10">
                <div>
                    <h1 className="text-3xl font-medium">📋Lazy Scrum</h1>
                </div>
                <form className="flex flex-col justify-center items-center h-8/12 gap-6">
                    <h1 className="text-3xl mb-4 font-bold">Register</h1>
                    <input className="w-full m-4 p-4 border-none rounded shadow-sm" type="text" placeholder="enter your email" />
                    <label htmlFor="">By registering, I accept the Terms of Service and their privacy policy.</label>
                    <button className="w-1/2 m-4 p-4 border cursor-pointer rounded-full border-none bg-blue-400 text-white text-xl" type="button">Register</button>
                </form>
                <div className="flex flex-col justify-center items-center">
                    <span>Do you already have an account?</span>
                    <a href="/Login" className="text-blue-500">Login</a>
                </div>
            </div>
        </section>
    )
}

export default Register;