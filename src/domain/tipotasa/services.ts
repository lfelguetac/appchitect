import { TipotasaService } from "./contract";
import { TipoTasa } from "../../infrastructure/repository/entity/tipotasa";
import { TipoTasaRepository } from "../../infrastructure/repository/store/tipotasa";

export class TipotasaDomain implements TipotasaService {
    
    async getTipoTasa(): Promise<TipoTasa[]> {
        try {
            const repoTipotasa = new TipoTasaRepository();
            const tipotasas: TipoTasa[] = await repoTipotasa.getTipoTasa();
            
            return tipotasas;
            
        } catch (error) {
            throw new Error(error.message)
        }

    }
    
}