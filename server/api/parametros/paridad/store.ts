import { getRepository, EntityRepository } from "typeorm";
import { Paridad } from "./model";
import { DTO } from "../../../common/utils";

@EntityRepository(Paridad)
export class ParidadRepository {

    constructor(){ }

    async getParidadMoneda(monedaId : number): Promise<DTO> {
        const dto = new DTO();
        try {
            const resultado =  await getRepository(Paridad).createQueryBuilder("P")
                .select(["P.PARIDAD", "P.CODIGOMONEDA", "P.TIPOPARIDAD", "P.DESCRIPCION", "P.DECIMALES", "P.CODIGOMONEDASBIF"])
                .where("P.CODIGOMONEDA = :id", { id: monedaId })
                .getRawMany();
            dto.result = resultado;            
        } catch (err) {
            dto.error = err.message;
        }
        return dto;
    }


    async getParidad(): Promise<DTO> {
        const dto = new DTO();
        try {
            const paridad =  await getRepository(Paridad).createQueryBuilder("P")
                .select(["P.PARIDAD", "P.CODIGOMONEDA", "P.TIPOPARIDAD", "P.DESCRIPCION", "P.DECIMALES", "P.CODIGOMONEDASBIF"])
                .getRawMany();
            dto.result = paridad;            
        } catch (err) {
            dto.error = err.message;
        }
        return dto;
    }

}