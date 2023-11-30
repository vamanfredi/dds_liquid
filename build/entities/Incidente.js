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
exports.Incidente = void 0;
const typeorm_1 = require("typeorm");
const Prestacion_1 = require("./Prestacion");
let Incidente = class Incidente extends typeorm_1.BaseEntity {
};
exports.Incidente = Incidente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Incidente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Incidente.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: "prestacion_id" }),
    (0, typeorm_1.ManyToOne)(() => Prestacion_1.Prestacion, { eager: true }),
    __metadata("design:type", Prestacion_1.Prestacion)
], Incidente.prototype, "prestacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Incidente.prototype, "observaciones", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "fechayhoraapertura" }),
    __metadata("design:type", Date)
], Incidente.prototype, "fechaYHoraApertura", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "fechayhoracierre" }),
    __metadata("design:type", Date)
], Incidente.prototype, "fechaYHoraCierre", void 0);
exports.Incidente = Incidente = __decorate([
    (0, typeorm_1.Entity)()
], Incidente);
