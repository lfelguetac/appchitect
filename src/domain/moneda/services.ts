import { MonedaContract } from "./contract";
import { MonedaRepository } from "../../infrastructure/repository/persistence/moneda";
import { Moneda } from "../../infrastructure/repository/entity/moneda";
import { MonedaRepoContract } from "../../infrastructure/repository/interfaces/moneda";

export class MonedaServices implements MonedaContract{
    
    private monedaRepository: MonedaRepoContract
    constructor(monedaRepoImpl: MonedaRepoContract = new MonedaRepository){ 
        this.monedaRepository = monedaRepoImpl;
    }

    async obtenerListaDeMonedas(): Promise<Moneda[]> {
        try {
            const monedas: Moneda[] = await this.monedaRepository.traeMonedas();
            // if (monedas.length  > 1) throw new Error('No puede retornar mas de una moneda');
            return monedas;
        } catch (error) {
            throw new Error(error.message);
        }
 
    }
    
    
    async obtenerMonedaEspecifica(monedaId: number): Promise<Moneda> {

        try {
            return await this.monedaRepository.getMonedaById(monedaId);    
        } catch (error) {
            throw new Error(error.message);
        }

    }


}