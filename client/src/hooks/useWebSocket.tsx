
const useWebSocket = () => {

    const ws = new WebSocket('ws://localhost:3000/');
    console.log("🚀 ~ App ~ ws:", ws)

    // const renderMsg = (data) => {
    //     console.log('🚀 ~ renderMsg ~ data:', data);
    // }

    ws.onopen = (e) => {
        console.log('[CLIENT] connected to WebSocket Server');
    };

    // ws.onmessage = (e) => {
    //     // console.log("🚀 ~ useWebSocket ~ e:", e)
    //     // const data = JSON.parse(e.data);
    //     // console.log('[CLIENT] received data', data);
    
    //     renderMsg(e);
    // };

    ws.onclose = (e) => {
        console.log('[CLIENT] closed WebSocket connection');
    };

    return ws;
};

export default useWebSocket;