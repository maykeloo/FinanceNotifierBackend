"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketConnection = void 0;
const ws_1 = require("ws");
const clients_1 = require("@/websocket/clients");
class WebSocketConnection {
    constructor(server) {
        this.wss = new ws_1.WebSocketServer({ server });
        this.init();
    }
    init() {
        this.wss.on('connection', (ws) => {
            const clients = new clients_1.WebSocketClients();
            console.log('New client connected');
            clients.add(ws);
            ws.on('close', () => {
                console.log('Client disconnected');
                clients.delete(ws);
            });
        });
    }
}
exports.WebSocketConnection = WebSocketConnection;
