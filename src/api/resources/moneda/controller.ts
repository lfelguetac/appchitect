import { Response, Request } from "express";
import { errorFormated, esNumero } from "../../common/utils";
import { MonedaDomain } from "../../../domain/moneda/services";
import { HttpStatusCode } from "../../common/constants";
import { MonedaDTO } from "../../../domain/moneda/model";


export class RestController {
  
  constructor() {}

  static getMonedas = async (_req: Request, res: Response) => {

    try {
      const monedaDomain = new MonedaDomain();
      const monedas: MonedaDTO = await monedaDomain.getListaMonedas();
      res.status(HttpStatusCode.OK).send(monedas);

    } catch (e) {
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(errorFormated(e));  
    }

  }
   

  static getMonedaById = async (req: Request, res: Response) => {
    const monedaDomain = new MonedaDomain();
    try {
      if (!esNumero(req.params.id)) throw new Error("Parametro id no puede ser string");
      const monedaId = parseInt(req.params.id);
      const moneda: MonedaDTO = await monedaDomain.getMonedaById(monedaId);
      res.status(HttpStatusCode.OK).send(moneda);
    } catch ( e ) {      
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(errorFormated(e));
    }

  }


}

