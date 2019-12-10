import { Response, Request } from "express";
import { TipoTasaRepository } from "./store";
import { errorFormated } from "../../../common/utils";
import { getCustomRepository } from "typeorm";
import { HttpStatusCode } from "../../../common/constants";


export class RestController{
    
    constructor(){ }
    
    static getTipoTasa = async(req: Request, res: Response) => {
        try {

            const listadoTipoTasa = await getCustomRepository(TipoTasaRepository).getTipoTasa();
            res.status(HttpStatusCode.OK).send(listadoTipoTasa);
            
        } catch (error) {
            
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(errorFormated(error));             
        }
        
    }
   
}
