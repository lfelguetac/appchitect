import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("CLASIFICACIONPRODUCTO")
export class ClasificacionSbif{
    
    @PrimaryColumn()
    codigo?: number;


    

    @Column()
    descripcion?: string;
}
