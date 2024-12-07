
import express from 'express';

const app = express();
import { productRouter } from './Routes/product.js';
import globalErrorHandlingMiddleware from './Routes/middlewear/global-error-handling-middlewear.js';

app.use(express.json()); // For parsing JSON requests

// app.use((req, res, next) => {
//   console.log("Recieved a Request");
//   console.log(req.method, req.url);
//   next();
// });

app.use('/products', productRouter)
app.use(globalErrorHandlingMiddleware)

app.listen(8000, () => console.log(`Server running on port ${8000}`));