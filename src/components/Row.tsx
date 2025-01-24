import React, { useState } from 'react';
import Square from './Square';

interface Row {
    squares: string[];
    rowIndex: number;
}

const Row = ({ squares, rowIndex }: Row) => {
    const row = `row-${rowIndex}`;
    const [coloredSquares, setColoredSquares] = useState([]);

    const colorHandler = (className) => {
        console.log('🚀 ~ colorHandler ~ className:', className);
        setColoredSquares([...coloredSquares, className]);
    };

    // reset colors
    const resetGrid = () => setColoredSquares([]);

    return (
        <div key={row} className="row flex">
            {squares.map((square, index) => {
                const column = `column-${index}`;
                const className = row + '-' + column;
                const isColored = coloredSquares.includes(className);

                return (
                    <Square
                        index={className}
                        mouseOverHandler={() => colorHandler(className)}
                        colored={isColored}
                    />
                );
            })}
        </div>
    );
};

export default Row;
