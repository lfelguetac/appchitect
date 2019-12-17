import { TipotasaContract } from "./contract";
import { TipoTasa } from "../../infrastructure/repository/entity/tipotasa";
import { TipoTasaRepository } from "../../infrastructure/repository/persistence/tipotasa";
import { TipotasaRepoContract } from "../../infrastructure/repository/interfaces/tipotasa";

export class TipotasaServices implements TipotasaContract {
    
    private tipotasaRepo: TipotasaRepoContract;
    constructor(tipotasaRepoImpl: TipotasaRepoContract = new TipoTasaRepository){ 
        this.tipotasaRepo = tipotasaRepoImpl; 
    }
    
    async obtenerTipoTasa(): Promise<TipoTasa[]> {
        try {
            
            const tipotasas: TipoTasa[] = await this.tipotasaRepo.getTipoTasa();
            
            return tipotasas;
            
        } catch (error) {
            throw new Error(error.message)
        }

    }
    
}