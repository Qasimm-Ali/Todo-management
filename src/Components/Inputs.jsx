export default function Inputs({ label, textarea, ...props }) {
    let cssClass =
        "bg-stone-200 w-[70%] focus:border-b-2 border-stone-600 outline-none  rounded-sm";
    let cssClass2 =
        "bg-stone-200 w-[70%] focus:border-b-2 border-stone-600 outline-none h-[35px] rounded-sm ";
    return (
        <>
            <div>
                <p>
                    <label className="text-xl font-sans ">{label} </label>
                </p>
                {textarea ? (
                    <textarea className={cssClass} {...props} />
                ) : (
                    <input className={cssClass2} type="text" {...props} />
                )}
            </div>
        </>
    );
}
