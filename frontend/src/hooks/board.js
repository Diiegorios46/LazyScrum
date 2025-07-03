import { useState } from "react";

export const useBoard = () =>{
    const [colectBoard , setColectBoard] = useState(    
    [
      {
          id: 1,
          text : "Marketing Campaign",
          color : "#efddd5",
          href : "board"
    }
    ]);

    const createBoard = (newBoard) => {
        setColectBoard(prev => [...prev , newBoard]);
        console.log("set el nuevo board")
    }

    return {createBoard , colectBoard}
}
