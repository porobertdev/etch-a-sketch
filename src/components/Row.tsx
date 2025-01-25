import React from 'react';
import Square from './Square';

interface Row {
    squares: string[];
    rowIndex: number;
}

const Row = ({ squares, rowIndex }: Row) => {
    const row = `row-${rowIndex}`;

    // reset colors
    // const resetGrid = () => setColoredSquares([]);

    return (
        <div key={row} className="row flex">
            {squares.map((square, index) => {
                const column = `column-${index}`;
                const className = row + '-' + column;
                return <Square index={className} />;
            })}
        </div>
    );
};

export default Row;
