import { useColor } from '../contexts/SketchContext';
import useSketchboard from './useSketchboard';

const useWebSocket = () => {
    const ws = new WebSocket(
        window.location.host === 'localhost:5173'
            ? 'ws:localhost:3000'
            : 'wss://etch-a-sketch-backend.porobert.dev/'
    );
    const { draw, startDrawing, stopDrawing } = useSketchboard();
    const { updateColor, updateLineWidth, isReset, setIsReset } = useColor();

    ws.onopen = (e) => {
        console.log('[CLIENT] connected to WebSocket Server');
    };

    ws.onmessage = (e) => {
        const data = JSON.parse(e.data);
        console.log('[CLIENT] received data', data);

        if (data.reset) {
            console.log('[CLIENT] reset canva');
            setIsReset(!isReset);
            return;
        }

        startDrawing(data);
        updateColor(data.color);
        updateLineWidth(data.lineWidth);
        draw(data);
        stopDrawing();
    };

    ws.onclose = (e) => {
        console.log('[CLIENT] closed WebSocket connection');
    };

    return ws;
};

export default useWebSocket;
