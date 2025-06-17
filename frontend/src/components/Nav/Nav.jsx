const Nav = ({name,icon}) => {
    return (
        <header className="bg-[#0096c7] w-full bg- p-6">
            <nav className="grid grid-cols-2 justify-between">
                <div className="text-2xl"><a href="">📋LazyScrum</a></div>
                <div className="flex justify-end items-center gap-2">
                    <span>{name}</span>
                    <img className="w-[40px] rounded-full" src={icon} alt="" />                    
                </div>
            </nav>
        </header>
    )
}

export default Nav;