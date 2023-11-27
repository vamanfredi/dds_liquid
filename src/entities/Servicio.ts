import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"


@Entity()
export class Servicio extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string
    
}