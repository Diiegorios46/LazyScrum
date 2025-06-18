import Nav from '../components/Nav/Nav.jsx';
import ContainerCardMarkedBoards from "../components/ContainerCardMarkedBoards/ContainerCardMarkedBoards.jsx"
import ContainerCard from "../components/ContainerCard/ContainerCard.jsx"
import ContainerMembers from "../components/ContainerMembers/ContainerMembers.jsx"
import { useState } from 'react';


const Board = () => {
  const [listCard, setlistCard] = useState([
    {
      id:1,
      title:"Card 1",
      like:"⭐"
    },
    {
      id:2,
      title:"Card 1",
      like:"⭐"
    }
  ]) 

  const AddCard = () => {
    setlistCard(prev => [...prev , { id : prev.id + 1 , title: `Card ${prev.length + 1}`,like:"⭐" }] );
  }

  return (
    <>
      <Nav icon={"https://tse3.mm.bing.net/th/id/OIP.KyR-ljtO0tTD7vLEYz6HvgHaHa?rs=1&pid=ImgDetMain"} name={"Diego Rios"} />

      <main className='bg-white'>
        <section className='w-full max-w-7xl mx-auto px-4'>

          <div className='flex flex-col lg:flex-row'>

            {/* Barra lateral */}
            <article className='w-full lg:w-3/12 mb-4 lg:mb-0 mt-10'>
              <div className='flex flex-col gap-4 p-4 bg-[#0077b6] rounded-sm '>
                <span className='text-center text-2xl text-white border-b-2'>The space work</span>
                <div className='text-center text-xl shadow-sm w-full rounded-sm text-black bg-white py-2 cursor-pointer'>Diego Rios</div>
                <div className='text-center text-xl shadow-sm w-full rounded-sm text-black bg-white py-2 cursor-pointer'>Other usuario</div>
              </div>
            </article>

            {/* Contenido principal */}
            <article className='w-full lg:w-9/12'>

            <div className='p-6 text-2xl'>⭐Marked boards</div>
            <div className='flex justify-between p-4 gap-2'>
                <ContainerCardMarkedBoards />
            </div> 


              <div className='flex flex-col gap-4 p-4'>
                <h1 className='text-xl'>📍Your space work</h1>
                  <div className='bg-[#0077b6] flex rounded-xl'>
                    <ContainerMembers/>
                  </div>
                <ContainerCard listCard={listCard} AddCard={AddCard}/>
              </div>

            </article>

          </div>
        </section>
      </main>
    </>
  );
}

export default Board;
