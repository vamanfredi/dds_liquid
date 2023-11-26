import express from 'express'
import {Liquid} from "liquidjs"
const app = express()

let engine = new Liquid()

app.engine('liquid', engine.express())
app.set('views', './templates')
app.set('view engine', 'liquid')


app.use(express.json())

app.get('/', (_req, res) => {
  res.send('Hello World')
})

app.get('/listadoIncidentes', (_req, res) => {
  res.render('listadoIncidentes')
})
export default app
