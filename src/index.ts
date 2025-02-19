import express from "express";

const app = express();
import "dotenv/config";
import { productRouter } from "./Routes/product";
import { categoryRouter } from "./Routes/category";
import { connectDB } from "./infrastructure/db";
import { orderRouter } from "./Routes/order";
import { clerkMiddleware } from "@clerk/express";
import globalErrorHandlingMiddleware from "./Routes/middlewear/global-error-handling-middlewear";
import cors from "cors";
import { paymentsRouter } from "./Routes/payment";

app.use(express.json()); // For parsing JSON requests
app.use(clerkMiddleware());
app.use(cors({ origin: "http://localhost:5173" })); // For allowing Cross-Origin requests

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/orders", orderRouter);
app.use("/api/payments", paymentsRouter);
app.use(globalErrorHandlingMiddleware);
connectDB();
app.listen(8000, () => console.log(`Server running on port ${8000}`));
