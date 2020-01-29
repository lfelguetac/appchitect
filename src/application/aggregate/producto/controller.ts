import { Request, Response } from "express";
import { MonedaServices } from "../../../domain/moneda/services";
import { ProdutoAggregate } from "./model";
import { CodigoHttp } from "../../common/constants";
import { MonedaContract } from "../../../domain/moneda/contract";

import { keysToLowerCase } from "../../common/utils";


export class RestController {
    
    static async getProductoAggregate(_req: Request, res: Response) {
        
        const monedaServices: MonedaContract = new MonedaServices();
        
        const produtoAggDto: ProdutoAggregate = new ProdutoAggregate();
        try {

            const dataRow = await Promise.all([ monedaServices.obtenerListaDeMonedas()
                                            ]);
            
            produtoAggDto.moneda = keysToLowerCase(dataRow[0]);
 

            res.status(CodigoHttp.OK).send(produtoAggDto);

        } catch (error) {
            produtoAggDto.error = error.message;
            res.status(CodigoHttp.INTERNAL_SERVER_ERROR).send(produtoAggDto);
        }

    }


}