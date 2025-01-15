import http from 'http';

const port = 3000;

export class WebSocketServer {
    static start(server: http.Server) {
        server.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
}
