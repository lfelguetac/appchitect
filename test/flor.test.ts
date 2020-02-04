import { FlorContract } from '../src/domain/flor/flor.contract';
import { FlorServices } from '../src/domain/flor/flor.services';
import { createConnection, getConnection } from 'typeorm';
import { Flor } from '../src/infrastructure/persistence/entity/flor.entity';


describe("probamos recurso moneda", () => {

    it ('Valida metodo obtenerMonedaEspecifica() devuelve objeto data - metodo real', async () => {
        await createConnection();

        const monedaServices: FlorContract = new FlorServices();
        const listaMonedas: Flor[] = await monedaServices.obtenerListaFlores();
        expect(Array.isArray(listaMonedas)).toBe(true);
    });


    it ('Valida metodo obtenerListaDeMonedas() devuelve un registro - metodo real', async () => {
        const monedaServices: FlorContract = new FlorServices();
        const listaMonedas: Flor = await monedaServices.obtenerFlorEspecifica(999);
        expect(Array.isArray(listaMonedas)).toBe(false);
    });


    it ('verifica que haya una conexion de typeorm activa', async () => {
        expect((getConnection().isConnected)).toBe(true);
    });


});


