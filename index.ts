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
    const { amount, description, date, category } = req.body as Transaction;

    if (!amount || !description || !date) {
        res.status(400).send({ error: 'Invalid data format' });
        return;
    }

    const payload: Transaction = {
        amount,
        description,
        date,
        category: category || 'Uncategorized',
    };

    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(payload));
        }
    });

    console.log('Webhook received:', payload);
    res.status(200).send({ status: 'success' });
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});