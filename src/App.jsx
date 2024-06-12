import { useState } from "react";
import Buttons from "./Components/Buttons";
import InputProjects from "./Components/InputProjects";
import NoProjects from "./Components/NoProjects";
import Sidebar from "./Components/Sidebar";

export default function App(){
  const [handleProject, sethandleProject] = useState({
    handleProjectState : false
  })
  const handleOpenProject = () =>{
    sethandleProject(prevStates => {
      return{
        ...prevStates,
        handleProjectState : true
      }
    })
  }
  const handleCancelProject = () => {
    sethandleProject(prevStates => {
      return{
        ...prevStates,
        handleProjectState : false
      }
    })
  }
  let content ; 
  if(handleProject.handleProjectState === false){
    content = <NoProjects onClick={handleOpenProject}/> 
  }else if(handleProject.handleProjectState === true){
    content = <InputProjects onCancel={handleCancelProject}/>
  }
  
  return(<>
  <main className="flex h-screen ">
  <Sidebar onClick={handleOpenProject}/>
  {content}
  </main>
  </>)
}