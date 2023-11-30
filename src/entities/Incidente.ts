import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, BaseEntity, ManyToOne ,JoinColumn } from "typeorm"
import { Prestacion } from "./Prestacion"

@Entity()
export class Incidente extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    estado:boolean
    @JoinColumn({ name: "prestacion_id" })
    @ManyToOne(()=>Prestacion,{eager:true})
    prestacion:Prestacion
    
    @Column()
    observaciones:string
    
    @CreateDateColumn({name:"fechayhoraapertura"})
    fechaYHoraApertura:Date
    
    @UpdateDateColumn({name:"fechayhoracierre"})
    fechaYHoraCierre:Date
    
}