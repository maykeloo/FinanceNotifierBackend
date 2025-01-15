import express from 'express';
import { applyMiddlewares } from '@/middlewares';
import { initRoutes } from '@/routes';
import { startServer } from '@/server';

export const app = express();

applyMiddlewares(app);
initRoutes(app);
startServer(app);