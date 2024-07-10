import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/not-found';
import { allRoutes } from './app/routes';
const app: Application = express();
app.use(express.json());
app.use(cors());
// all routes
app.use('/api/v1', allRoutes);
// test
app.get('/', (req, res) => {
  res.send('Sportize is running on server.');
});
// global error
app.use(globalErrorHandler);
// not found error
app.use(notFound);

export default app;
