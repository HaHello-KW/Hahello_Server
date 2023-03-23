import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import { Request, Response, NextFunction, Application } from 'express';
import { json } from 'sequelize';
import { MySQLDataSource } from './data-source';
import Test_Controller from './controllers/test_Controller';

// Controllers (route handlers)
// import * as userController from './controllers/userController';

const app: Application = express();
const prod: boolean = process.env.NODE_ENV === 'production';
app.use(express.json());

// DB connection
MySQLDataSource.initialize()
  .then(() => {
    console.log('MySQL DataSource has been initialized!');
  })
  .catch((err) => {
    console.error('Error during MySQL DataSource Initialization', err);
  });

// Register Routes
app.get('/', (req, res) => {
  res.send('Initialized Hahello server');
});

// app.get('/user', userController.(   ));

// Server Listening
app.listen(prod ? process.env.PORT : 3065, () => {
  console.log(`Hahello-server is running on PORT:${process.env.PORT}`);
});
