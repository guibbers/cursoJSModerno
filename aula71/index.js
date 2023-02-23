// defineProperty - defineProperties

function Produto(name, price, stock) {
       
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        value: stock,
        writable: false,
        configurable: false
    })

    Object.defineProperties(this, {
        name: {enumerable: true, value: name, writable: true, configurable: true},
        price: {enumerable: true, value: price, writable: true, configurable: true}
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)