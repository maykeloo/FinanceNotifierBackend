import { WebSocketServer, WebSocket } from "ws";
import http from 'http';
import { WebSocketClients } from '@/websocket/clients';

export class WebSocketConnection {
    private wss: WebSocketServer;
    
    constructor(server: http.Server) {
        this.wss = new WebSocketServer({ server });
        this.init();
    }

    private init() {
        this.wss.on('connection', (ws) => {
            const clients = new WebSocketClients();
            console.log('New client connected');
            clients.add(ws);
            ws.on('close', () => {
                console.log('Client disconnected');
                clients.delete(ws);
            });
        });
    }
}

