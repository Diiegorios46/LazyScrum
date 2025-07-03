import ContainerBoard from "../../components/ContainerBoard/ContainerBoard"
import Button from "../Button/Button";

const SeccionBoard = ({colectBoard , createBoard}) => {
    return(
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-4 md:px-8 my-4">
            
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center font-semibold w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Your Boards</h1>
                <div className="mt-4 sm:mt-0">
                    <Button onClick={createBoard}/>
                </div>
            </div>

            <div>
                <ContainerBoard colectBoard={colectBoard}/>
            </div>

        </div>
    )
}

export default SeccionBoard;