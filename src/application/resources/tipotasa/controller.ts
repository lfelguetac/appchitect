import { Response, Request } from "express";
import { HttpStatusCode } from "../../common/constants";
import { TipotasaServices } from "../../../domain/tipotasa/services";
import { TipoTasaDTO } from "../../../domain/tipotasa/model";
import { TipotasaContract } from "../../../domain/tipotasa/contract";
import logger = require("../../../infrastructure/config/logger");

export class RestController{
    
    private tipotasaServices: TipotasaContract;
    constructor(){ 
        this.tipotasaServices = new TipotasaServices();
    }
    
    getTipoTasa = async(_req: Request, res: Response) => {

        const tipotasaDto = new TipoTasaDTO();
        try {
            tipotasaDto.result = await this.tipotasaServices.obtenerTipoTasa();

            res.status(HttpStatusCode.OK).send(tipotasaDto);
        } catch (error) {
            tipotasaDto.error = error.message;
            logger.error(error.message);
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(tipotasaDto);             
        }
        
    }
   
}
