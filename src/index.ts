import * as express from 'express';
import { RequestHandler, ErrorRequestHandler, Request, Response, NextFunction } from 'express';

import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
import * as hpp from 'hpp';
import * as Helmet from 'helmet';

import { MySQLDataSource } from './data-source';
import defaultRouter from './api/routes/defaultPage';

dotenv.config();
const app = express();
const prod: boolean = process.env.NODE_ENV === 'production';
app.set('port', prod ? process.env.PORT : 8080);

// DB connection
MySQLDataSource.initialize()
  .then(() => {
    console.log('MySQL DataSource has been initialized!');
  })
  .catch((err) => {
    console.error('Error during MySQL DataSource Initialization', err);
  });

// Middleware
if (prod) {
  // app.use(Helmet());
  app.use(hpp());
  app.use(
    cors({
      origin: /hola\.com$/,
      credentials: true,
    })
  );
} else {
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
}

app.use('/', express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
      httpOnly: true,
      secure: false, //https -> true
      domain: prod ? '.hola.com' : undefined,
    },
    name: 'rnbck',
  })
);

app.use('/defaultPage', defaultRouter);

// Register Routes
app.get('/', (req, res, next) => {
  res.send('Initialized Hola server');
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('서버 에러 발생!');
});

// Server Listening
app.listen(app.get('port'), () => {
  console.log(`Hola-server is running on PORT: ${app.get('port')}`);
});
