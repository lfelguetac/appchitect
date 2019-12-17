import { Paridad } from "../entity/paridad";

export interface ParidadRepoContract {
 
    getParidadMoneda(monedaId : number): Promise<Paridad>;
    
    getListaParidades(): Promise<Paridad[]>;
        
}