import React, { useState } from 'react';
import { useColor } from '../contexts/ColorContext';

interface Square {
    index: string;
}

const Square = ({ index }: Square) => {
    const { color } = useColor();
    console.log('🚀 ~ Square ~ color:', color);
    const [coloredSquares, setColoredSquares] = useState([]);

    const updateSquaresColor = (className) => {
        console.log('🚀 ~ colorHandler ~ className:', className);
        setColoredSquares([...coloredSquares, className]);
    };

    const isColored = coloredSquares.includes(index);

    return (
        <div
            key={`square-${index}`}
            role="none"
            className={`square border-[1px] border-solid border-black w-full`}
            style={{ backgroundColor: isColored && color }}
            onMouseOver={() => updateSquaresColor(index)}
        ></div>
    );
};

export default Square;
