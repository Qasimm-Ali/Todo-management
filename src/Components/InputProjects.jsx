import Inputs from "./Inputs";

export default function InputProjects({onCancel}){
    return<>
    <div className=" w-[35rem] mt-16 flex flex-col  ml-12  ">
        <menu className="flex gap-3 justify-end items-center my-4 ">
            <button onClick={onCancel} className="border-[1px] border-black px-2 py-1 rounded-md text-stone-700 hover:text-stone-900  ">Cancel</button>
            <button className="bg-stone-700 px-4 py-1 text-stone-400 rounded-md hover:text-white hover:bg-stone-800  ">Save</button>
        </menu>
        <Inputs  label='Title' />
        <Inputs  label="Description" textarea />
        <Inputs type="Date" label='Due Date' />
    </div>
    </>
}