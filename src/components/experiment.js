import Leftnav from "./Leftnav"
import Buy from "./buy"
import Buying from "./buying"
import Header from "./header"
import Recommend from "./recommend"
import Summary from "./summary"

function Exp(){
    return (
        <div className="flex bg-gray-50"> 
            <Leftnav/>
            
            <div className = "w-full">
                <Header/>
                
                <div className = "h-[90vh] mx-auto overflow-hidden overflow-y-scroll">
                    <p className = " text-[32px] w-10/12 mx-auto font-[700] p-4">Order Summary</p>
                    <div className = "flex  justify-center gap-4">
                        <div className = "">
                            <Summary/>
                            <Recommend/>
                        </div>
                        <div className= "w-auto">
                            <Buy/>
                            <Buying/>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            


        </div>
    )
}

export default Exp