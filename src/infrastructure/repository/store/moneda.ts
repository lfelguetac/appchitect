import { EntityRepository, getRepository } from "typeorm";
import { Moneda } from "../entity/moneda";

@EntityRepository(Moneda)
export class MonedaRepository{

    async traeMonedas(): Promise<Moneda[]> {
        
        try {
            const resultado: Moneda[] =  await getRepository(Moneda).createQueryBuilder("M")
                .select( ["M.CODIGO", "M.DESCRIPCION"] )
                .getRawMany();

            if (typeof(resultado) === 'undefined') throw new Error("La consulta no retorno ningún resultado");
            
            return resultado;

        } catch (err) {
            throw new Error(`INFRASTRUCTURE: ${err.message}`);
        }
        
    }


    async getMonedaById(monedaId: number): Promise<Moneda|null> {

        try {
            const resultado: Moneda =  await getRepository(Moneda).createQueryBuilder("M")
                .select( ["M.CODIGO", "M.DESCRIPCION"] )
                .where("M.CODIGO = :codigo", { codigo: monedaId })
                .getRawOne();

            return typeof(resultado) === 'undefined'? null : resultado;

        } catch (err) {  
            throw new Error(err.message);
        }
        
    }

 
}

