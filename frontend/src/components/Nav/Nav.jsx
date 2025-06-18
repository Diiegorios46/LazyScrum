import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Nav = ({ name, icon }) => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef();

    const handleOnclick = (e) => {
        e.preventDefault();
        navigate(`/board/`);
    };

    // Cerrar el menú si se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-[#0077b6] w-full p-4 sm:p-6 relative">
            <nav className="flex flex-col sm:flex-row sm:grid sm:grid-cols-2 justify-between items-center gap-4 sm:gap-0">
                <div className="text-xl sm:text-2xl text-white font-semibold w-full sm:w-auto text-center sm:text-left">
                    <a href="/" onClick={handleOnclick} className="hover:opacity-80 transition-opacity">
                        📋LazyScrum
                    </a>
                </div>
                <div className="relative flex justify-center sm:justify-end items-center gap-2 w-full sm:w-auto" ref={menuRef}>
                    <span className="text-lg sm:text-2xl text-white font-semibold truncate max-w-[120px] sm:max-w-none">
                        {name}
                    </span>
                    <img
                        onClick={() => setShowMenu(!showMenu)}
                        className="w-8 h-8 sm:w-[40px] sm:h-[40px] rounded-full object-cover border-2 border-white cursor-pointer"
                        src={icon}
                        alt={`${name}'s profile`}
                    />

                    {showMenu && (
                        <div className="absolute top-14 right-0 bg-white rounded-lg shadow-md p-4 w-44 z-50">
                            <p className="text-sm text-gray-700 font-semibold mb-2">cuenta</p>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-8 h-8 rounded-full border-2 border-gray-300">
                                    <img src={icon} alt="" />
                                </div>
                                <span className="text-sm text-gray-800">perfil</span>
                            </div>
                            <button className="text-sm text-blue-600 hover:underline mb-1">cambiar cuenta</button>
                            <button className="text-sm text-red-500 hover:underline">cerrar sesión</button>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Nav;
