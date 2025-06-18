const CardNote = ({ title , check, task }) => {

    return (
        <div className="w-60 min-h-[200px] bg-white rounded-xl shadow-md flex flex-col justify-between p-4 border border-blue-300">
            {/* Título */}
            <h2 className="text-center text-xl font-semibold text-blue-800 mb-4">{title}</h2>

            {/* Tarea */}
            <div className="flex items-start gap-2 bg-blue-100 p-2 rounded-lg mb-4">
                {/* Checkbox */}
                <input type="checkbox" className="w-5 h-5 mt-1" checked={check}/>
                
                {/* Texto de tarea */}
                <p className="text-blue-800 text-lg">{task}</p>
            </div>

            {/* Botón */}
            <button className="w-full bg-blue-200 text-blue-800 rounded-lg py-2 hover:bg-blue-300 transition shadow-md">
                + añade una tarea
            </button>
        </div>
    );
};

export default CardNote;
