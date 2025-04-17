import { Button, Tooltip } from 'antd';
import React from 'react';
import ResetIcon from '../assets/icons/reset.svg';
import { useColor } from '../contexts/SketchContext';
import useWebSocket from '../hooks/useWebSocket';

const Brush = () => {
    const { isReset, setIsReset } = useColor();
    const webSocket = useWebSocket();

    return (
        <Tooltip title="Reset canva">
            <Button
                shape="default"
                variant="filled"
                color="default"
                onClick={() => {
                    setIsReset(!isReset);
                    webSocket.send(JSON.stringify({ reset: true }));
                }}
                style={{
                    backgroundColor: '#6a5eff',
                    width: '60px',
                    height: '60px',
                    borderRadius: '100%',
                }}
                size="large"
            >
                <img src={ResetIcon} alt="brush icon" className="w-full" />
            </Button>
        </Tooltip>
    );
};

export default Brush;
