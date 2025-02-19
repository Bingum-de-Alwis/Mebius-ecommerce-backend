import express from "express";
import { createOrder, getOrder } from "../Applications/order";
import { isAuthenticated } from "../Routes/middlewear/authentication-middleware";

export const orderRouter = express.Router();

orderRouter.route("/").post(createOrder);
orderRouter.route("/:id").get(getOrder);
