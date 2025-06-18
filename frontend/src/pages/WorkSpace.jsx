import { useEffect, useState } from 'react';
import Nav from '../components/Nav/Nav.jsx';
import CardNote from "../components/CardNote/CardNote.jsx";
import AddCardNote from "../components/AddCardNote/AddCardNote.jsx";

const Workspace = ({nameWorkSpace, like}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const liked = like == "like" ? "★" : "";
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    console.log(isMobile)
    console.log("sidebar" + isSidebarOpen)
  }, [isMobile,isSidebarOpen])
  

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    // Seteamos el estado inicial
    setIsMobile(mediaQuery.matches);

    // Función que actualiza el estado cuando cambia el tamaño
    const handleChange = (e) => setIsMobile(e.matches);
    // Agregamos el listener
    mediaQuery.addEventListener("change", handleChange);

    // Limpieza al desmontar el componente
    return () => mediaQuery.removeEventListener("change", handleChange);

  }, [isMobile]);

  const viewSidebar = !isMobile || isSidebarOpen;
  
  return (
    <>
      <main className='flex flex-col h-screen'>
        <Nav icon={"https://tse3.mm.bing.net/th/id/OIP.KyR-ljtO0tTD7vLEYz6HvgHaHa?rs=1&pid=ImgDetMain"} name={"Diego Rios"}/>

        <section className='flex h-full'>
          <article className={`
            sm:w-2/12 h-full 
            ${isSidebarOpen ? 'w-full' : 'w-16'} 
            absolute sm:relative 
            bg-[#08a9ff] p-4 
            flex flex-col items-center gap-6 
            transition-all duration-300
            z-10
          `}>
            <div className="cursor-pointer sm:hidden" onClick={toggleSidebar}>
              {isSidebarOpen ? '🔙' : '☰'}
            </div>
            
            {viewSidebar && (
              <>
                <div className='bg-white rounded-xl w-full px-3 py-2 flex items-center justify-between shadow-md'>
                  <span className='text-[#0077b6] font-bold text-sm'>{nameWorkSpace}</span>
                  <span className='text-[#0077b6] text-xl'>{liked}</span>
                </div>
                <div className='w-full flex flex-col items-start gap-2'>
                  <div className='flex items-center gap-2 text-white font-semibold'>
                    <span className='text-xl'>○</span> 
                    <span>Filtros</span>
                  </div>
                  <ul className='bg-white rounded-xl w-full px-4 py-3 flex flex-col gap-1 text-[#0077b6] font-medium shadow'>
                    <li className='cursor-pointer hover:underline'>todas</li>
                    <li className='cursor-pointer hover:underline'>+ completadas</li>
                    <li className='cursor-pointer hover:underline'>- completadas</li>
                  </ul>
                </div>
              </>
            )}

          </article>

          {/* Contenido principal */}
          <article className='p-4 flex flex-row items-start flex-wrap w-full sm:w-10/12'>
            <div className='w-full flex gap-2 flex-wrap ml-14'>
              <CardNote title={"Ir al gym"} check={"checked"} task={"hacer 12 dominadas"} />
              <CardNote title={"Ir al comer"} check={""} task={"hacer 12 dominadas"}/>
              <CardNote title={"Estudiar"} check={""} task={"hacer 12 dominadas"}/>
              <div className='flex justify-center items-center w-42 p-6'>
                <AddCardNote/>                
              </div>
            </div>
          </article>
        </section>
      </main>
    </> 
  );
}

export default Workspace;