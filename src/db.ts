import { DataSource } from 'typeorm'
import { Incidente } from './entities/Incidente'
import { Prestacion } from './entities/Prestacion'
import { Entidad } from './entities/Entidad'
import { Establecimiento } from './entities/Establecimiento'
import { Servicio } from './entities/Servicio'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '123456',
  port: 3306,
  database: 'dds',
  entities: [Incidente,Prestacion,Entidad,Establecimiento,Servicio],
  logging: true,
  
})
