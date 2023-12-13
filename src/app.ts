import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { courseRoute } from './app/modules/course/course.route';
// const port = 3000;

//Parser
app.use(express.json());
app.use(cors());

app.use('/api', courseRoute);

app.get('/', (req: Request, res: Response) => {
  res.send(' assignment 3 running');
});

export default app;
