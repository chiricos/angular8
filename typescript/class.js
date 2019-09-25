"use strict";
var Carro = /** @class */ (function () {
    function Carro() {
        this.marca = 'audi';
        this.cantidadRuedas = 4;
        this.otro = 5;
    }
    Carro.prototype.getMarca = function () {
        return this.marca;
    };
    Carro.prototype.construirCarro = function (cantidad, marca, es_nuevo) {
        if (marca === void 0) { marca = 'marca1'; }
        if (es_nuevo !== undefined) {
            return "mi carro tiene " + cantidad + " ruedas y es de la marca " + marca + " y el estado es " + es_nuevo;
        }
        return "mi carro tiene " + cantidad + " ruedas y es de la marca " + marca;
    };
    return Carro;
}());
var carro1 = new Carro();
console.log(carro1.construirCarro(5, 'audi', 'nuevo'));
