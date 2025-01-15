import express from 'express';
import bodyParser from 'body-parser';
import { WebSocketServer } from '@/websocket/server'
import { AppRouter } from './router';

export const app = express();
app.use(bodyParser.json());

const router = new AppRouter(app)
router.init();

new WebSocketServer(app).start();
