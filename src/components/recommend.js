function Recommend(){
    return (
        <div className = "max-w-[553px] h-auto px-4 pt-4 pb-[22px] rounded-md border-2 shadow-md bg-white">
            <p className = " text-xl font-[700]">PW Recommended Combos</p>
            <ul className = "border-2 border-indigo-200 grid grid-cols-4 text-center">
                <li className = "w-full cursor-pointer border-r-2 border-indigo-200">Champion</li>
                <li className = "w-full active:bg-indigo-100 border-r-2 cursor-pointer border-indigo-200">Topper</li>
                <li className = "w-full active:bg-indigo-100 border-r-2 cursor-pointer border-indigo-200">Sprint</li>
                <li className = "w-full active:bg-indigo-100 cursor-pointer ">Basic</li>
            </ul> 
            <div className = " flex justify-between border-2 border-x-indigo-200 border-b-indigo-200 border-t-0">
                <p className = "">4 items included in this combo</p>
                <a href = "#" className = "text-blue-700">More info</a>
            </div>

        </div>
    )
}

export default Recommend