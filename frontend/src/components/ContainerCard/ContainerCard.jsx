import Card from '../Card/Card.jsx';

const ContainerCard = () => {
    return(
        <div className='flex flex-row justify-between gap-2'>
            <Card content={"card 1"} like={"⭐"} className={"bg-[#03045e] w-2/6 h-30 flex justify-between text-white relative"}/>
            <Card content={"card 2"} like={"⭐"} className={"bg-[#03045e] w-2/6 h-30 flex justify-between text-white relative"}/>
            <Card content={"+"} className={"bg-[#03045e] w-2/6 h-30 flex justify-center items-center rounded-sm text-white"}/>
        </div>
    )
}

export default ContainerCard