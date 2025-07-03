import Board from "../Board/Board";

const ContainerBoard = ({colectBoard}) => {
                // <Board text={"Marketing Campaign"} color={"#efddd5"} href={"./board"}/>
                // <Board text={"Product Launch"}  color={"#efd5e0"}/>
                // <Board text={"Customer Feedback"} color={"#e5efd5"}/>
                // <Board text={"Content Calendar"} color={"#d5e7ef"}/>
                // <Board text={"Event Planning"} color={"#efe7d5"}/>

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            
            {colectBoard.map( (prev)  => {
                return <Board key={prev.id} text={prev.text} color={prev.color} href={prev.href}/>
            })}

        </div>
    )

 
}

export default ContainerBoard ;