function saludar(nombre:any){
	console.log('hola'+nombre)
}

saludar('edward');

var mivariable = "ejemplo";

var otra = false;

let ejemplo = 'otro'; //

let otro1 = false;

const numLivesForCat = 9;

let nombre:string = "juan";
let apellido:string = "perez";
let edad:number = 35;

let texto = nombre + ' ' + apellido + ' ('+edad+')';
let texto1 = `${nombre} ${apellido} (${edad*2})`;

function getNombre() {
	return 'Manuel';
}

let texto2 = `${getNombre()}
${edad*2}
'hola es una prueba'
`;

let es_verdad:boolean = false;
let minumero:number = 123;

let hoy:Date = new Date();

let arreglo:string[] = ['123','423'];
let arregloNumero:number[] = [123,423];

interface carroI{
	cantidadRuedas:number;
	marca:string;
	esnuevo:boolean;
}

let carro:carroI = {
	cantidadRuedas: 4,
	marca: 'audi',
	esnuevo: true,
};

function getNombreCarro(varCarro:carroI){
	console.log(carro.marca);
}

var miFuncion = function (nombre:string) {
	return nombre;
}

miFuncion('juan');


//funciones flecha
let miFuncionNombre = (nombre:string) => nombre;

let miFuncionF = (nombre:string) => {
	
	nombre.toLowerCase();
	let resultado:string = `Hola ${nombre}`;
	return resultado;
};

let minombre = miFuncionF('pedro');
