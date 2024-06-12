import Buttons from "./Buttons";

export default function Sidebar({onClick}){
    return(<>
    <aside className="w-[30%] bg-stone-900 px-12 py-12 text-stone-300 my-5 rounded-r-md   ">
        <div>
            <p className="font-medium text-2xl "> Your Projects </p>
            <div className="pt-4">
            <Buttons onClick={onClick}>+ Add Project </Buttons>
            </div>
        </div>
        <ul></ul>
    </aside>
    </>)
}