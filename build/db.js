"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Incidente_1 = require("./entities/Incidente");
const Prestacion_1 = require("./entities/Prestacion");
const Entidad_1 = require("./entities/Entidad");
const Establecimiento_1 = require("./entities/Establecimiento");
const Servicio_1 = require("./entities/Servicio");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '123456',
    port: 3306,
    database: 'dds',
    entities: [Incidente_1.Incidente, Prestacion_1.Prestacion, Entidad_1.Entidad, Establecimiento_1.Establecimiento, Servicio_1.Servicio],
    logging: true,
});
