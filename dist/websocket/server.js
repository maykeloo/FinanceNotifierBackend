"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketServer = void 0;
const port = Number(process.env.PORT) || 3000;
class WebSocketServer {
    static start(server) {
        server.listen(port, "0.0.0.0", () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
}
exports.WebSocketServer = WebSocketServer;
