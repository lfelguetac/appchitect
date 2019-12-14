import { ParidadServices } from "./contract";
import { ParidadRepository } from "../../infrastructure/repository/paridad/repository";
import { ParidadDTO } from "./model";

export class ParidadDomain implements ParidadServices {

    repoParidad: ParidadRepository;
    constructor(){
        this.repoParidad = new ParidadRepository();
    }

    async getParidadMoneda(monedaId: number): Promise<ParidadDTO> {

        const dtoParidad: ParidadDTO = await this.repoParidad.getParidadMoneda(monedaId);
        return dtoParidad;

    }    
    
    async getListaParidades(): Promise<ParidadDTO> {

        const dtoParidad: ParidadDTO  = await this.repoParidad.getListaParidades();
        return dtoParidad;
        
    }


}