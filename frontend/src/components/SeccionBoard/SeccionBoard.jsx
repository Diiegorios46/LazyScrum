import { useState } from "react";
import ContainerBoard from "../../components/ContainerBoard/ContainerBoard";
import Button from "../Button/Button";

const SeccionBoard = ({ colectBoard, createBoard }) => {
    const [showModal, setShowModal] = useState(false);
    const [boardName, setBoardName] = useState("");
    const [boardColor, setBoardColor] = useState("#efddd5");

    const handleCreate = () => {
        if (boardName.trim()) {
            createBoard({
                id: Date.now(),
                text: boardName,
                color: boardColor,
                href: "board"
            });
            setShowModal(false);
            setBoardName("");
            setBoardColor("#efddd5");
        }
    };

    return (
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-4 md:px-8 my-4">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center font-semibold w-full">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Your Boards</h1>
                <div className="mt-4 sm:mt-0">
                    <Button onClick={() => setShowModal(true)} />
                </div>
            </div>

            <div>
                <ContainerBoard colectBoard={colectBoard} />
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-[#181c18] rounded-xl p-8 shadow-lg flex flex-col gap-4 min-w-[300px] w-full max-w-sm">
                        <h2 className="text-2xl font-bold text-white mb-2">Create New Board</h2>
                        <input
                            className="w-full p-4 rounded-lg bg-[#232823] border border-[#232823] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
                            type="text"
                            placeholder="Board Name"
                            value={boardName}
                            onChange={e => setBoardName(e.target.value)}
                        />
                        <div className="flex items-center gap-2">
                            <label className="text-gray-300">Color:</label>
                            <input
                                type="color"
                                value={boardColor}
                                onChange={e => setBoardColor(e.target.value)}
                                className="w-8 h-8 border-none rounded bg-transparent"
                            />
                        </div>
                        <div className="flex gap-2 mt-4">
                            <button
                                className="flex-1 p-2 rounded-full bg-[#98e9b1] text-[#181c18] font-semibold hover:bg-[#7fd89d] transition-colors"
                                onClick={handleCreate}
                            >
                                Create
                            </button>
                            <button
                                className="flex-1 p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400 transition-colors"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SeccionBoard;