import React from 'react';
import ColorPicker from './ColorPicker';

interface ToolbarProps {
    selectedColor: string;
    setSelectedColor: (color: string) => void;
}

const Toolbar = ({ selectedColor, setSelectedColor }: ToolbarProps) => {
    console.log("TOOLBAR COMPONENT RENDERED")
    return (
        <ColorPicker
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
        />
    );
};

export default Toolbar;