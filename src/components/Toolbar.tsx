import { Slider } from 'antd';
import React from 'react';
import { useColor } from '../contexts/ColorContext';
import ColorPicker from './ColorPicker';

interface ToolbarProps {
    children: React.ReactNode;
}

const Toolbar = () => {
    const { updateLineWidth } = useColor();

    return (
        <div id="toolbar">
            <ColorPicker />
            <Slider
                onChange={(value) => {
                    updateLineWidth(value);
                }}
                min={1}
                max={30}
                defaultValue={5}
            />
        </div>
    );
};

export default Toolbar;
