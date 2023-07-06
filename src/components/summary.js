import Rectangle from "./img/Rectangle.png"
import img1 from "./img/Rectangle.png"

function Summary(){
    return(

    <div className = "border-2 shadow-md rounded-lg w-[553px] p-4 bg-white"> 
        <div className=" rounded-lg ">
            <h4 className=" text-2xl font-[700] pb-5">Items in Cart</h4>
            <div className="flex gap-4">
                <img src={img1} className="rounded-lg"/>
                <div className="pt-2">
                    <h5 className="">Dropper NEET Material 2022 Edition</h5>
                    <div className="flex gap-4 ">
                        <p className="font-bold">699</p>
                        <p className=" text-gray-500 line-through"> 899</p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    )
}

export default Summary