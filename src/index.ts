import express from "express";

const app = express();
import "dotenv/config";
import { productRouter } from "./Routes/product";
import { categoryRouter } from "./Routes/category";
import { connectDB } from "./infrastructure/db";
import globalErrorHandlingMiddleware from "./Routes/middlewear/global-error-handling-middlewear";
import cors from "cors";

app.use(express.json()); // For parsing JSON requests
app.use(cors({ origin: "http://localhost:5173" })); // For allowing Cross-Origin requests

// app.use((req, res, next) => {
//   console.log("Recieved a Request");
//   console.log(req.method, req.url);
//   next();
// });

app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use(globalErrorHandlingMiddleware);
connectDB();
app.listen(8000, () => console.log(`Server running on port ${8000}`));
