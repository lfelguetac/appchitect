import { Moneda } from "../entity/moneda";

export interface MonedaRepoContract{

    traeMonedas(): Promise<Moneda[]>;

    getMonedaById(monedaId: number): Promise<Moneda>;

}