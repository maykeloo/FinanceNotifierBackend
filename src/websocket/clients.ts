import { WebSocket } from "ws";

export class WebSocketClients {
    public clients = new Set<WebSocket>();

    public add(ws: WebSocket) {
        this.clients.add(ws);
    }

    public delete(ws: WebSocket) {
        this.clients.delete(ws);
    }
}