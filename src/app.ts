import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';

import router from './app/routes';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
// const port = 3000;

//Parser
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('assignment 3 running');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);
export default app;
