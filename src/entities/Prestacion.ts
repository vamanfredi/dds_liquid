import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn} from "typeorm"
import { Establecimiento } from "./Establecimiento"
import { Servicio } from "./Servicio"

@Entity()
export class Prestacion extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    estado:boolean
    @JoinColumn({ name: "establecimiento_id" })
    @ManyToOne(()=>Establecimiento,{eager:true})
    establecimiento:Establecimiento

    @JoinColumn({ name: "servicio_id" })
    @ManyToOne(()=>Servicio,{eager:true})
    servicio:Servicio
    
}