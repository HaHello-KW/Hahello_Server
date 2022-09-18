import * as express from 'express';
import { Request, Response, NextFunction, Application } from 'express';

const app: Application = express();
const prod: boolean = process.env.NODE_ENV === 'production';

app.get('/', (req, res) => {
  res.send('Initialized KEET server');
});

app.listen(prod ? process.env.PORT : 3065, () => {
  console.log(`KEET-server is running on PORT:${process.env.PORT}`);
});
