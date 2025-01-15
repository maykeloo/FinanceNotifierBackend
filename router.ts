import { Router, Express } from 'express';
import { webhookRouter } from '@/routes/webhook';

export class AppRouter {
    private routers: Router[];
    private app: Express;

    constructor(app: Express) {
        this.app = app;
        this.routers = [];
        this.routers.push(webhookRouter)
    }

    public init() {
        this.routers.forEach((route) => {
            this.app.use(route);
        });
    }
}