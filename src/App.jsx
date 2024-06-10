import Buttons from "./Components/Buttons";
import NoProjects from "./Components/NoProjects";
import Sidebar from "./Components/Sidebar";

export default function App(){
  return(<>
  <main className="flex h-screen ">
  <Sidebar/>
  <NoProjects/>
  </main>
  </>)
}