import { TipoTasa } from "../../infrastructure/repository/entity/tipotasa";

export interface TipotasaService{

    getTipoTasa(): Promise<TipoTasa[]>;

}