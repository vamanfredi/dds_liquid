import { DataSource } from 'typeorm'
import { Incidente } from './entities/Incidente'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '123456',
  port: 3306,
  database: 'dds',
  entities: [Incidente],
  logging: true
})
