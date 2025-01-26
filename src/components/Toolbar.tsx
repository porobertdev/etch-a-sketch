import { Slider } from 'antd';
import React from 'react';
import { useColor } from '../contexts/SketchContext';
import Brush from './Brush';
import ColorPicker from './ColorPicker';

const Toolbar = () => {
    const { updateLineWidth } = useColor();

    return (
        <div
            id="toolbar"
            className="bg-gray-100 rounded-sm w-fit h-max px-5 py-5"
        >
            <ColorPicker />
            <Slider
                onChange={(value) => {
                    updateLineWidth(value);
                }}
                min={1}
                max={30}
                defaultValue={5}
            />
            <Brush />
        </div>
    );
};

export default Toolbar;
