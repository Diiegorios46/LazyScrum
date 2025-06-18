import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

const colorCard = "#48cae4";

const ContainerCardMarkedBoards = () => {
    const navigate = useNavigate();

    const handleOnclick = (id) => {
        navigate(`/workspace/${id}`)
    }


    return (
        <>
            <div className='p-6 text-2xl'>⭐Marked boards</div>
            <div className='flex justify-between p-4 gap-2'>
                <Card content={"card 1"} like={"⭐"} className={`bg-[${colorCard}] w-2/6 h-30 flex justify-between text-white relative shadow-sm rounded-sm hover:bg-[#00b4d8]`} onClick={() => handleOnclick()}/>
                <Card content={"card 2"} like={"⭐"} className={`bg-[${colorCard}] w-2/6 h-30 flex justify-between text-white relative shadow-sm rounded-sm hover:bg-[#00b4d8]`} onClick={() => handleOnclick()}/>
                <Card content={"card 3"} like={"⭐"} className={`bg-[${colorCard}] w-2/6 h-30 flex justify-between text-white relative shadow-sm rounded-sm hover:bg-[#00b4d8]`} onClick={() => handleOnclick()}/>
            </div> 
        </>

    )
}

export default ContainerCardMarkedBoards;