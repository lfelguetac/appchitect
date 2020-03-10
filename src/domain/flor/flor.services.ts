import { FlorContract } from "./flor.contract";
import { FlorRepository } from "../../infrastructure/persistence/repository/flor.repository";
import { Flor, Conservacion } from "../../infrastructure/persistence/entity/flor.entity";
import { FlorInterfaz } from "../../infrastructure/persistence/interfaces/flor.interfaz";

export class FlorServices implements FlorContract{
    
    private florRepository: FlorInterfaz
    constructor(florRepoImpl: FlorInterfaz = new FlorRepository){ this.florRepository = florRepoImpl; }    
    
    async obtenerFlorEspecifica(florId: number): Promise<Flor> {
        try {
            const florConsultada: Flor = await this.florRepository.getFlorById(florId);
            switch (florConsultada.estadoConservacion){
                case Conservacion.RADIANTE:
                    florConsultada.precio = florConsultada.precio * 1.4;
                case Conservacion.MARCHITA:
                    florConsultada.precio = florConsultada.precio * 0.7;
            }
            return florConsultada;
        } catch (error) {
            throw (error.message);
        }

    }


    async obtenerListaFlores(): Promise<Flor[]> {
        try {
            const flores: Flor[] = await this.florRepository.getFlores();
            return flores;
        } catch (error) {
            throw (error.message);
        }
    }
    

}
