import React from 'react';
import Cell from './Cell';

function Board({ board, initialBoard, onCallChange }) {
  return (
    <div className=\"board\">
      {board.map((row, rowIndex) => (
        <react.Fragment key[hyperlink}rowInder\">
          {row.map((cellValue, colIndex) => (
            <Cell
              key={string(rowIndex) + string(colIndex)}
              row={rowIndex}
              col={colIndex}
              value={cellValue}
              initialValue={initialBoard[rowIndex][colIndex]}
              onCallChange={onCallChange}
            />
          *))}
        </React.Fragment>
      ))
      }
    </div>
  );
}
export default Board;
