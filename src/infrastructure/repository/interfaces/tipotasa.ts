import { TipoTasa } from "../entity/tipotasa";

export interface TipotasaRepoContract {
    
    getTipoTasa(): Promise<TipoTasa[]>;

}