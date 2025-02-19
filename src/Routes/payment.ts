import express from "express";
import { handleWebhook } from "../Applications/payment";

export const paymentsRouter = express.Router();

paymentsRouter.route("/webhook").post(handleWebhook);
