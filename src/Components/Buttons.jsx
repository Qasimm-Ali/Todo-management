export default  function Buttons({children, ...props}){
    return(<>
    <button className="px-3 py-1 bg-stone-600 text-stone-300 hover:bg-stone-700 hover:text-white  rounded-sm text-[18px] " {...props} >{children} </button>
    </>)
}