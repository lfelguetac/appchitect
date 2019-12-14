import { getRepository, EntityRepository } from "typeorm";
import { ParidadServices } from "../../../domain/paridad/contract";
import { Paridad } from "./entity";
import { ParidadDTO } from "../../../domain/paridad/model";


@EntityRepository(Paridad)
export class ParidadRepository implements ParidadServices{

    paridadDTO: ParidadDTO;
    constructor(){
        this.paridadDTO = new ParidadDTO();
    }

    async getParidadMoneda(monedaId : number): Promise<ParidadDTO> {
        try {
            const resultado =  await getRepository(Paridad).createQueryBuilder("P")
                .select(["P.PARIDAD", "P.CODIGOMONEDA", "P.TIPOPARIDAD", "P.DESCRIPCION", "P.DECIMALES", "P.CODIGOMONEDASBIF"])
                .where("P.CODIGOMONEDA = :id", { id: monedaId })
                .getRawMany();
            this.paridadDTO.result = resultado;            
        } catch (err) {
            this.paridadDTO.error = err.message;
        }
        return this.paridadDTO;
    }


    async getListaParidades(): Promise<ParidadDTO> {

        try {
            const paridad =  await getRepository(Paridad).createQueryBuilder("P")
                .select(["P.PARIDAD", "P.CODIGOMONEDA", "P.TIPOPARIDAD", "P.DESCRIPCION", "P.DECIMALES", "P.CODIGOMONEDASBIF"])
                .getRawMany();
            this.paridadDTO.result = paridad;
        } catch (err) {
            this.paridadDTO.error = err.message;
        }
        return this.paridadDTO;

    }

}