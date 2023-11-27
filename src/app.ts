import express from 'express'
import {Liquid} from "liquidjs"
import { Incidente } from './entities/Incidente'

const app = express()

let engine = new Liquid()

app.engine('liquid', engine.express())
app.set('views', './src/templates')
app.set('view engine', 'liquid')


app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Hello World')
})

const getIncidentes= async () => {
  const incidentes =await Incidente.find()
  return incidentes.map((incidente) => {
    return {
      entidad: incidente.prestacion.establecimiento.entidad.nombre,
      establecimiento: incidente.prestacion.establecimiento.nombre,
      servicio: incidente.prestacion.servicio.nombre,
      estado: incidente.estado,
    }
  })
}

app.get('/incidentes', (_req, res) => {
  const incidentes =getIncidentes()
  console.log("ACAAAAAA")
  console.log(incidentes)
  res.render('listadoIncidentes', {incidentes})

})
export default app
