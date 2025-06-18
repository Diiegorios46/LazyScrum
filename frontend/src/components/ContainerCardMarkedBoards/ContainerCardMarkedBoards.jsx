import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

// 🟥 Rojo claro: tareas urgentes o bloqueadas.

// 🟧 Naranja: tareas en progreso.

// 🟨 Amarillo: tareas por revisar.

// 🟩 Verde claro: tareas completadas.

// 🟦 Azul claro: tareas nuevas o sin asignar.

// 🟪 Violeta: tareas importantes pero no urgentes.

const colorCard = "#48cae4";

const ContainerCardMarkedBoards = () => {
    const navigate = useNavigate();

    const handleOnclick = (id) => {
        navigate(`/workspace/${id}`)
    }


    return (
        <>
            <Card content={"card 1"} like={"⭐"} className={`bg-red-400 w-2/6 h-30 flex justify-between text-white relative shadow-sm rounded-sm  cursor-pointer`} onClick={() => handleOnclick()}/>
            <Card content={"card 2"} like={"⭐"} className={`bg-green-400 w-2/6 h-30 flex justify-between text-white relative shadow-sm rounded-sm  cursor-pointer`} onClick={() => handleOnclick()}/>
            <Card content={"card 3"} like={"⭐"} className={`bg-blue-400 w-2/6 h-30 flex justify-between text-white relative shadow-sm rounded-sm hover:bg-[#00b4d8] cursor-pointer`} onClick={() => handleOnclick()}/>
        </>

    )
}

export default ContainerCardMarkedBoards;