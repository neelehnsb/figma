import Navs from "./navs"
import img2 from "./img/logo.png"
function Leftnav(){
    return (
        <aside className="min-w-[270px]  bg-white border  shadow-md relative left-0 top-0" >
               
                    
                        <a href="#" className="flex items-center p-2 ml- text-gray-900 rounded-lg group">
                            <img src={img2} className=""/>
                            <span className="flex-1 ml-3 text-xl  font-bold"> Physics Wallah</span>
                        </a>
                    <ul className=" w-11/12 mx-auto mt-4">
                        <li className = "flex justify-center">
                            <a href = "#">UPDATE ACADEMIC INFO </a>
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                            </a>
                        </li>
                        <hr className = "my-6"></hr>

                        <div className = "h-[80vh] overflow-hidden overflow-y-scroll">
                            <Navs title = "Home"/>
                            <Navs title = "Batches"/>
                            <Navs title = "Study"/>
                            <Navs title = "Library"/>
                            <Navs title = "Test Series"/>
                            <Navs title = "PW Store"/>
                            <Navs title = "Feed"/>
                            <hr className = "my-4"></hr>
                            <Navs title = "Bookmarks"/>
                            <Navs title = "Notifications"/>
                            <Navs title = "Offers"/>
                            <Navs title = "Refer & Earn"/>
                            <Navs title = "My Wallet"/>
                            <hr className = "my-4"></hr>

                            <li className = "text-blue-600 px-[24px] flex mb-8 ">
                                <a>See More </a>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                            </li>
                        </div>
                        
                        
                </ul>
        </aside>
    )
}

export default Leftnav