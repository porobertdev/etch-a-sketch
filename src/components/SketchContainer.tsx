import React, { useState } from 'react';
import Row from './Row';

const MIN_GRID_SIZE = 10;
const MAX_GRID_SIZE = 70;

const SketchContainer = () => {
    const [gridSize, setGridSize] = useState(MIN_GRID_SIZE);

    console.log('🚀 ~ SketchContainer ~ gridSize:', gridSize);

    const squares = Array(gridSize).fill('item');
    // console.log('🚀 ~ SketchContainer ~ arr:', arr);

    const scrollHandler = (event) => {
        if (event.nativeEvent.wheelDelta > 0) {
            // wheel up: positive +168
            if (gridSize < MAX_GRID_SIZE) setGridSize(gridSize + 5);
            console.log(`wheel up: ${gridSize}`);
        } else if (event.nativeEvent.wheelDelta < 0) {
            // wheel down: negative -168);
            if (gridSize > MIN_GRID_SIZE) setGridSize(gridSize - 5);
            console.log(`wheel down: ${gridSize}`);
        }

        // resetGrid();
    };

    return (
        <div
            className="grid-container w-[450px] h-[450px] grid auto-rows-[minmax(0,2fr)] shadow-custom border-[3px] border-solid border-black"
            onWheel={scrollHandler}
        >
            {squares.map((item, index) => {
                return <Row squares={squares} rowIndex={index} />;
            })}
        </div>
    );
};

export default SketchContainer;
