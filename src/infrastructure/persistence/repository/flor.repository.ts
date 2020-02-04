import { EntityRepository, getRepository } from "typeorm";
import { Flor } from "../entity/flor.entity";
import { FlorInterfaz } from "../interfaces/flor.interfaz";
// import { NO_DATA_RETURN } from "../../../application/common/constants";


@EntityRepository(Flor)
export class FlorRepository implements FlorInterfaz {

    async getFlores(): Promise<Flor[]> {
        try {
            const resultado: Flor[] =  await getRepository(Flor).createQueryBuilder("")
                .select( ["codigo", "nombre", "aroma", "color", "riego"] )
                .getRawMany();

            return resultado;

        } catch (err) {
            throw (err.message);
        }
        
    }


    async getFlorById(florId: number): Promise<Flor> {

        try {
            const resultado: Flor = await getRepository(Flor).createQueryBuilder("")
                .select( ["codigo", "nombre", "aroma", "color", "riego"] )
                .where("codigo = :codigo", { codigo: florId })
                .getRawOne();

            // if (typeof(resultado) === 'undefined') throw new Error (NO_DATA_RETURN);
            
            return resultado;
                
        } catch (err) {  
            throw (err.message);
        }
        
    }

 
}

