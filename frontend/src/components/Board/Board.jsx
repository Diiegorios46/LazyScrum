const Board = ({ text, color, href }) => {
    return (
        <a
            href={href}
            className="block w-full h-auto cursor-pointer no-underline"
        >
            <div
                className="w-full aspect-square rounded-2xl"
                style={{ backgroundColor: color }}
            ></div>
            <div className="p-2 md:p-4 text-white text-xs md:text-base">
                <h1 className="truncate">{text}</h1>
            </div>
        </a>
    );
};

export default Board;