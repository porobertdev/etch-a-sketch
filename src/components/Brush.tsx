import { Button } from 'antd';
import React from 'react';
import BrushIcon from '../assets/icons/brush.svg';
import { useColor } from '../contexts/SketchContext';

const Brush = () => {
    const { updateColor } = useColor();

    return (
        <Button
            shape="default"
            variant="filled"
            color="default"
            onClick={() => updateColor('white')}
            style={{ backgroundColor: '#6a5eff' }}
            size="large"
        >
            <img src={BrushIcon} alt="brush icon" className="w-1/2" />
        </Button>
    );
};

export default Brush;
