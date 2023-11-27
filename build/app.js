"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const liquidjs_1 = require("liquidjs");
const Incidente_1 = require("./entities/Incidente");
const app = (0, express_1.default)();
let engine = new liquidjs_1.Liquid();
app.engine('liquid', engine.express());
app.set('views', './src/templates');
app.set('view engine', 'liquid');
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send('Hello World');
});
const getIncidentes = () => __awaiter(void 0, void 0, void 0, function* () {
    const incidentes = yield Incidente_1.Incidente.find();
    return incidentes.map((incidente) => {
        return {
            entidad: incidente.prestacion.establecimiento.entidad.nombre,
            establecimiento: incidente.prestacion.establecimiento.nombre,
            servicio: incidente.prestacion.servicio.nombre,
            estado: incidente.estado,
        };
    });
});
app.get('/incidentes', (_req, res) => {
    const incidentes = getIncidentes();
    console.log("ACAAAAAA");
    console.log(incidentes);
    res.render('listadoIncidentes', { incidentes });
});
exports.default = app;
