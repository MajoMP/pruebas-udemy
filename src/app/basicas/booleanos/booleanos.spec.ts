import { usuarioLogado } from './booleanos';

describe('Pruebas de booleanos', () => {

    it('Debe de retornar true', () => {
        const resp = usuarioLogado();
        expect(resp).toBeTruthy();
    });

});
