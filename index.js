"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const ws_1 = require("ws");
const http_1 = __importDefault(require("http"));
const app = (0, express_1.default)();
const port = 3000;
const server = http_1.default.createServer(app);
const wss = new ws_1.WebSocketServer({ server });
app.use(body_parser_1.default.json());
const clients = new Set();
wss.on('connection', (ws) => {
    console.log('Nowy klient podłączony');
    clients.add(ws);
    ws.on('close', () => {
        console.log('Klient rozłączony');
        clients.delete(ws);
    });
});
app.post('/webhook', (req, res) => {
    const { amount, description, date, category } = req.body;
    if (!amount || !description || !date) {
        res.status(400).send({ error: 'Invalid data format' });
        return;
    }
    const payload = {
        amount,
        description,
        date,
        category: category || 'Uncategorized',
    };
    clients.forEach((client) => {
        if (client.readyState === ws_1.WebSocket.OPEN) {
            client.send(JSON.stringify(payload));
        }
    });
    console.log('Webhook odebrany:', payload);
    res.status(200).send({ status: 'success' });
});
server.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
