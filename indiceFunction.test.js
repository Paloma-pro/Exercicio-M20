const { qtdd, primeiroElem, ultimoElem } = require ('./indiceFunction')

describe('Funções com arrays', () => {
    
    const arrayTest = [1, 2, 3, 4, 5];

    it('Retornar a quantidade de elementos no array', () => {
        expect(qtdd(arrayTest)).toBe(5)
    });

    it('Retornar o primeiro elemento do array', () => {
        expect(primeiroElem(arrayTest)).toBe(1)
    });

    it('Retornar o último elemento do array', () => {
        expect(ultimoElem(arrayTest)).toBe(5)
    });
});