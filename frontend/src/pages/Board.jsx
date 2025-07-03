import TaskCard from "../components/TaskCard/TaskCard";
import Nav from "../components/Nav/Nav";
import icono from "../resources/icono.png"

const Board = () => {
  return (
    <>
      <header className="p-4 border-b border-amber-50 mx-auto flex justify-center">
        <Nav
          imgIcono={icono}
          imgPerfil="https://tse4.mm.bing.net/th/id/OIP.F_9kBxukF8upWJEk59U2tAHaHa?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3"
        />
      </header>

      <main className="text-white min-h-screen p-8">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Project Alpha</h1>

          {/* Tabs */}
          <div className="flex space-x-6 border-b border-gray-600 mb-6">
            <button className="pb-2 text-white font-semibold border-b-2 border-white">
              To Do
            </button>
            <button className="pb-2 text-gray-400 hover:text-white transition">
              In Progress
            </button>
            <button className="pb-2 text-gray-400 hover:text-white transition">
              Completed
            </button>
          </div>

          {/* Task cards */}
          <div className="space-y-4">
            <TaskCard text="Design the landing page" />
            <TaskCard text="Create user personas" />
            <TaskCard text="Conduct user interviews" />
          </div>

          {/* Add card button */}
          <div className="mt-8">
            <button className="bg-[#1e1f1e] hover:bg-[#2a2b2a] px-6 py-2 rounded-full text-white font-semibold shadow">
              Add a card
            </button>
          </div>
          
        </section>
      </main>
    </>
  );
};

export default Board;
