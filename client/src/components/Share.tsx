import { Button, Tooltip } from 'antd';
import React from 'react';
import ShareIcon from '../assets/icons/share.svg';

// Ref: https://stackoverflow.com/a/59462270
const copyToClipboard = () => {
    const canva = document.getElementById('sketchBoard') as HTMLCanvasElement;
    canva.toBlob((blob) => {
        if (blob) {
            try {
                navigator.clipboard
                    .write([new ClipboardItem({ 'image/png': blob })])
                    .then((r) =>
                        alert(
                            'Drawing was copied to clipboard. Paste it somewhere! :)'
                        )
                    );
            } catch (err) {
                alert('Failed to copy to clipboard!');
            }
        } else {
            alert('Failed to generate the image from the canvas.');
        }
    });
};

const Share = () => {
    return (
        <Tooltip title="Copy to clipboard">
            <Button
                shape="default"
                variant="filled"
                color="default"
                onClick={copyToClipboard}
                style={{
                    backgroundColor: '#6a5eff',
                    width: '60px',
                    height: '60px',
                    borderRadius: '100%',
                }}
                size="large"
            >
                <img src={ShareIcon} alt="share icon" className="w-full" />
            </Button>
        </Tooltip>
    );
};

export default Share;
