function Header(){
    return (
            <nav className="w-full h-20 border-b-2 shadow-sm bg-white sticky top-0 right-0">
                <div className = "flex align-middle py-5 pl-[100px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
                <button className=" text-xl font-[700] ">Back</button>
                </div>
                

            </nav>
            
    )
}

export default Header