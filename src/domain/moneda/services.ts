import { MonedaServices } from "./contract";
import { MonedaRepository } from "../../infrastructure/repository/moneda/repository";
import { MonedaDTO } from "./model";

export class MonedaDomain implements MonedaServices{
    
    monedaRepository: MonedaRepository;
    constructor(){
        this.monedaRepository = new MonedaRepository();
    }

    async getListaMonedas(): Promise<MonedaDTO> {
        
        const monedaDto:MonedaDTO = await this.monedaRepository.traeMonedas();
        return monedaDto;
        
    }    
    
    
    async getMonedaById(monedaId: number): Promise<MonedaDTO> {

        const monedaDto: MonedaDTO = await this.monedaRepository.getMonedaById(monedaId);
        return monedaDto;

    }


}