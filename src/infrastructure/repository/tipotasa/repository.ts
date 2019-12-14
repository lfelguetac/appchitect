import { getRepository, EntityRepository } from "typeorm";
import { TipoTasa } from "./entity";
import { TipoTasaDTO } from "../../../domain/tipotasa/model";


@EntityRepository(TipoTasa)
export class TipoTasaRepository {

    tipoTasaDTO: TipoTasaDTO;
    constructor() { 
        this.tipoTasaDTO = new TipoTasaDTO();
    }

    async getTipoTasa(): Promise<TipoTasaDTO> {

        try {
            const resultado = await getRepository(TipoTasa).createQueryBuilder("TT")
                .select(["TT.CODIGO", "TT.DESCRIPCION"])
                .getRawMany()
            this.tipoTasaDTO.result = resultado;
        } catch (err) {
            this.tipoTasaDTO.error = err.message
        }

        return this.tipoTasaDTO;

    }

}