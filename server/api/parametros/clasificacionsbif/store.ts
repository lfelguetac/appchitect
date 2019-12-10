import { EntityRepository, getRepository } from "typeorm";
import { ClasificacionSbif } from "./model";
import { DTO } from "../../../common/utils";

@EntityRepository( ClasificacionSbif )
export class ClasificacionSbifRepository {

    async getClasificacionSbif(): Promise<DTO>{
        
        const dto = new DTO();

        try {
            const resultado =  await getRepository(ClasificacionSbif).createQueryBuilder("CP")
                .select(["CP.CODIGO", "CP.DESCRIPCION "])
                .getRawMany();
            dto.result = resultado;
            
        } catch (err) {
            dto.error = err.message; 
        }

        return dto;
    }
    

}