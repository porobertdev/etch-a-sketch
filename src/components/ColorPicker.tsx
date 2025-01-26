import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { useColor } from '../contexts/ColorContext';

const ColorPicker = () => {
    const { color, setColor } = useColor();

    // We need `?` to get rid of TS error because it might be null
    // Ref: https://stackoverflow.com/a/58401023
    return <HexColorPicker color={color} onChange={setColor} />;
};

export default ColorPicker;
