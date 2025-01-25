import React from 'react';
import { HexColorPicker } from 'react-colorful';

interface ColorPicker {
    defaultColor: string;
}

const ColorPicker = ({defaultColor, updateColor}) => {
    return <HexColorPicker color={defaultColor} onChange={updateColor} />;
};

export default ColorPicker;
