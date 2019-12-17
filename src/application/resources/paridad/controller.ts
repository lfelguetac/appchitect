import { Response, Request } from "express";
import { esNumero } from "../../common/utils";
import { HttpStatusCode } from "../../common/constants";
import { ParidadServices } from "../../../domain/paridad/services";
import { ParidadDTO } from "../../../domain/paridad/model";
import { ParidadContract } from "../../../domain/paridad/contract";
import logger = require("../../../infrastructure/config/logger");


export class RestController{

    private paridadServices: ParidadContract;
    constructor(){
        this.paridadServices = new ParidadServices();
    }
    
    getParidad = async(_req: Request, res: Response) => {
        const paridadDto = new ParidadDTO();
        try {
            
            paridadDto.result = await this.paridadServices.obtenerListaDeParidades();

            res.status(HttpStatusCode.OK).send(paridadDto);
        } catch (error) {
            paridadDto.error = error.message;
            logger.error(error.message);
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(paridadDto);  
        }
    
    }
    
    getParidadMoneda = async (req: Request, res: Response) => {
        const paridadDto = new ParidadDTO();
        try {
            if (!esNumero(req.params.id)) throw new Error("Parametro id no puede ser string");
            const monedaId = parseInt(req.params.idMoneda);
            paridadDto.result =  await this.paridadServices.obtenerParidadMoneda(monedaId);
            res.status(HttpStatusCode.OK).send(paridadDto);
            
        } catch (error) {
            paridadDto.error = error.message;
            logger.error(error.message);
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(paridadDto);  
        }
    }
      


}
