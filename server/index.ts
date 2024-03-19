import express, { Express, Request, Response } from "express";
import cors from 'cors';

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/api/test", (req: Request, res: Response) => {
  res.json({ message: "Hello, World!"});
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});