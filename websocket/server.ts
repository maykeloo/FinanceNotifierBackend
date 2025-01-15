import http from 'http';
import { Express } from 'express';

const port = 3000;

export class WebSocketServer {
    private server: http.Server;

    constructor(app: Express) {
        this.server = http.createServer(app);
    }

    public start() {
        this.server.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
}
