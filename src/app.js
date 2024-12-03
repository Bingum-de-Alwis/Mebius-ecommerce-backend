
import express from 'express';

const app = express();
import { productRouter } from './Routes/product.js';

app.use(express.json()); // For parsing JSON requests

app.use('/products', productRouter)

app.listen(8000, () => console.log(`Server running on port ${8000}`));