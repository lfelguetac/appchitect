import { MonedaServices } from "./contract";
import { MonedaRepository } from "../../infrastructure/repository/store/moneda";
import { Moneda } from "../../infrastructure/repository/entity/moneda";

export class MonedaDomain implements MonedaServices{
    
    private monedaRepository: MonedaRepository;
    constructor(){
        this.monedaRepository = new MonedaRepository();
    }

    async getListaMonedas(): Promise<Moneda[]> {
        try {
            const monedas: Moneda[] = await this.monedaRepository.traeMonedas();
            // if (monedas.length  > 1) throw new Error("DOMAIN: No puede retornar mas de una moneda")
            return monedas
        } catch (error) {
            throw new Error(error.message);  
        }
        
    }    
    
    
    async getMonedaById(monedaId: number): Promise<Moneda> {

        try {
            return await this.monedaRepository.getMonedaById(monedaId);    
        } catch (error) {
            throw new Error(error.message);
        }

    }


}