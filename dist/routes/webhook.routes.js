"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookRouter = void 0;
const express_1 = require("express");
const webhook_1 = require("@/controllers/webhook");
exports.webhookRouter = (0, express_1.Router)();
exports.webhookRouter.post('/webhook', webhook_1.WebhookController.handle);
