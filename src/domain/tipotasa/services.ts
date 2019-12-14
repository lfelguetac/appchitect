import { TipotasaService } from "./contract";
import { TipoTasaRepository } from "../../infrastructure/repository/tipotasa/repository";
import { TipoTasaDTO } from "./model";

export class TipotasaDomain implements TipotasaService {
    
    async getTipoTasa(): Promise<TipoTasaDTO> {
        const repoTipotasa = new TipoTasaRepository();
        const tipotasaDto: TipoTasaDTO = await repoTipotasa.getTipoTasa();
        
        return tipotasaDto;
    }
    
}