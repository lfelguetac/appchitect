import { TipoTasaDTO } from "./model";

export interface TipotasaService{

    getTipoTasa(): Promise<TipoTasaDTO>;

}