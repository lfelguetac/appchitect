import { getRepository, EntityRepository } from "typeorm";
import { Paridad } from "../entity/paridad";
import { ParidadRepoContract } from "../interfaces/paridad";

@EntityRepository(Paridad)
export class ParidadRepository implements ParidadRepoContract {

    async getParidadMoneda(monedaId : number): Promise<Paridad> {
        try {
            const resultado =  await getRepository(Paridad).createQueryBuilder("P")
                .select(["P.PARIDAD", "P.CODIGOMONEDA", "P.TIPOPARIDAD", "P.DESCRIPCION", "P.DECIMALES", "P.CODIGOMONEDASBIF"])
                .where("P.CODIGOMONEDA = :id", { id: monedaId })
                .getRawOne();

            return resultado;         
        } catch (err) {
            throw new Error(err.message);
        }

    }


    async getListaParidades(): Promise<Paridad[]> {

        try {
            const paridad =  await getRepository(Paridad).createQueryBuilder("P")
                .select(["P.PARIDAD", "P.CODIGOMONEDA", "P.TIPOPARIDAD", "P.DESCRIPCION", "P.DECIMALES", "P.CODIGOMONEDASBIF"])
                .getRawMany();
            
            return paridad;
        } catch (err) {
            throw new Error(err.message);
        }

    }

}