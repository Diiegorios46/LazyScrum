import { useNavigate } from "react-router-dom";

const Nav = ({name,icon}) => {
    const navigate = useNavigate();
    
    const handleOnclick = (id) => {
        navigate(`/board/`)
    }


    return (
        <header className="bg-[#0077b6] w-full p-6">
            <nav className="grid grid-cols-2 justify-between">
                <div className="text-2xl text-white font-semibold cursor-pointer" onClick={(id)=> handleOnclick(id)}>📋LazyScrum</div>
                <div className="flex justify-end items-center gap-2">
                    <span className="text-2xl text-white font-semibold">{name}</span>
                    <img className="w-[40px] rounded-full" src={icon} alt="" />                    
                </div>
            </nav>
        </header>
    )
}

export default Nav;