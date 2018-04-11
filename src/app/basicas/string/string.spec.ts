import { mensaje } from './string';


describe('Pruebas de Strings', () => {

    it('Debe de regresar un string', () => {
        const resp = mensaje('Majo');
        expect(typeof resp).toBe('string');
    });

    it('Debe de retornar un saludo con el nombre enviado', () => {
        const nombre = 'Majo';
        const resp = mensaje(nombre);
        expect( resp).toContain(nombre);
    });
});

