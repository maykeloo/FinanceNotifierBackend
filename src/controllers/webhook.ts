import type { Request, Response } from "express";
import { MailDecoder } from '@/services/mailDecoder';

export class WebhookController {
  public static async handle(req: Request, res: Response) {
    const emailContent = req.body;

    const transaction = MailDecoder.decode(emailContent);
    res.status(200).send({ status: "success", data: transaction });
  }
}
