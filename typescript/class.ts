class Carro {
	

	private marca:string;
	public cantidadRuedas:number;
	protected otro:number;

	constructor() {
		this.marca = 'audi';
		this.cantidadRuedas = 4;
		this.otro = 5;
	}

	public getMarca() {
		return this.marca;
	}

	public construirCarro(cantidad:number,marca:string = 'marca1', es_nuevo?:string){
		if(es_nuevo !== undefined){
			return `mi carro tiene ${cantidad} ruedas y es de la marca ${marca} y el estado es ${es_nuevo}`; 
		}
		return `mi carro tiene ${cantidad} ruedas y es de la marca ${marca}`; 
	}
}

let carro1:Carro = new Carro();

console.log(carro1.construirCarro(5,'audi','nuevo'));