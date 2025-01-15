"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoutes = void 0;
const webhook_routes_1 = require("@/routes/webhook.routes");
const routers = [webhook_routes_1.webhookRouter];
const initRoutes = (app) => {
    routers.forEach((router) => {
        app.use(router);
    });
};
exports.initRoutes = initRoutes;
