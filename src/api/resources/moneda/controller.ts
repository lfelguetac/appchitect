import { Response, Request } from "express";
import { esNumero } from "../../common/utils";
import { MonedaDomain } from "../../../domain/moneda/services";
import { HttpStatusCode } from "../../common/constants";
import { MonedaDTO } from "../../../domain/moneda/model";


export class RestController {
  
  static getMonedas = async (_req: Request, res: Response) => {
    const monedaDto = new MonedaDTO();
    try {
      const monedaDomain = new MonedaDomain();
      monedaDto.result = await monedaDomain.getListaMonedas();
      res.status(HttpStatusCode.OK).send(monedaDto);

    } catch (e) {
      monedaDto.error = e.message;
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(monedaDto);
    }

  }
   

  static getMonedaById = async (req: Request, res: Response) => {

    const monedaDto = new MonedaDTO();
    try {
      const monedaDomain = new MonedaDomain();
      if (!esNumero(req.params.id)) throw new Error("Parametro id no puede ser string");
      const monedaId = parseInt(req.params.id);
      monedaDto.result = await monedaDomain.getMonedaById(monedaId);
      res.status(HttpStatusCode.OK).send(monedaDto);
    } catch ( e ) {
      monedaDto.error = e.message;
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(monedaDto);
    }

  }


}

