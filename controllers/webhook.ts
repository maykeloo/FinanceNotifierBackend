import type { Request, Response } from 'express';

export class WebhookController {
    public static async handle(req: Request, res: Response) {
        const email = req.body

        if (!email) {
            res.status(400).send({ error: 'Invalid data format' });
            return;
        }

        res.status(200).send({ status: 'success', data: email });
    }
}