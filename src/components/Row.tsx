import React, { useState } from 'react';
import Square from './Square';

const Row = ({ squares, rowIndex }) => {
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

                return (
                    <Square
                        index={className}
                        mouseOverHandler={() => colorHandler(className)}
                        colored={coloredSquares.includes(className)}
                    />
                );
            })}
        </div>
    );
};

export default Row;
