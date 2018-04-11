import { Jugador } from './clase';

describe('Pruebas de clase',  () => {
    let jugador: Jugador;

    beforeAll(() => {
       // console.warn('BeforeAll');
    });

    beforeEach(() => {
        // console.warn('BeforeEach');
        jugador = new Jugador();
    });

    afterAll(() => {
        // console.warn('AfterAll');
    });

    afterEach(() => {
        // console.warn('AfterEach');
    });

    it('Debe retornar 80 de hp, si recibe 20 de golpe', () => {
        const resp = jugador.recibeGolpe(20);
        expect(resp).toBe(80);
    });

    it('Debe retornar 50 de hp, si recibe 50 de golpe', () => {
        const resp = jugador.recibeGolpe(50);
        expect(resp).toBe(50);
    });

    it('Debe retornar 0 de hp, si recibe 100 de golpe o más', () => {
        const resp = jugador.recibeGolpe(100);
        expect(resp).toBe(0);
    });

});
