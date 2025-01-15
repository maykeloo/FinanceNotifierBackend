"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddlewares = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const applyMiddlewares = (app) => {
    app.use(body_parser_1.default.text({ type: "text/plain" }));
};
exports.applyMiddlewares = applyMiddlewares;
