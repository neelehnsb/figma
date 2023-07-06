import Img2 from "./img/Rectangle.png"

function Buying(){
    return (
        <div className = "w-[400px] bg-white rounded-md border-2 shadow-sm mt-3 p-4">
            <div className = "w-[291px]">
                <div className = "flex gap-1 text-[16px] font-[600]">
                    <p className = "text-[#757575]">You are buying</p>
                    <p className = "text-[#3D3D3D]">{'(3)'} items</p>
                </div>

                <div className = "mt-[17px] flex justify-between gap-5 text-center">
                    <div className = "w-[83.6px] px-[8.8px] pt-[8.8px] border-[1.1px] rounded-[4.4px] border-[#DDEBF8]">
                        <img className = "" src = {Img2}/>
                        <p className = "text-xs font-[600] ">Arjuna JEE Batch...</p>
                        <p className = "text-[12px] text-[#757575] font-[500]">5999</p>
                    </div>
                    <div className = "w-[83.6px] px-[8.8px] pt-[8.8px] border-[1.1px] rounded-[4.4px] border-[#DDEBF8]">
                      <img src = {Img2}/>
                        <p className = "text-xs font-[600] ">Champion Combo</p>
                        <p className = "text-[12px] text-[#757575] font-[500]">5999</p>
                    </div>
                    <div className = "w-[83.6px] px-[8.8px] pt-[8.8px] border-[1.1px] rounded-[4.4px] border-[#DDEBF8]">
                       <img src = {Img2}/>
                        <p className = "text-xs font-[600] ">Arjuna JEE Books...</p>
                        <p className = "text-[12px] text-[#757575] font-[500]">5999</p>
                    </div>

                </div>

            </div>
            
            
        </div>
    )
}

export default Buying