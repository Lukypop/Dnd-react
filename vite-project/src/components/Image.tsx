import { useDrag, useDrop } from "react-dnd";

import React, { useEffect, useState } from "react";

import PuzzleData from "../data/PuzzleData";
export type PuzzlePiece = {
    originX: number;
    originY: number;
    actualX: number;
    actualY: number;
    url: string;
}
export type ItemTypes = {
    PIECE: 'PIECE';
}

interface ImageProps {
    piece: PuzzlePiece;
    index: number;

}

const Image:React.FC<ImageProps> = ({piece, index}) => {
console.log( index) 
piece.actualX = index%PuzzleData.columns
piece.actualY = Math.floor(index/PuzzleData.columns)


    return(
        <div>
            <img style={{ width: "100%", height: "100%"}} src={piece.url} alt="puzzle piece"  />
        </div>
    )
}
export default Image