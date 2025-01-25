import React from 'react';
import { memo, useState } from 'react';

interface SquareProps {
    index: string;
    selectedColor: string; // Color passed down from the parent
}

/**
 * Individual Square component representing a single cell in the grid
 * Memoized with React.memo for optimal performance
 * 
 * Local State:
 * - color: Manages the current color of the square
 * 
 * Re-renders occur only when:
 * 1. The square is hovered over (triggering a color state change)
 * 2. The square is clicked (triggering a color state change)
 * 
 * Props changes don't cause re-renders unless the square is interacted with,
 * because the color state is only updated on hover/click events
 */
const Square = memo(({ selectedColor, index }: SquareProps) => {
    console.log("SQUARE COMPONENT RENDERED")
    // Local state for this square's color
    const [color, setColor] = useState('#fff');

    const handleMouseOver = () => {
        setColor(selectedColor); // Update color on hover
    };

    const handleClick = () => {
        setColor(selectedColor); // Update color on click
    };

    return (
        <div
            key={`square-${index}`}
            role="none"
            className="square border-[1px] border-solid border-black w-full h-full"
            style={{ backgroundColor: color }}
            onMouseOver={handleMouseOver}
            onClick={handleClick}
        ></div>
    );
});

export default Square;