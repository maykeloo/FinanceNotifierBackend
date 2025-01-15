"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketServer = void 0;
const port = 3000;
class WebSocketServer {
    static start(server) {
        server.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
}
exports.WebSocketServer = WebSocketServer;
