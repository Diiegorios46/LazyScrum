import Nav from '../components/Nav/Nav.jsx';
import ContainerCardMarkedBoards from "../components/ContainerCardMarkedBoards/ContainerCardMarkedBoards.jsx"
import ContainerCard from "../components/ContainerCard/ContainerCard.jsx"
import ContainerMembers from "../components/ContainerMembers/ContainerMembers.jsx"

const Board = () => {
  return (
    <>

        <Nav icon={"https://tse3.mm.bing.net/th/id/OIP.KyR-ljtO0tTD7vLEYz6HvgHaHa?rs=1&pid=ImgDetMain"} name={"Diego Rios"}/>

        <main className=''>
            <section className='w-3/4 mx-auto'>

                <div className='flex h-screen'>

                    <article className='w-3/12 h-auto flex flex-col justify-start mb-8'>
                        <div className='flex justify-center p-4'>
                            <h1 className='text-2xl shadow-sm w-full text-center rounded-sm bg-[#90e0ef] text-black py-2'>Home</h1>
                        </div>
                        <div className='flex flex-col gap-4 p-4 bg-[#0077b6] h-full rounded-sm'>
                            <span className='text-center text-2xl w-full text-white border-b-2'>The space work </span>
                            <div className='text-center text-xl shadow-sm w-full rounded-sm text-black bg-[#90e0ef] py-2'>Diego Rios</div>
                            <div className='text-center text-xl shadow-sm w-full rounded-sm text-black bg-[#90e0ef] py-2'>Other usuario</div>
                        </div>
                    </article>

                    <article className='w-full'>

                        <ContainerCardMarkedBoards/>
                        <div className='flex flex-col gap-4 p-4'>
                            <div>
                                <h1 className='text-xl'>📍Your space work</h1>
                            </div>
                            <ContainerMembers/>
                            <ContainerCard/>
                        </div>
                    </article>

                </div>
            </section>
        </main>
    </>
    
  );
}

export default Board; 