import { ParidadServices } from "./contract";
import { ParidadRepository } from "../../infrastructure/repository/store/paridad";
import { Paridad } from "../../infrastructure/repository/entity/paridad";

export class ParidadDomain implements ParidadServices {

    private repoParidad: ParidadRepository;
    constructor(){
        this.repoParidad = new ParidadRepository();
    }

    async getParidadMoneda(monedaId: number): Promise<Paridad> {
        try {
            const paridad: Paridad = await this.repoParidad.getParidadMoneda(monedaId);
            return paridad;            
        } catch (error) {
            throw new Error(error.message);    
        }

    }    
    
    async getListaParidades(): Promise<Paridad[]> {
        try {
            const paridad: Paridad[] = await this.repoParidad.getListaParidades();
            return paridad;
            
        } catch (error) {
            throw new Error(error.message);
        }
        
    }


}