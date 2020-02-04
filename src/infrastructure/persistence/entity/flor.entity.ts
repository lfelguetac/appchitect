import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("FLOR")
export class Flor {

    @PrimaryColumn()
    codigo:      number;

    @Column()
    nombre?: string; 

    @Column()
    aroma?:     string;

    @Column()
    color?:   number;   

    @Column()
    riego?:   number;   

};

