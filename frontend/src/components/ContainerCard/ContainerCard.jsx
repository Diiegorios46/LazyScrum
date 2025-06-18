import Card from '../Card/Card.jsx';

const colorCard = "#48cae4";

const ContainerCard = () => {
    return(
        <div className='flex flex-row justify-between gap-2'>
            <Card content={"card 1"} like={"⭐"} className={`bg-[${colorCard}] w-2/6 h-30 flex justify-between text-white relative shadow-sm rounded-sm hover:bg-[#00b4d8]`}/>
            <Card content={"card 2"} like={"⭐"} className={`bg-[${colorCard}] w-2/6 h-30 flex justify-between text-white relative shadow-sm rounded-sm hover:bg-[#00b4d8]`}/>
            <Card content={"+"} like={"⭐"} className={`bg-[${colorCard}] w-2/6 h-30 flex justify-center items-center text-white relative shadow-sm rounded-sm hover:bg-[#00b4d8]`}/>
        </div>
    )
}

export default ContainerCard