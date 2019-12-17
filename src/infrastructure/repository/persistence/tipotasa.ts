import { getRepository, EntityRepository } from "typeorm";
import { TipoTasa } from "../entity/tipotasa";
import { TipotasaRepoContract } from "../interfaces/tipotasa";


@EntityRepository(TipoTasa)
export class TipoTasaRepository implements TipotasaRepoContract {

    async getTipoTasa(): Promise<TipoTasa[]> {

        try {
            const resultado = await getRepository(TipoTasa).createQueryBuilder("TT")
                .select(["TT.CODIGO", "TT.DESCRIPCION"])
                .getRawMany();
                
            return resultado;
        } catch (err) {
            throw new Error(err.message);
        }

    }

}