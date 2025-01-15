import http from "http";
import { Express } from "express";
import { WebSocketServer } from "@/websocket/server";

export const startServer = (app: Express) => {
  const server = http.createServer(app)
  WebSocketServer.start(server);
};
