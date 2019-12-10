import { getRepository, EntityRepository } from "typeorm";
import { TipoTasa } from "./model";
import { DTO } from "../../../common/utils";

@EntityRepository(TipoTasa)
export class TipoTasaRepository {

    constructor() { }

    async getTipoTasa(): Promise<DTO> {

        const dto = new DTO();
        try {
            const resultado = await getRepository(TipoTasa).createQueryBuilder("TT")
                .select(["TT.CODIGO", "TT.DESCRIPCION"])
                .getRawMany()
            dto.result = resultado;
        } catch (err) {
            dto.error = err.message
        }

        return dto;

    }

}