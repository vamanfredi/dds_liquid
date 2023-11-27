"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prestacion = void 0;
const typeorm_1 = require("typeorm");
const Establecimiento_1 = require("./Establecimiento");
const Servicio_1 = require("./Servicio");
let Prestacion = class Prestacion extends typeorm_1.BaseEntity {
};
exports.Prestacion = Prestacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Prestacion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Prestacion.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: "establecimiento_id" }),
    (0, typeorm_1.ManyToOne)(() => Establecimiento_1.Establecimiento, { eager: true }),
    __metadata("design:type", Establecimiento_1.Establecimiento)
], Prestacion.prototype, "establecimiento", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: "servicio_id" }),
    (0, typeorm_1.ManyToOne)(() => Servicio_1.Servicio, { eager: true }),
    __metadata("design:type", Servicio_1.Servicio)
], Prestacion.prototype, "servicio", void 0);
exports.Prestacion = Prestacion = __decorate([
    (0, typeorm_1.Entity)()
], Prestacion);
