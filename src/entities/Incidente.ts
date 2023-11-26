import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, BaseEntity } from "typeorm"
import { Prestacion } from "./Prestacion"

@Entity()
export class Incidente extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    estado:boolean
    
    @Column()
    prestacion:Prestacion
    
    @Column()
    observaciones:string
    
    @CreateDateColumn()
    fechaYHoraDeApertura:Date
    
    @UpdateDateColumn()
    fechaYHoraDeCierre:Date
    
}