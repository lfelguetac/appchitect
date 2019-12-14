import { MonedaDTO } from "./model";

export interface MonedaServices {

    getListaMonedas(): Promise<MonedaDTO>;

    getMonedaById(monedaId: number): Promise<MonedaDTO>;

}
