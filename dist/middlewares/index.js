"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddlewares = void 0;
const bodyParser_1 = require("@/middlewares/bodyParser");
const middlewares = [bodyParser_1.bodyParserMiddleware];
const applyMiddlewares = (app) => {
    middlewares.forEach((middleware) => {
        app.use(middleware());
    });
};
exports.applyMiddlewares = applyMiddlewares;
