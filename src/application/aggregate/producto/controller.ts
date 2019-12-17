import { Request, Response } from "express";
import { MonedaServices } from "../../../domain/moneda/services";
import { ParidadServices } from "../../../domain/paridad/services";
import { TipotasaServices } from "../../../domain/tipotasa/services";
import { ClasificacionSbifServices } from "../../../domain/clasificacionsbif/services";
import { ProdutoAggregate } from "./model";
import { HttpStatusCode } from "../../common/constants";


export class RestController {
    
    static async getProductoAggregate(_req: Request, res: Response) {
        
        const monedaServices = new MonedaServices();
        const paridadServices = new ParidadServices();
        const tipotasaServices = new TipotasaServices();
        const clasificacionDomain = new ClasificacionSbifServices();
        
        const produtoAggDto: ProdutoAggregate = new ProdutoAggregate();
        try {

            const dataRow = await Promise.all([ monedaServices.obtenerListaDeMonedas(), 
                                                paridadServices.obtenerListaDeParidades(), 
                                                tipotasaServices.obtenerTipoTasa(), 
                                                clasificacionDomain.obtenerClasificacionSbif() 
                                            ]);
            
            produtoAggDto.moneda = dataRow[0];
            produtoAggDto.paridad = dataRow[1];
            produtoAggDto.tipotasa = dataRow[2];
            produtoAggDto.clasificacionsbif = dataRow[3];

            res.status(HttpStatusCode.OK).send(produtoAggDto);

        } catch (error) {
            produtoAggDto.error = error.message;
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(produtoAggDto);
        }

    }


}