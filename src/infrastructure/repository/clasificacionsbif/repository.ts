import { EntityRepository, getRepository } from "typeorm";
import { ClasificacionSbif } from "./entity";
import { ClasificacionSbifDTO } from "../../../domain/clasificacionsbif/model";


@EntityRepository( ClasificacionSbif )
export class ClasificacionSbifRepository {

    clasificacionDto: ClasificacionSbifDTO;
    constructor(){
        this.clasificacionDto = new ClasificacionSbifDTO();
    }

    async getClasificacionSbif(): Promise<ClasificacionSbifDTO>{

        try {
            const resultado =  await getRepository(ClasificacionSbif).createQueryBuilder("CP")
                .select(["CP.CODIGO", "CP.DESCRIPCION "])
                .getRawMany();
            this.clasificacionDto.result = resultado;
            
        } catch (err) {
            this.clasificacionDto.error = err.message; 
        }

        return this.clasificacionDto;
    }
    

}