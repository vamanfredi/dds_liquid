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
app.get('/incidentes', (_req, res) => {
    const incidentes = getIncidentes();
    res.render('listadoIncidentes', { incidentes });
});
const getIncidentes = () => __awaiter(void 0, void 0, void 0, function* () {
    const incidentes = yield Incidente_1.Incidente.find();
    return incidentes.map((incidente) => {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            entidad: (_c = (_b = (_a = incidente.prestacion) === null || _a === void 0 ? void 0 : _a.establecimiento) === null || _b === void 0 ? void 0 : _b.entidad) === null || _c === void 0 ? void 0 : _c.nombre,
            establecimiento: (_e = (_d = incidente === null || incidente === void 0 ? void 0 : incidente.prestacion) === null || _d === void 0 ? void 0 : _d.establecimiento) === null || _e === void 0 ? void 0 : _e.nombre,
            servicio: (_g = (_f = incidente === null || incidente === void 0 ? void 0 : incidente.prestacion) === null || _f === void 0 ? void 0 : _f.servicio) === null || _g === void 0 ? void 0 : _g.nombre,
            estado: incidente === null || incidente === void 0 ? void 0 : incidente.estado,
        };
    });
});
exports.default = app;
