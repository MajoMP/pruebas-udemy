import { Jugador2 } from './jugador2';

describe('Jugador 2 Emit', () => {

    let jugador: Jugador2;

    beforeEach(() => {
        jugador = new Jugador2();
    });

    it('Debe emitir evento cuando recibe golpe', () => {
        let nuevoHP = 0;

        jugador.hpCambia.subscribe( (hp) => {
            nuevoHP = hp;
        });
        jugador.recibeGolpe(1000);
        expect(nuevoHP).toBe(0);
    });

    it('Debe emitir evento cuando recibe golpe y sobrevivir si es menor de 100', () => {
        let nuevoHP = 0;

        jugador.hpCambia.subscribe( (hp) => {
            nuevoHP = hp;
        });
        jugador.recibeGolpe(50);
        expect(nuevoHP).toBe(50);
    });

});

