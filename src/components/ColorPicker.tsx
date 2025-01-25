import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { useColor } from '../contexts/ColorContext';

interface ColorPicker {
    defaultColor: string;
}

const ColorPicker = () => {
    const { color, setColor } = useColor();

    return <HexColorPicker color={color} onChange={setColor} />;
};

export default ColorPicker;
