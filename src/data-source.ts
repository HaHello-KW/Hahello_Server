import 'reflect-metadata';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export const MainDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_MAIN,
  synchronize: true,
  logging: false,
  entities: ['dist/entity/Enums/**/*.js', 'dist/entity/Surveys/**/*.js', 'dist/entity/Users/**/*.js'],
  migrations: [],
  subscribers: [],
  namingStrategy: new SnakeNamingStrategy(),
  /**
   * namingStrategy
   * : Naming strategy to be used to name tables and columns in the DB.
   */
});

export const QuestionDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_QUESTION,
  synchronize: true,
  logging: false,
  entities: ['dist/entity/Questions/*.js', 'dist/entity/Enums/*.js'],
  migrations: [],
  subscribers: [],
  namingStrategy: new SnakeNamingStrategy(),
});
