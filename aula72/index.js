function Product(name, price, stock) {
    this.name = name,
    this.price = price,
    
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: true,
        get: function() {
            return stock;
        },
        set: function(val){
            if (typeof val !== 'number') {
                console.error('Bad value')
            } else {
                stock = val
            }
        }
    });
}

const p1 = new Product('Camiseta', 20, 3);
p1.stock = 500
console.log(p1.stock)