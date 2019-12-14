import { Moneda } from "../../infrastructure/repository/entity/moneda";

export interface MonedaServices {

    getListaMonedas(): Promise<Moneda[]>;

    getMonedaById(monedaId: number): Promise<Moneda>;

}
