import { EntityRepository, getRepository } from "typeorm";
import { ClasificacionSbif } from "../entity/clasificacionsbif";
import { ClasificacionSbifRepoContract } from "../interfaces/clasificacionsbif";

@EntityRepository( ClasificacionSbif )
export class ClasificacionSbifRepository implements ClasificacionSbifRepoContract {

    async getClasificacionSbif(): Promise<ClasificacionSbif[]>{

        try {
            const resultado =  await getRepository(ClasificacionSbif).createQueryBuilder("CP")
                .select(["CP.CODIGO", "CP.DESCRIPCION "])
                .getRawMany();

            return resultado;
        } catch (err) {
            throw new Error(err.message);
        }

    }
    

}