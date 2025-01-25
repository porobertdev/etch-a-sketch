import React from 'react';
import { HexColorPicker } from 'react-colorful';

interface ColorPicker {
    selectedColor: string;
    setSelectedColor: (color: string) => void;
}

const ColorPicker = ({ selectedColor, setSelectedColor }: ColorPicker) => {
    console.log("COLOR PICKER COMPONENT RENDERED")
    return <HexColorPicker color={selectedColor} onChange={setSelectedColor} />;
};

export default ColorPicker;