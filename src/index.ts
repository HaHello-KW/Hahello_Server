import express from 'express';
import { RequestHandler, ErrorRequestHandler, Request, Response, NextFunction } from 'express';

import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session';
import hpp from 'hpp';
import Helmet from 'helmet';

import { MainDataSource, QuestionDataSource } from './data-source';
import defaultRouter from './api/routes/Questions/defaultPage';
import typeRouter from './api/routes/Questions/typePage';
import testRouter from './api/routes/TestDatas/testData'
// import kakaomapRouter from './api/kakao/map_api';

dotenv.config();
const app = express();
const prod: boolean = process.env.NODE_ENV === 'production';
app.set('port', prod ? process.env.PORT : 8080);

// DB connection
MainDataSource.initialize()
  .then(() => {
    console.log('# MySQL: Main DataSource has been initialized!');
  })
  .catch((err) => {
    console.error('Error during MySQL: Main DataSource Initialization', err);
  });
QuestionDataSource.initialize()
  .then(() => {
    console.log('# MySQL: Question DataSource has been initialized!');
  })
  .catch((err) => {
    console.error('Error during MySQL: Question DataSource Initialization', err);
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
    name: 'hola',
  })
);

app.use('/question/default', defaultRouter);
app.use('/question/type', typeRouter);
app.use('/test', testRouter);
// app.use('/near-hospital', kakaomapRouter);

// Register Routes
app.get('/', (req, res, next) => {
  res.send('Initialized Hola server_latest version: 23.5.29');
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('서버 에러 발생!');
});

// Server Listening
app.listen(app.get('port'), () => {
  console.log(`# Hola-server is running on PORT: ${app.get('port')}`);
});
