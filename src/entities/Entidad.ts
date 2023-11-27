import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"


@Entity()
export class Entidad extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string
    
}