import { EntityRepository, getRepository } from "typeorm";
import { Moneda } from "./entity";
import { MonedaDTO } from "../../../domain/moneda/model";

@EntityRepository(Moneda)
export class MonedaRepository{
     
    monedaDto: MonedaDTO;
    constructor(){
        this.monedaDto = new MonedaDTO();
    }


    async traeMonedas(): Promise<MonedaDTO> {
        
        try {
            const resultado: Moneda[] =  await getRepository(Moneda).createQueryBuilder("M")
                .select( ["M.CODIGO", "M.DESCRIPCION"] )
                .getRawMany();

            this.monedaDto.result = typeof(resultado) === 'undefined'? null : resultado;
        } catch (err) {
            this.monedaDto.error = err.message;
        }
        return this.monedaDto;
    }


    async getMonedaById(monedaId: number): Promise<MonedaDTO> {

        try {
            const resultado: Moneda =  await getRepository(Moneda).createQueryBuilder("M")
                .select( ["M.CODIGO", "M.DESCRIPCION"] )
                .where("M.CODIGO = :codigo", { codigo: monedaId })
                .getRawOne();

            this.monedaDto.result = typeof(resultado) === 'undefined'? null : resultado;

        } catch (err) {  
            this.monedaDto.error = err.message;
        }
        return this.monedaDto;
    }

 
}

