import { Button, Tooltip } from 'antd';
import React from 'react';
import BrushIcon from '../assets/icons/brush.svg';
import { useColor } from '../contexts/SketchContext';

const Brush = () => {
    const { updateColor } = useColor();

    return (
        <Tooltip title="Brush">
            <Button
                shape="default"
                variant="filled"
                color="default"
                onClick={() => updateColor('white')}
                style={{
                    backgroundColor: '#6a5eff',
                    width: '60px',
                    height: '60px',
                    borderRadius: '100%',
                }}
                size="large"
            >
                <img src={BrushIcon} alt="brush icon" className="w-full" />
            </Button>
        </Tooltip>
    );
};

export default Brush;
