import Inputs from "./Inputs";
import { useRef } from "react";
import Modal from "./Modal";

export default function InputProjects({onAdd,onCancel}){
    const modal = useRef()

    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    const handleSave = () => {
       const enteredTitle = title.current.value;
       const enteredDescription = description.current.value;
       const enteredDueDate = dueDate.current.value;
       if(enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim()==="" ){
        modal.current.open()
        return;
       }

       onAdd({
        title : enteredTitle,
        description : enteredDescription,
        dueDate : enteredDueDate
       })
       
    }
    return<>
    <Modal ref={modal} onCancel={onCancel} />
    <div className=" w-[35rem] mt-16 flex flex-col  ml-12  ">
        <menu className="flex gap-3 justify-end items-center my-4 ">
            <button onClick={onCancel} className="border-[1px] border-black px-2 py-1 rounded-md text-stone-700 hover:text-stone-900  ">Cancel</button>
            <button onClick={handleSave}  className="bg-stone-700 px-4 py-1 text-stone-400 rounded-md hover:text-white hover:bg-stone-800  ">Save</button>
        </menu>
        <Inputs ref={title}  label='Title' />
        <Inputs ref={description} label="Description" textarea />
        <Inputs ref={dueDate} type="Date" label='Due Date' />
    </div>
    </>
}