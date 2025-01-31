import { useColor } from '../contexts/SketchContext';
import useSketchboard from './useSketchboard';

const useWebSocket = () => {
    const ws = new WebSocket('ws://localhost:3000/');
    const { draw, startDrawing, stopDrawing } = useSketchboard();
    const { updateColor, updateLineWidth } = useColor();

    ws.onopen = (e) => {
        console.log('[CLIENT] connected to WebSocket Server');
    };

    ws.onmessage = (e) => {
        const data = JSON.parse(e.data);
        console.log('[CLIENT] received data', data);

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
