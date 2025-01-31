import useSketchboard from "./useSketchboard";

const useWebSocket = () => {
    const ws = new WebSocket('ws://localhost:3000/');
    const {draw, isDrawing, startDrawing, stopDrawing} = useSketchboard();
    console.log("🚀 ~ App ~ ws:", ws)

    ws.onopen = (e) => {
        console.log('[CLIENT] connected to WebSocket Server');
    };

    ws.onmessage = (e) => {
        const data = JSON.parse(e.data);
        console.log('[CLIENT] received data', data);
    
        startDrawing(data);
        draw(data);
        stopDrawing();
    };

    ws.onclose = (e) => {
        console.log('[CLIENT] closed WebSocket connection');
    };

    return ws;
};

export default useWebSocket;