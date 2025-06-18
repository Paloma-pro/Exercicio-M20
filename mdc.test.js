const { mdc } = require ('./mdc')

describe('Função MDC', () => {
    it('Máximo divisor comum (MDC) de 48 e 18', () => {
        expect(mdc(48,18)).toBe(6)
    });
});