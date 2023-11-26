import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '123456',
  port: 3306,
  database: 'dds',
  entities: [],
  logging: true
})
