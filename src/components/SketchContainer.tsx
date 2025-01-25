import React, { useState, useCallback, useMemo } from 'react';
import Row from './Row';

const MIN_GRID_SIZE = 10;
const MAX_GRID_SIZE = 70;

interface SketchContainerProps {
    selectedColor: string;
}

/**
 * Container component for the Etch-a-Sketch grid
 * Memoized with React.memo to prevent re-renders when parent re-renders with same props
 * 
 * Re-renders occur when:
 * 1. selectedColor prop changes
 * 2. gridSize state changes (via scroll wheel)
 * 
 * Optimizations:
 * - squares array is memoized to prevent recreation on every render
 * - scrollHandler is memoized to maintain referential equality
 * - Component itself is memoized to prevent re-renders when selectedColor hasn't changed
 */
const SketchContainer: React.FC<SketchContainerProps> = ({ selectedColor }) => {
    // Local state for grid dimensions
    const [gridSize, setGridSize] = useState(MIN_GRID_SIZE);

    // Memoize the squares array to prevent recreation on every render
    // Only updates when gridSize changes
    const squares = useMemo(() => Array(gridSize).fill('item'), [gridSize]);

    // Memoize the scroll handler to maintain referential equality
    // Only updates when gridSize changes
    const scrollHandler = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
        if (event.deltaY < 0) {
            // Wheel up
            if (gridSize < MAX_GRID_SIZE) setGridSize((prev) => prev + 5);
        } else if (event.deltaY > 0) {
            // Wheel down
            if (gridSize > MIN_GRID_SIZE) setGridSize((prev) => prev - 5);
        }
    }, [gridSize]);

    return (
        <div
            className="grid-container w-[450px] h-[450px] grid auto-rows-[minmax(0,2fr)] shadow-custom border-[3px] border-solid border-black"
            onWheel={scrollHandler}
        >
            {squares.map((_, index) => (
                <Row 
                    key={index} 
                    rowIndex={index} 
                    squares={squares} 
                    selectedColor={selectedColor}
                />
            ))}
        </div>
    );
};

export default React.memo(SketchContainer);