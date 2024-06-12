import Buttons from "./Buttons";
import image from "../assets/no-projects.png"

export default function NoProjects({onClick}){
    return<>
    <div className="h-[70%] w-[100%] flex flex-col justify-center items-center  " >
        <img src={image} className="h-[100px]   " alt="Image" />
        <p className="text-2xl text-stone-600 ">You have no Projects </p>
        <p className="text-xl text-stone-600">Click on button to add Projects </p>
        <div className="mt-3 ">
        <Buttons onClick={onClick}>Create new Project </Buttons>
        </div>
    </div>
    </>
}