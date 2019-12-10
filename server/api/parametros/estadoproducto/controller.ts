import { Response, Request } from "express";


const getEstadoProducto = (req: Request, res: Response) => {

    const estados = [
        {codigoEstado: 1, descripcionEstado: 'estado 1'},
        {codigoEstado: 2, descripcionEstado: 'estado 2'},
        {codigoEstado: 3, descripcionEstado: 'estado 3'}
    ]
    res.status(200).send(estados);
}


export const metodos = {
    getEstadoProducto
}
