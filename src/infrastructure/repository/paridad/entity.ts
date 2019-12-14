import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("PARIDADMONEDA")
export class Paridad{

    @PrimaryColumn()
    paridad: number;
    
    @Column()
    codigomoneda: number;
    
    @Column()
    tipoparidad?: number;
    
    @Column()
    descripcion: string;
    
    @Column()
    decimales: number;
    
    @Column()
    codigomonedasbif: string; 

}

