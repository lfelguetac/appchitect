import { FlorContract } from "./flor.contract";
import { FlorRepository } from "../../infrastructure/persistence/repository/flor.repository";
import { Flor } from "../../infrastructure/persistence/entity/flor.entity";
import { FlorInterfaz } from "../../infrastructure/persistence/interfaces/flor.interfaz";

export class FlorServices implements FlorContract{
    
    private florRepository: FlorInterfaz
    constructor(florRepoImpl: FlorInterfaz = new FlorRepository){ this.florRepository = florRepoImpl; }

    async obtenerListaFlores(): Promise<Flor[]> {
        try {
            const flores: Flor[] = await this.florRepository.getFlores();
            return flores;
        } catch (error) {
            throw (error.message);
        }
    }
    
    async obtenerFlorEspecifica(florId: number): Promise<Flor> {

        try {
            return await this.florRepository.getFlorById(florId);    
        } catch (error) {
            throw (error.message);
        }

    }


}