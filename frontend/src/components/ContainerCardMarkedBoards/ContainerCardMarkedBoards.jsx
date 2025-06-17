import Card from "../Card/Card";

const ContainerCardMarkedBoards = () => {
    return (
        <>
            <div className='p-6 text-2xl'>📕Marked boards</div>
            <div className='flex justify-between p-4 gap-4'>
                <Card content={"card 1"} like={"⭐"} className={"bg-[#03045e] w-2/6 h-30 flex justify-between text-white relative"}/>
                <Card content={"card 2"} like={"⭐"} className={"bg-[#03045e] w-2/6 h-30 flex justify-between text-white relative"}/>
                <Card content={"card 3"} like={"⭐"} className={"bg-[#03045e] w-2/6 h-30 flex justify-between text-white relative"}/>
            </div> 
        </>

    )
}

export default ContainerCardMarkedBoards;