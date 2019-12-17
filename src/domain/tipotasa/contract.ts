import { TipoTasa } from "../../infrastructure/repository/entity/tipotasa";

export interface TipotasaContract{

    obtenerTipoTasa(): Promise<TipoTasa[]>;

}