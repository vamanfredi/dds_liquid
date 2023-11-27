import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from "typeorm"
import { Entidad } from "./Entidad"


@Entity()
export class Establecimiento extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string

    @JoinColumn({ name: "entidad_id" })
    @ManyToOne(()=>Entidad,{eager:true})
    entidad: Entidad
}