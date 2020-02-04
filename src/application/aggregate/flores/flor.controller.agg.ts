import { Request, Response } from "express";
import { FlorServices } from "../../../domain/flor/flor.services";
import { FlorAggregate } from "./flor.model.agg";
import { CodigoHttp } from "../../common/constants";
import { FlorContract } from "../../../domain/flor/flor.contract";

import { keysToLowerCase } from "../../common/utils";


export class FlorControllerAgg {
    
    static async getFloresAggregate(_req: Request, res: Response) {
        
        const florServices: FlorContract = new FlorServices();

        const florAggDto: FlorAggregate = new FlorAggregate();
        try {

            const dataRow = await Promise.all([ 
                                                florServices.obtenerListaFlores()
                                            ]);
            
            florAggDto.flores = keysToLowerCase(dataRow[0]);
 

            res.status(CodigoHttp.OK).send(florAggDto);

        } catch (error) {
            florAggDto.error = error.message;
            res.status(CodigoHttp.INTERNAL_SERVER_ERROR).send(florAggDto);
        }

    }


}