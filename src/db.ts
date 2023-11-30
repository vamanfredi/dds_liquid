import { DataSource } from 'typeorm'
import { Incidente } from './entities/Incidente'
import { Prestacion } from './entities/Prestacion'
import { Entidad } from './entities/Entidad'
import { Establecimiento } from './entities/Establecimiento'
import { Servicio } from './entities/Servicio'

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL,
  //host: "dpg-clib5tnjc5ks73errlrg-a.ohio-postgres.render.com",
  //username: 'monitoreo_servicios_user',
  //password: '4zJgGWvc1RWsXNbVifPvi1nersK5KrUu',
  port: 5432,
  database: 'monitoreo_servicios',
  entities: [Incidente,Prestacion,Entidad,Establecimiento,Servicio],
  logging: true,
  
})
