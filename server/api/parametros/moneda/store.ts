import { EntityRepository, getRepository } from "typeorm";
import { Moneda } from "./model";
import { DTO } from "../../../common/utils";


@EntityRepository(Moneda)
export class MonedaRepository {

    constructor() { }

    async getListaMonedas(): Promise<DTO> {    

        const dto = new DTO();

        try {

            const resultado =  await getRepository(Moneda).createQueryBuilder("M")
                .select( ["M.CODIGO", "M.DESCRIsPCION"] )
                .getRawMany();

            dto.result = typeof(resultado) === 'undefined'? null : resultado;

        } catch (err) {
            dto.error = err.message;
        }

        return dto;

    }


    async getMonedaById(monedaId: number): Promise<DTO> {
        
        const dto = new DTO();
        
        try {
            const resultado =  await getRepository(Moneda).createQueryBuilder("M")
                .select( ["M.CODIGO", "M.DESCRIPCION"] )
                .where("M.CODIGO = :codigo", { codigo: monedaId })
                .getRawOne();

            dto.result = typeof(resultado) === 'undefined'? null : resultado;

        } catch (err) {  
            dto.error = err.message;
        }

        return dto;

    }

}

