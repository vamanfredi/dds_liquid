import { DataSource } from 'typeorm'
import { Incidente } from './entities/Incidente'
import { Prestacion } from './entities/Prestacion'
import { Entidad } from './entities/Entidad'
import { Establecimiento } from './entities/Establecimiento'
import { Servicio } from './entities/Servicio'
import dotenv  from 'dotenv'
dotenv.config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL,
  port: 5432,
  database: 'monitoreo_servicios',
  entities: [Incidente,Prestacion,Entidad,Establecimiento,Servicio],
  logging: true,
  
})
