import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("MONEDA")
export class Moneda {

    @PrimaryColumn()
    codigo?:      number;

    @Column()
    descripcion?: string; 

    @Column()
    simbolo?:     string;

    @Column()
    decimales?:   number;   

};

