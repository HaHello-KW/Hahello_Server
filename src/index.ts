import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
import * as expressSession from 'express-session';
// import * as passport from 'passport';
import * as hpp from 'hpp';
import * as Helmet from 'helmet';

import { MySQLDataSource } from './data-source';
import Test_Controller from './controllers/test_Controller';

// Controllers (route handlers)
// import * as userController from './controllers/userController';

dotenv.config();
const app = express();
const prod: boolean = process.env.NODE_ENV === 'production';

app.set('port', prod ? process.env.PORT : 3065);

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
// app.use(passport.initialize());
// app.use(passport.session());

// DB connection
MySQLDataSource.initialize()
  .then(() => {
    console.log('MySQL DataSource has been initialized!');
  })
  .catch((err) => {
    console.error('Error during MySQL DataSource Initialization', err);
  });

// Register Routes
app.get('/', (req, res, next) => {
  res.send('Initialized Hola server');
});

// Server Listening
app.listen(app.get('port'), () => {
  console.log(`Hola-server is running on PORT: ${app.get('port')}`);
});
