import { Router, Express } from "express";
import { webhookRouter } from "@/routes/webhook.routes";

const routers = [webhookRouter];

export const initRoutes = (app: Express) => {
    routers.forEach((router) => {
        app.use(router);
    });
};
