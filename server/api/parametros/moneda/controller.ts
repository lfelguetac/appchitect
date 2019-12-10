import { getCustomRepository } from "typeorm";
import { Response, Request } from "express";
import { MonedaRepository } from "./store";
import { errorFormated, DTO, esNumero } from "../../../common/utils";
import { HttpStatusCode } from "../../../common/constants";


export class RestController {

  constructor(){ }

  static getMonedas = async (req: Request, res: Response) => {

    try {
      // console.log(getCustomRepository(MonedaRepository).getListaMonedas());
      
      const monedas: DTO = await getCustomRepository(MonedaRepository).getListaMonedas();
      res.status(HttpStatusCode.OK).send(monedas);
    } catch (e) {
      console.log("se fue a la b");
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(errorFormated(e));  
    }

  }
 

  static getMonedaById = async (req: Request, res: Response) => {
    
    try {

      if (!esNumero(req.params.id)) throw new Error("Parametro id no puede ser string");
      const monedaId = parseInt(req.params.id);
      const moneda: DTO = await getCustomRepository(MonedaRepository).getMonedaById(monedaId);
      res.status(HttpStatusCode.OK).send(moneda);
    } catch ( e ) {      
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(errorFormated(e));
    }

  }


}