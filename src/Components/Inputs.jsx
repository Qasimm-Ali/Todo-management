import { forwardRef } from "react";
const Input = forwardRef(function Inputs({ label, textarea, ...props },ref) {
    let cssClass =
        "bg-stone-200 w-[70%] focus:border-b-2 border-stone-600 outline-none   rounded-sm";
    let cssClass2 =
        "bg-stone-200 w-[70%] focus:border-b-2 border-stone-600 outline-none p-3 h-[35px] rounded-sm ";
    return (
        <>
            <div>
                <p>
                    <label className="text-xl font-sans ">{label} </label>
                </p>
                {textarea ? (
                    <textarea ref={ref} className={cssClass} {...props} />
                ) : (
                    <input  ref={ref} className={cssClass2} type="text"  {...props} />
                )}
            </div>
        </>
    );
})
export default Input
