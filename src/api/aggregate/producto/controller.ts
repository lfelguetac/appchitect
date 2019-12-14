import { Request, Response } from "express";
import { MonedaDomain } from "../../../domain/moneda/services";
import { ParidadDomain } from "../../../domain/paridad/services";
import { TipotasaDomain } from "../../../domain/tipotasa/services";
import { ClasificacionSbifDomain } from "../../../domain/clasificacionsbif/services";
import { ProdutoAggregate } from "./model";
import { HttpStatusCode } from "../../common/constants";


export class RestController {

    static async getProductoAggregate(req: Request, res: Response) {

        const monedaDomain = new MonedaDomain();
        const paridadDomain = new ParidadDomain();
        const tipotasaDomain = new TipotasaDomain();
        const clasificacionDomain = new ClasificacionSbifDomain();

        const produtoAggDto: ProdutoAggregate = new ProdutoAggregate();
        try {

            const dataRow = await Promise.all([ monedaDomain.getListaMonedas(), 
                                                paridadDomain.getListaParidades(), 
                                                tipotasaDomain.getTipoTasa(), 
                                                clasificacionDomain.getClasificacionSbif() 
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