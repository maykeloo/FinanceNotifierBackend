"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketClients = void 0;
class WebSocketClients {
    constructor() {
        this.clients = new Set();
    }
    add(ws) {
        this.clients.add(ws);
    }
    delete(ws) {
        this.clients.delete(ws);
    }
}
exports.WebSocketClients = WebSocketClients;
