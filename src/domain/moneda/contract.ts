import { Moneda } from "../../infrastructure/repository/entity/moneda";

export interface MonedaContract {

    obtenerListaDeMonedas(): Promise<Moneda[]>;

    obtenerMonedaEspecifica(monedaId: number): Promise<Moneda>;

}
