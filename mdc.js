function mdc(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// console.log(mdc(48, 18)) // Exemplo de valores

module.exports = { mdc }