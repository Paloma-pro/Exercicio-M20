const { somaMultiplos } = require ('./soma')

describe('Função de soma', () => {
    it('Soma de multiplos de 5 e 7 abaixo de 20 e 1000', () => {
        expect(somaMultiplos(20)).toBe(51)
    });

    it('Soma de multiplos de 5 e 7 abaixo de 1000', () => {
        expect(somaMultiplos(1000)).toBe(156361)
    });
});
