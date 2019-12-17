import { EntityRepository } from "typeorm";
import { Moneda } from "../entity/moneda";
import { MonedaRepoContract } from "../interfaces/moneda";

@EntityRepository(Moneda)
export class MonedaRepositoryMock implements MonedaRepoContract {

    async traeMonedas(): Promise<Moneda[]> {
        
         const mock: Moneda[] = [{codigo : 123, descripcion: 'euro', simbolo: '$ ', decimales: 1}];

        return mock;
    }


    async getMonedaById(monedaId: number): Promise<Moneda> {

        const mock: Moneda = {};
        
        return mock;

    }

 
}  

