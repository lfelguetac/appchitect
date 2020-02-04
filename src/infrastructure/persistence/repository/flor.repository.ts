import { EntityRepository, getRepository } from "typeorm";
import { Flor } from "../entity/flor.entity";
import { FlorInterfaz } from "../interfaces/flor.interfaz";
import { NO_DATA_RETURN } from "../../../application/common/constants";


@EntityRepository(Flor)
export class FlorRepository implements FlorInterfaz {

    async getFlores(): Promise<Flor[]> {

        try {
            const resultado: Flor[] =  await getRepository(Flor).createQueryBuilder("M")
                .select( ["M.CODIGO", "M.DESCRIPCION", "M.SIMBOLO", "M.DECIMALES"] )
                .getRawMany();

            return resultado;

        } catch (err) {
            throw new Error(err.message);
        }
        
    }


    async getFlorById(monedaId: number): Promise<Flor> {

        try {
            const resultado: Flor =  await getRepository(Flor).createQueryBuilder("M")
                .select( ["M.CODIGO", "M.DESCRIPCION"] )
                .where("M.CODIGO = :codigo", { codigo: monedaId })
                .getRawOne();

            if (typeof(resultado) === 'undefined') throw new Error (NO_DATA_RETURN);
            
            return resultado;
                
        } catch (err) {  
            throw new Error(err.message);
        }
        
    }

 
}

