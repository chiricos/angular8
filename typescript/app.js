"use strict";
function saludar(nombre) {
    console.log('hola' + nombre);
}
saludar('edward');
var mivariable = "ejemplo";
var otra = false;
var ejemplo = 'otro'; //
var otro1 = false;
var numLivesForCat = 9;
var nombre = "juan";
var apellido = "perez";
var edad = 35;
var texto = nombre + ' ' + apellido + ' (' + edad + ')';
var texto1 = nombre + " " + apellido + " (" + edad * 2 + ")";
function getNombre() {
    return 'Manuel';
}
var texto2 = getNombre() + "\n" + edad * 2 + "\n'hola es una prueba'\n";
var es_verdad = false;
var minumero = 123;
var hoy = new Date();
var arreglo = ['123', '423'];
var arregloNumero = [123, 423];
var carro = {
    cantidadRuedas: 4,
    marca: 'audi',
    esnuevo: true,
};
function getNombreCarro(varCarro) {
    console.log(carro.marca);
}
var miFuncion = function (nombre) {
    return nombre;
};
miFuncion('juan');
//funciones flecha
var miFuncionNombre = function (nombre) { return nombre; };
var miFuncionF = function (nombre) {
    nombre.toLowerCase();
    var resultado = "Hola " + nombre;
    return resultado;
};
var minombre = miFuncionF('pedro');
