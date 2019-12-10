import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("TRATAMIENTOTASA")
export class TipoTasa {

    @PrimaryColumn()
    codigo?: string;

    @Column()
    descripcion?: string;

}