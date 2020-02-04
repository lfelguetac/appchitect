import { FlorContract } from '../src/domain/flor/flor.contract';
import { FlorServices } from '../src/domain/flor/flor.services';
import { createConnection, getConnection } from 'typeorm';
import { Flor } from '../src/infrastructure/persistence/entity/flor.entity';


describe("operaciones con flores", () => {

    it ('consulta toda la data', async () => {
        await createConnection();

        const monedaServices: FlorContract = new FlorServices();
        const listaMonedas: Flor[] = await monedaServices.obtenerListaFlores();
        expect(Array.isArray(listaMonedas)).toBe(true);
    });


    it ('consulta flor especifica', async () => {
        const monedaServices: FlorContract = new FlorServices();
        const listaMonedas: Flor = await monedaServices.obtenerFlorEspecifica(999);
        expect(listaMonedas).toBeUndefined();
    });

    it ('verifica que haya una conexion de typeorm activa', async () => {
        expect((getConnection().isConnected)).toBe(true);
    });


});


