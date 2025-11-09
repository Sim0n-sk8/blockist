"use client";

import { useState } from "react";

const gridSize = 8;

const shapes = [
  // Single block
  { shape: [[1]], color: '#FDCB6E' },

  // Square
  { shape: [
      [1, 1],
      [1, 1]
    ], color: '#4ECDC4' },

  // Line 4(horizontal)
  { shape: [
      [1, 1, 1, 1]
    ], color: '#45B7D1' },

  //Line 4(vertical)
  { shape:[
    [1],[1],[1],[1]
  ], color: '#45B7D1'},

  // L-shape 1
  { shape: [
      [1, 0],
      [1, 0],
      [1, 1]
    ], color: '#FF6B6B' },

  //L shape 2
  { shape: [
      [0, 0, 1],
      [1, 1, 1],
     
    ], color: '#FF6B6B' },

  // L-shape 3
  { shape: [
      [1, 1],
      [0, 1],
      [0, 1]
    ], color: '#FF6B6B' },

  //L shape 4
  { shape: [
      [1, 1, 1],
      [1, 0, 0],
     
    ], color: '#FF6B6B' },




  // reverse L-shape 1
  { shape: [
      [0, 1],
      [0, 1],
      [1, 1]
    ], color: '#ff00b3ff' },

  // reverse L-shape 2
  { shape: [
      [1, 0, 0],
      [1, 1, 1],
     
    ], color: '#ff00b3ff' },

  // reverse L-shape 3
  { shape: [
      [1, 1],
      [1, 0],
      [1, 0]
    ], color: '#ff00b3ff' },

  // reverse L-shape 4
  { shape: [
      [1, 1, 1],
      [0, 0, 1],
     
    ], color: '#ff00b3ff' },


// 3x2 
  { shape: [
      [1, 1],
      [1, 1],
      [1, 1]
    ], color: '#0059ffff' },


  // 3x2 flat
  { shape: [
      [1, 1, 1],
      [1, 1, 1],
     
    ], color: '#0059ffff' },



  // T-shape
  { shape: [
      [1, 1, 1],
      [0, 1, 0]
    ], color: '#A29BFE' },

  // Z-shape
  { shape: [
      [1, 1, 0],
      [0, 1, 1]
    ], color: '#E17055' },
];


export default function Home() {
  const [grid, setGrid] = useState<(string | null)[][]>(
    Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(null))
  );

  

  const handleClick = (rowIndex: number, colIndex: number) => {
    console.log(`Clicked cell: Row ${rowIndex}, Column ${colIndex}`);
  };

  return (
    <div>
      <div className="gridContainer">
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 50px)`,
            gridTemplateRows: `repeat(${gridSize}, 50px)`,
            gap: "2px",
          }}
        >
          {grid.map((row: (string | null)[], rowIndex: number) =>
            row.map((cell: string | null, colIndex: number) => (
              <div
                className="gridI"
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleClick(rowIndex, colIndex)}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: cell || "rgb(7, 0, 75)",
                  border: "1px solid #ffffff",
                  cursor: "pointer",
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
