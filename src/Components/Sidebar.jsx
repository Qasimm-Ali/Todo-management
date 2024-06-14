import Buttons from "./Buttons";

export default function Sidebar({onClick, listOfProjects}){
    return(<>
    <aside className="w-[40%] bg-stone-900 py-12 text-stone-300 my-5 rounded-r-md   ">
        <div className=" px-12">
            <p className="font-medium text-2xl "> Your Projects </p>
            <div className="pt-4">
            <Buttons onClick={onClick}>+ Add Project </Buttons>
            </div>
        </div>
        <ul className="mt-7 w-[90%] px-2  ">
            {listOfProjects.map((item, ind) => (<>
                <li key={ind} className=" min-h-7 ">  
                    <span> {item.title} </span>
                    <span className="float-right"> {item.dueDate} </span>
                </li>
            </>
            ))}
        </ul>
    </aside>
    </>)
}