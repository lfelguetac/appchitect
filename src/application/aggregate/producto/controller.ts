import { Request, Response } from "express";
import { MonedaServices } from "../../../domain/moneda/services";
import { ParidadServices } from "../../../domain/paridad/services";
import { TipotasaServices } from "../../../domain/tipotasa/services";
import { ClasificacionSbifServices } from "../../../domain/clasificacionsbif/services";
import { ProdutoAggregate } from "./model";
import { HttpStatusCode } from "../../common/constants";
import { MonedaContract } from "../../../domain/moneda/contract";
import { ParidadContract } from "../../../domain/paridad/contract";
import { TipotasaContract } from "../../../domain/tipotasa/contract";
import { ClasificacionSbifContract } from "../../../domain/clasificacionsbif/contract";
import { keysToLowerCase } from "../../common/utils";


export class RestController {
    
    static async getProductoAggregate(_req: Request, res: Response) {
        
        const monedaServices: MonedaContract = new MonedaServices();
        const paridadServices: ParidadContract = new ParidadServices();
        const tipotasaServices: TipotasaContract = new TipotasaServices();
        const clasificacionDomain: ClasificacionSbifContract = new ClasificacionSbifServices();
        
        const produtoAggDto: ProdutoAggregate = new ProdutoAggregate();
        try {

            const dataRow = await Promise.all([ monedaServices.obtenerListaDeMonedas(), 
                                                paridadServices.obtenerListaDeParidades(), 
                                                tipotasaServices.obtenerTipoTasa(), 
                                                clasificacionDomain.obtenerClasificacionSbif() 
                                            ]);
            
            produtoAggDto.moneda = keysToLowerCase(dataRow[0]);
            produtoAggDto.paridad = keysToLowerCase(dataRow[1]);
            produtoAggDto.tipotasa = keysToLowerCase(dataRow[2]);
            produtoAggDto.clasificacionsbif = keysToLowerCase(dataRow[3]);

            res.status(HttpStatusCode.OK).send(produtoAggDto);

        } catch (error) {
            produtoAggDto.error = error.message;
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(produtoAggDto);
        }

    }


}