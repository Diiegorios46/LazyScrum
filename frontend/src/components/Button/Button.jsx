
const Button = ({onClick}) => {
    return(
        <button
         onClick={onClick}
         className="text-white bg-[#2b362e] rounded-2xl px-5 py-2 cursor-pointer"
        >
            Create Board
        </button>
    )
}

export default Button;