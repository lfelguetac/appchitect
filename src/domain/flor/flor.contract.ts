import { Flor } from "../../infrastructure/persistence/entity/flor.entity";

export interface FlorContract {

    obtenerListaFlores(): Promise<Flor[]>;

    obtenerFlorEspecifica(florId: number): Promise<Flor>;

}
