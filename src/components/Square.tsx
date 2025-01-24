import React, { MouseEventHandler } from 'react';

interface Square {
    index: string;
    mouseOverHandler: MouseEventHandler;
    colored: boolean;
}

const Square = ({ index, mouseOverHandler, colored }: Square) => {
    return (
        <div
            key={`square-${index}`}
            role="none"
            className={`square border-[1px] border-solid border-black w-full ${colored && 'bg-red-500'}`}
            onMouseOver={mouseOverHandler}
        ></div>
    );
};

export default Square;
