import Leftnav from './Leftnav'
import Exp from './experiment'
import Header from './header'
import Recommend from './recommend'
import Summary from './summary'

function Main(){
    return (
        <div className = "bg-[#F8F8F8] bg-cover">
            {/* <Leftnav/>
            <Header/>
            <div className = " bg-cover h-auto">
                <Summary/>
                <Recommend/>
            </div> */}

            <Exp/>

        </div>
    )
}

export default  Main