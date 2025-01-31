import { useColor } from '../contexts/SketchContext';
import useSketchboard from './useSketchboard';

const useWebSocket = () => {
    const ws = new WebSocket(
        window.location.host === 'localhost:3000'
            ? 'ws:localhost:3000'
            : 'wss://etch-a-sketch-peach.vercel.app/'
    );
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
