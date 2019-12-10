import { Response, Request } from "express";
import { ParidadRepository } from "./store";
import { errorFormated, DTO, esNumero } from "../../../common/utils";
import { getCustomRepository } from "typeorm";
import { HttpStatusCode } from "../../../common/constants";

export class RestController{

    constructor(){}
    
    static getParidadMoneda = async (req: Request, res: Response) => {
    
        try {
            if (!esNumero(req.params.id)) throw new Error("Parametro id no puede ser string");
            const monedaId = parseInt(req.params.idMoneda);
            const paridad: DTO = await getCustomRepository(ParidadRepository).getParidadMoneda(monedaId);
            res.status(HttpStatusCode.OK).send(paridad);
            
        } catch (error) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(errorFormated(error));  
        }
    }
      
    
    static getParidad = async(req: Request, res: Response) => {
        try {
            const paridad: DTO = await getCustomRepository(ParidadRepository).getParidad();
            res.status(HttpStatusCode.OK).send(paridad);
            
        } catch (error) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(errorFormated(error));  
        }
    
    }


}
