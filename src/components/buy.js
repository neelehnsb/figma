function Buy(){
    return (
        <div className = "w-[400px] bg-white rounded-md border-2 shadow-sm">
            <div className = " px-3 py-4">
                <div className = "flex justify-between border-[1px] h-[54px] rounded-lg p-2">
                    <div>
                        <p className = "text-[#676B72] text-[14px] font-[500]">Redeem 500 wallet points</p>
                        <p className = "text-[10px] font-[700] text-black">to save 200 more</p>
                    </div>
                    <div>
                        <a className = "text-[#5A4BDA] text-[14px] font-[800]">APPLY</a>
                    </div>
                    
                </div>
                <div className = "mt-3">
                    <div className = "flex justify-between border-[1px] rounded-lg p-3 h-[54px]">
                        <div>
                            <p className = "text-[#676B72] text-[14px] font-[500]">Write Coupon Code</p>
                        </div>
                        <div>
                            <a className = "text-[#5A4BDA] text-[14px] font-[800]">FIND COUPONS</a>
                        </div>
                        
                    </div>

                    <div className = "flex justify-between   border-[1px] rounded-b-lg w-[95%] align-middle mx-auto p-3 h-[81px]">
                        <div>
                            <p className = "text-[#676B72] text-[14px] font-[500]">Apply your referral code</p>
                            <p className = "text-[14px] font-[500] text-[#676B72] pb-1">to get 200 off</p>
                            <p className = "text-[#888] text-[10px] font-[500] ">Validity: 13 Dec 2022, 23:55</p>
                        </div>
                        <div className = "pt-3">
                            <a className = "text-[#239263] text-[14px] font-[600]">Click Here</a>
                        </div>
                        
                    </div>


                </div>
                
                <hr className = "my-4"></hr>

                <div className = " border-[1px] rounded-lg  text-[#3D3D3D] p-4">
                    <p className = "mb-4  text-[20px] font-[700]">Payment Summary</p>
                    <div className = "flex justify-between text-[14px] mb-1 font-[500]">
                        <p>Price {"(3 items)"}</p>
                        <p>5999</p>
                    </div>
                    <div className = "flex justify-between text-[14px] mb-1 font-[500]">
                        <p>Discount</p>
                        <p className = "text-[#3F8E58]">-299</p>
                    </div>
                    <div className = "flex justify-between text-[14px] mb-1 font-[500]">
                        <p>Delivery Charges </p>
                        <p>99</p>
                    </div>
                    <div className = "flex justify-between text-[14px] mb-1 font-[500]">
                        <p>Coupon Disc.</p>
                        <p className = "text-[#3F8E58]">-99</p>
                    </div>

                    <hr></hr>

                    <div className = "flex justify-between text-[16px] mb-1 text-base font-[700]">
                        <p>Total Amount</p>
                        <p className = "text-[#3D3D3D]">5601</p>
                    </div>
                    
                    
                </div>

                <div>
                    <button className = "w-full py-[14px] rounded-md mt-2 text-white text-[18px] bg-[#5A4BDA]">PROCEED TO BUY</button>
                </div>

            </div>
        </div>
    )
}

export default Buy