import Nav from '../components/Nav/Nav.jsx';
import CardNote from "../components/CardNote/CardNote.jsx"

const Workspace = () => {
    
  // const { id } = useParams();
  
  return (
    <>
        <main className='flex flex-col h-screen'>

          <Nav icon={"https://tse3.mm.bing.net/th/id/OIP.KyR-ljtO0tTD7vLEYz6HvgHaHa?rs=1&pid=ImgDetMain"} name={"Diego Rios"}/>

          <section className='flex h-full'>
            <article className='w-2/12 h-full border-2'>
              <span>MyOrganization</span>
              <ul>
                Filter
                <li>All</li>
                <li>+ Completed</li>
                <li>- Completed</li>
              </ul>
            </article>
            <article className='w-8/12 p-4 flex flex-row gap-2 items-start'>
              <CardNote title={"Ir al gym"} check={"checked"} task={"hacer 12 dominadas"} />
              <CardNote title={"Ir al comer"} check={""} task={"hacer 12 dominadas"}/>
              <CardNote title={"Estudiar"} check={""} task={"hacer 12 dominadas"}/>
            </article>
          </section>


        </main>
    </>
    
  );
}

export default Workspace; 