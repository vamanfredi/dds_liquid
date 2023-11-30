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
    type: 'postgres',
    url: 'postgres://monitoreo_servicios_user:4zJgGWvc1RWsXNbVifPvi1nersK5KrUu@dpg-clib5tnjc5ks73errlrg-a.ohio-postgres.render.com/monitoreo_servicios',
    host: "dpg-clib5tnjc5ks73errlrg-a.ohio-postgres.render.com",
    username: 'monitoreo_servicios_user',
    password: '4zJgGWvc1RWsXNbVifPvi1nersK5KrUu',
    port: 5432,
    database: 'monitoreo_servicios',
    entities: [Incidente_1.Incidente, Prestacion_1.Prestacion, Entidad_1.Entidad, Establecimiento_1.Establecimiento, Servicio_1.Servicio],
    logging: true,
});
