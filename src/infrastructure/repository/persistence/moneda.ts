import { EntityRepository, getRepository } from "typeorm";
import { Moneda } from "../entity/moneda";
import { MonedaRepoContract } from "../interfaces/moneda";


@EntityRepository(Moneda)
export class MonedaRepository implements MonedaRepoContract {

    async traeMonedas(): Promise<Moneda[]> {

        try {
            const resultado: Moneda[] =  await getRepository(Moneda).createQueryBuilder("M")
                .select( ["M.CODIGO", "M.DESCRIPCION", "M.SIMBOLO", "M.DECIMALES"] )
                .getRawMany();

            return resultado;

        } catch (err) {
            throw new Error(err.message);
        }
        
    }


    async getMonedaById(monedaId: number): Promise<Moneda> {

        try {
            const resultado: Moneda =  await getRepository(Moneda).createQueryBuilder("M")
                .select( ["M.CODIGO", "M.DESCRIPCION"] )
                .where("M.CODIGO = :codigo", { codigo: monedaId })
                .getRawOne();

            return resultado;
                
        } catch (err) {  
            throw new Error(err.message);
        }
        
    }

 
}

