import { forwardRef, useRef } from "react"
import { useImperativeHandle } from "react";
const Modal =  forwardRef(function Modal({onCancel}, ref){
    const dialog = useRef()
    useImperativeHandle(ref, () =>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })
    return(<>
    <dialog ref={dialog} className=" px-4 py-6 rounded-md bg-stone-300 backdrop:bg-stone-900/90 " >
        <p className="text-stone-700 text-2xl"> Invalid Input </p>
        <p className="text-xl"> Please provide Valid Input </p>
        <form method="dialog">
            <button onClick={onCancel} className=" mt-2 float-right bg-stone-800 rounded-sm text-white px-2 py-2  ">Close</button>
        </form>
    </dialog>
    </>)
})

export default Modal;