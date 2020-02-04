import { Column, PrimaryColumn, Entity } from "typeorm";
@Entity()
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

