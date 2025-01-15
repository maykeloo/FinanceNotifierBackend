import express, { type Request, type Response } from 'express';
import bodyParser from 'body-parser';
import { WebSocketServer, WebSocket } from 'ws';
import http from 'http';

interface Transaction {
    amount: number;
    description: string;
    date: string;
    category?: string;
}

const app = express();
const port = 3000;
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(bodyParser.json());

const clients = new Set<WebSocket>();

wss.on('connection', (ws) => {
    console.log('New client connected');
    clients.add(ws);

    ws.on('close', () => {
        console.log('Client disconnected');
        clients.delete(ws);
    });
});

app.post('/webhook', (req: Request, res: Response) => {
    const email = req.body

    if (!email) {
        res.status(400).send({ error: 'Invalid data format' });
        return;
    }

    res.status(200).send({ status: 'success', data: email });
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});