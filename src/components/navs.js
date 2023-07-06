function Navs(props){
    return (
        <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-myc hover:bg-opacity-30 group">
                <span className="flex-1 px-3 py-2 text-[#333] text-[14px] font-[500]">{props.title}</span>
            </a>
        </li>
    )
}

export default Navs