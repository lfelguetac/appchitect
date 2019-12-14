import { ParidadDTO } from "./model";

export interface ParidadServices {

    getParidadMoneda(monedaId : number): Promise<ParidadDTO>

    getListaParidades(): Promise<ParidadDTO>;

}
