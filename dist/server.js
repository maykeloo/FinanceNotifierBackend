"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const http_1 = __importDefault(require("http"));
const server_1 = require("@/websocket/server");
const startServer = (app) => {
    const server = http_1.default.createServer(app);
    server_1.WebSocketServer.start(server);
};
exports.startServer = startServer;
