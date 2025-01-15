import { Router } from 'express';
import { WebhookController } from '@/controllers/webhook';

export const webhookRouter = Router();

webhookRouter.post('/webhook', WebhookController.handle);