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
  const incidentes =getIncidentes()
  
  res.render('listadoIncidentes',{incidentes})
})

app.post('/', (req, res) => {
  const incidentes =getIncidentes()
  
  res.render('listadoIncidentes', { incidentes, admin:req.body.admin, user: req.body.user } )
})

const getIncidentes= async () => {
  const incidentes =await Incidente.find()
  return incidentes.map((incidente) => {
    return {
      entidad: incidente.prestacion?.establecimiento?.entidad?.nombre,
      establecimiento: incidente?.prestacion?.establecimiento?.nombre,
      servicio: incidente?.prestacion?.servicio?.nombre,
      estado: incidente?.estado,
      fecha_apertura: incidente?.fechaYHoraApertura.toLocaleDateString(),
    }
  })
}

export default app
