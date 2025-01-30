import useSketchboard from "./useSketchboard";

const useWebSocket = () => {
    const ws = new WebSocket('ws://localhost:3000/');
    const {draw, isDrawing} = useSketchboard();
    console.log("🚀 ~ App ~ ws:", ws)

    ws.onopen = (e) => {
        console.log('[CLIENT] connected to WebSocket Server');
    };

    ws.onmessage = (e) => {
        console.log('[CLIENT] received data', e.data);
    
        const data = JSON.parse(e.data);
        console.log("🚀 ~ useWebSocket ~ data:", data)

        isDrawing.current = true;
        draw(data);
    };

    ws.onclose = (e) => {
        console.log('[CLIENT] closed WebSocket connection');
    };

    return ws;
};

export default useWebSocket;