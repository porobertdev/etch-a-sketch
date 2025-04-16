import { Slider } from 'antd';
import React from 'react';
import { useColor } from '../contexts/SketchContext';
import Brush from './Brush';
import ColorPicker from './ColorPicker';
import Reset from './Reset';
import Share from './Share';

const Toolbar = () => {
    const { updateLineWidth } = useColor();

    return (
        <div
            id="toolbar"
            className="bg-gray-100 rounded-sm w-fit h-max px-5 py-5 flex flex-col gap-4"
        >
            {/* TODO: show how many users are connnected */}
            {/* <p>
                Users:
                <span className="font-bold">1</span>
            </p> */}
            <div className="flex flex-col">
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
            <Brush />
            <Reset />
            <Share />
        </div>
    );
};

export default Toolbar;
