import { esNumero, keysToLowerCase } from "../../common/utils";
import { FlorServices } from "../../../domain/flor/flor.services";
import { CodigoHttp, PARAMETER_NO_NUMBER } from "../../common/constants";
import { FlorDTO } from "../../../domain/flor/flor.model";
import { FlorContract } from "../../../domain/flor/flor.contract";
import logger = require("../../../infrastructure/config/logger");
import { FlorRepository } from "../../../infrastructure/persistence/repository/flor.repository";

export class FlorController {

  private florServices: FlorContract;
  constructor(){ this.florServices = new FlorServices(new FlorRepository()); }

  getFlorById = async (req, res) => {
    const florDto = new FlorDTO();
    try {
      if (!esNumero(req.params.id)) throw new Error(PARAMETER_NO_NUMBER);
      const florId = parseInt(req.params.id);
      florDto.result = await this.florServices.obtenerFlorEspecifica(florId);
      res.status(CodigoHttp.OK).send(florDto);
    } catch (error) {
      res.status(CodigoHttp.INTERNAL_SERVER_ERROR).send(error.message);
    }
    
  }



  getFlores = async (_req, res) => {

    const florDto = new FlorDTO();
    try {
      const jsonOracle = await this.florServices.obtenerListaFlores();
      florDto.result = keysToLowerCase(jsonOracle);
      res.status(CodigoHttp.OK).send(florDto);

    } catch (e) {
      florDto.error = e.message;      
      logger.error(e.message);
      res.status(CodigoHttp.INTERNAL_SERVER_ERROR).send(florDto);
    }

  }
   




}

