"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("@/middlewares");
const routes_1 = require("@/routes");
const server_1 = require("@/server");
exports.app = (0, express_1.default)();
(0, middlewares_1.applyMiddlewares)(exports.app);
(0, routes_1.initRoutes)(exports.app);
(0, server_1.startServer)(exports.app);
