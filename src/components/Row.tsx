import React from 'react';
import Square from './Square';

interface RowProps {
    squares: string[];
    rowIndex: number;
    selectedColor: string;
}

/**
 * Row component representing a single row in the grid
 * Memoized with React.memo to prevent re-renders when parent re-renders with same props
 * 
 * Re-renders occur when:
 * 1. squares array reference changes (due to grid size change)
 * 2. selectedColor prop changes
 * 3. rowIndex changes (which only happens on grid size change)
 * 
 * Each row contains multiple Square components, but thanks to memoization:
 * - Individual Squares only re-render when hovered/clicked
 * - The Row only re-renders when its props change
 */
const Row: React.FC<RowProps> = React.memo(({ squares, rowIndex, selectedColor }) => {
    console.log("ROW COMPONENT RENDERED")
    const row = `row-${rowIndex}`;

    return (
        <div className="row flex">
            {squares.map((_, colIndex) => {
                const column = `column-${colIndex}`;
                const squareIndex = `${row}-${column}`;

                return (
                    <Square
                        key={squareIndex}
                        index={squareIndex}
                        selectedColor={selectedColor}
                    />
                );
            })}
        </div>
    );
});

export default Row;