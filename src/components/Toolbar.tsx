import { Button, Slider } from 'antd';
import React from 'react';
import Brush from '../assets/icons/brush.svg';
import { useColor } from '../contexts/SketchContext';
import ColorPicker from './ColorPicker';

const Toolbar = () => {
    const { updateLineWidth, updateColor } = useColor();

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
            <Button
                shape="default"
                variant="filled"
                color="default"
                onClick={() => updateColor('white')}
                style={{ backgroundColor: ' #869ef4' }}
                size="large"
            >
                <img src={Brush} alt="brush icon" className="w-1/2" />
            </Button>
        </div>
    );
};

export default Toolbar;
