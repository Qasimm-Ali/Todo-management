import Buttons from "./Buttons";

export default function Sidebar({onClick, listOfProjects, onSelect, selectedProjectId}){

    return(<>
    <aside className="w-[30%] px-12 bg-stone-900 py-12 text-stone-300 my-5 rounded-r-md   ">
        <div >
            <p className="font-medium text-2xl "> Your Projects </p>
            <div className="pt-4">
            <Buttons onClick={onClick}>+ Add Project </Buttons>
            </div>
        </div>
        <ul className="mt-7 px-2 ">
            {listOfProjects.map((item, ind) => {
                let cssClasses = "w-full text-left mt-4 px-2 py-1 rounded-sm text-stone-400 hover:text-stone-200  "
                if(item.id === selectedProjectId){
                    cssClasses += "bg-stone-800 text-stone-300" 
                }
                return(
                <li key={ind} className=" min-h-7 ">  
                    <button className={cssClasses} > {item.title} </button> 
                </li>
                )
            }
            )}
        </ul>
    </aside>
    </>)
}