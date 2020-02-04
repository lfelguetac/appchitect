import { Flor } from "../entity/flor.entity";

export interface FlorInterfaz{

    getFlores(): Promise<Flor[]>;

    getFlorById(monedaId: number): Promise<Flor>;

}