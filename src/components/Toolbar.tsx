import React from 'react';
import { useColor } from '../contexts/ColorContext';
import ColorPicker from './ColorPicker';

const Toolbar = () => {
    const { color, setColor } = useColor();
    console.log('🚀 ~ Toolbar ~ setColor:', setColor);
    console.log('🚀 ~ Toolbar ~ color:', color);

    return <ColorPicker defaultColor={color} updateColor={setColor} />;
};

export default Toolbar;
