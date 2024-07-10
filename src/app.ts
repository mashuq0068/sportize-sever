import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/not-found';
const app: Application = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Sportize is running on server.');
});
// global error
app.use(globalErrorHandler);
// not found error
app.use(notFound);

export default app;
