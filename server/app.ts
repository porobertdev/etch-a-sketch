const express = require('express');


const WebSocket = require('ws');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Server is up.')
})

const server = app.listen(PORT, () => console.log('Server is running...'));

// WebSocket Server
const wss = new WebSocket.Server({ server: server });
wss.on('connection', (ws, req, client) => {
    console.log('[SERVER] - A client connected to the server socket.');
    ws.on('message', async (data) => {
        const json = JSON.parse(data)
        console.log('[SERVER] - Client sent data:', json);
        // save to database
        // send to each client connected
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                // client.send(JSON.stringify({ user, msg }));
                client.send(JSON.stringify(json));
            }
        });
    });
    ws.on('close', () => {
        console.log('[SERVER] - Client has disconnected.');
    });
});

