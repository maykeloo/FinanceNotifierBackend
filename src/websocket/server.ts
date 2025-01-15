import http from "http";

const port = Number(process.env.PORT) || 3000;

export class WebSocketServer {
  static start(server: http.Server) {
    server.listen(port, "0.0.0.0", () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
}
