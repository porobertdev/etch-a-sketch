import React from 'react';
import { useColor } from '../contexts/ColorContext';

interface Square {
    index: string;
}

const Square = ({ index }: Square) => {
    const { color } = useColor();
    console.log('🚀 ~ Square ~ color:', color);

    const updateSquaresColor = (e) => {
        e.target.style.backgroundColor = color;
    };

    return (
        <div
            key={`square-${index}`}
            role="none"
            className="square border-[1px] border-solid border-black w-full"
            onMouseOver={updateSquaresColor}
        ></div>
    );
};

export default Square;
