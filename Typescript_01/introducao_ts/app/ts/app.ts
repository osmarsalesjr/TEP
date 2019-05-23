let nome : string = "Type Script"
console.log("Hello, " + nome);


///EXERCICIOS

//QUESTAO 1

console.log("------------------------ Testes da 1ª Questão:");

//LETRA A - Nao compila

console.log("Testes letra A: não compila");
/*
let numero = 10;
numero = "Osmar"
*/

//LETRA B
let anything: any = 10;
console.log(`Teste letra B: primeiro valor ${anything}`);

anything = 2;
console.log(`Teste letra B: segundo valor ${anything}`);

//LETRA C
let numero: number = 10;
console.log(`Teste letra C: primeiro valor ${numero}`);

numero = 2;
console.log(`Teste letra B: segundo valor ${numero}`);





///QUESTAO 2

function soma(x:number, y?: any): number {
    return x + y;
}

//LETRA A
console.log("------------------------ Testes da 2ª Questão:");
console.log("Resultado letra A: " + soma(1, 2));

//LETRA B
console.log("Resultado letra B: " + soma(1, "2"));

//LETRA C
console.log("Resultado letra C: " + soma(1));



///QUESTAO 3
console.log("------------------------ Testes da 3ª Questão:");

enum Estados{PI, CE, MA, PE, MG, MS};

//LETRA A
console.log("Resultados da letra A:");
for (let i: number = 0; i < 6; i++) {
    console.log("Estado: " + Estados[i]);
}

console.log("Resultados da letra B:");
for (let i: number = 0; i < 6; i++) {
    console.log("Indice: " + Estados[i].indexOf + " | Estado: " + Estados[i]);
}



///QUESTAO 5
console.log("------------------------ Testes da 5ª Questão:");

function exibir(...caracters: string[]) {
    console.log(caracters);
}

exibir();
exibir("O");
exibir("O", "S");
exibir("O", "S", "M");
exibir("O", "S", "M", "A");
exibir("O", "S", "M", "A", "R");



///QUESTAO 6
console.log("------------------------ Testes da 6ª Questão:");

var ola = () => "Ola";
console.log(ola());


///QUESTAO 7
console.log("------------------------ Testes da 7ª Questão:");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log("Lista: " + array);

const numeros_pares = array.filter(x => x % 2 == 0);
console.log("Pares: " + numeros_pares);



///QUESTAO 8

console.log("------------------------ Testes da 8ª Questão:");
class MeuNumero {

    constructor(readonly _numero: number){}

    
    get numero(){
        return this._numero;
    }
    

    getInteiro(): number {
        return Math.floor(this._numero);
    }

    getDecimal(): number{
        return this._numero - Math.floor(this._numero);
    }
}

let meu_numero: MeuNumero;

meu_numero = new MeuNumero(10.0546);
console.log("Resultado da letra A: " + meu_numero.numero);
console.log("Resultado da letra B: " + meu_numero.getInteiro());
console.log("Resultado da letra C: " + meu_numero.getDecimal());


///QUESTAO 9

console.log("------------------------ Testes da 9ª Questão:");
class Transacao{
    readonly _valor;
    readonly _desconto;

    constructor(valor: number, desconto: number){
        this._valor = valor;
        this._desconto = desconto;
    }
    
    get valor(){
        return this._valor;
    }

    get desconto(){
        return this._desconto;
    }

    calcularDesconto(): number{
        return this._valor * ((1 - this._desconto) / 100);
    }
}


let transacao: Transacao;
transacao = new Transacao(10, 5);

console.log("Resultado da letra A: Valor -> " + transacao.valor);
console.log("Resultado da letra A: Desconto -> " + transacao.desconto);
console.log("Resultado da letra B: Desconto aplicado ao Valor -> " + transacao.calcularDesconto());


///QUESTAO 10

interface Iterable<T>{
    
    next(item: T): T;
    isFirst(item: T): boolean;
    isLast(item: T): boolean;
    goToTheFirst(): T[];
    goToTheLast(): T[];
}


class ArrayCollection<T> implements Iterable<T>{

    private _collection: Array<T> = [];

    next(item: T): T {
        let indexOf: number = this._collection.indexOf(item);
        return this._collection[indexOf + 1];
    }
    
    isFirst(item: T): boolean {
        return this._collection.indexOf(item) == 0;
    }

    isLast(item: T): boolean {
        return this._collection.indexOf(item) == (this._collection.length - 1);
    }

    goToTheFirst(): T[] {
        throw new Error("Method not implemented.");
    }
    goToTheLast(): T[] {
        throw new Error("Method not implemented.");
    }
}
