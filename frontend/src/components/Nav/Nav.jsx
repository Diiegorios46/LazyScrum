
const Nav = ({imgPerfil,imgIcono}) => {
    return(
        <nav className="flex justify-between  text-white w-11/12">
            
            <div className="flex gap-4 justify-center items-center">
                <div className="size-7 rounded-4xl">
                    <a href="/workspace">
                        <img src={imgIcono} alt="" />
                    </a>
                </div>
                <div>
                    <span>LazyScrum</span>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="size-8 rounded-4xl"> 
                    <a href="/user">
                        <img 
                            className="rounded-full"
                            src={imgPerfil} 
                            alt="" 
                        />
                    </a>
                </div>
            </div>

        </nav>
    )
}

export default Nav;