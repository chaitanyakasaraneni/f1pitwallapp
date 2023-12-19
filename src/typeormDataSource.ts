import * as config from 'config';
import { DataSource, DataSourceOptions } from 'typeorm';

const orm: any = config.get('orm');

export const typeORMConfig: DataSourceOptions = {
  ...orm,
  type: 'postgres',
  synchronize: false,
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
  logging: false,
  subscribers: [],
  migrations: [`${__dirname}/db-migrations/*{.ts,.js}`],
};

export const AppDataSource = new DataSource(typeORMConfig);
