import { Button } from 'antd';
import React from 'react';
import ResetIcon from '../assets/icons/reset.svg';
import { useColor } from '../contexts/SketchContext';

const Brush = () => {
    const { isReset, setIsReset } = useColor();

    return (
        <Button
            shape="default"
            variant="filled"
            color="default"
            onClick={() => setIsReset(!isReset)}
            style={{ backgroundColor: '#6a5eff' }}
            size="large"
        >
            <img src={ResetIcon} alt="brush icon" className="w-1/2" />
        </Button>
    );
};

export default Brush;
