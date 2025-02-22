const p1= {
    name: "computador",
    price: 3000.0,
    quantity: 2,
}

const Product = function (name,price,quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.total = function(){
    return this.price * this.quantity
}

Product.prototype.add = function(amont) {
    this.quantity += amont;
}

Product.prototype.remove = function(amont) {
    if (this.quantity >= amont) {
        this.quantity -= amont;
    }
}

Product.prototype.label = function() {
    return "Dados: "+ this.name + ","+ this.price;
}

const p2 = new Product("monitor", 800.0, 10)

const p3 = new Product( "mouse", 50.0, 4 );