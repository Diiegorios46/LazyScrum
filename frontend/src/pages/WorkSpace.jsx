import SeccionBoard from "../components/SeccionBoard/SeccionBoard";
import Nav from "../components/Nav/Nav";
import icono from "../resources/icono.png"
import {useBoard} from "../hooks/board"


const Workspace = ({}) => {
  const {createBoard , colectBoard } = useBoard();

  return (
    <>
      <header className="p-4 border-amber-50 border-b mx-auto flex justify-center">
        <Nav 
        imgIcono={icono}
        imgPerfil={"https://tse4.mm.bing.net/th/id/OIP.F_9kBxukF8upWJEk59U2tAHaHa?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"}/>
      </header>

      <main className="min-h-[700px]">
        <SeccionBoard colectBoard={colectBoard} createBoard={createBoard}/>
      </main>
    </>

  );
}

export default Workspace;