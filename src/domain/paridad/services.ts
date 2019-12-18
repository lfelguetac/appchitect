import { ParidadContract } from "./contract";
import { ParidadRepository } from "../../infrastructure/repository/persistence/paridad";
import { Paridad } from "../../infrastructure/repository/entity/paridad";
import { ParidadRepoContract } from "../../infrastructure/repository/interfaces/paridad";

export class ParidadServices implements ParidadContract {

    private repoParidad: ParidadRepoContract;

    constructor(paridadRepoImpl: ParidadRepoContract = new ParidadRepository){
        this.repoParidad = paridadRepoImpl;
    }

    async obtenerParidadMoneda(monedaId: number): Promise<Paridad> {
        try {
            const paridad: Paridad = await this.repoParidad.getParidadMoneda(monedaId);

            return paridad;            
        } catch (error) {
            throw new Error(error.message);    
        }

    }
    
    async obtenerListaDeParidades(): Promise<Paridad[]> {
        try {
            const paridad: Paridad[] = await this.repoParidad.getListaParidades();
            return paridad;
            
        } catch (error) {
            throw new Error(error.message);
        }
        
    }


}