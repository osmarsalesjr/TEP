/*
let a = 10;
console.log(typeof(a));

let b: number = 10;
console.log(b);

let c;
console.log(c);


let isDone: boolean = false;
isDone = true;

let inteiro: number = 6;

let real: number = 4.8;

let hex: number = 0xf0a0d;

let binario: number = 10110101;

let octal: number = 0o344;

let nome: string = "Osmar Junior"
let idade: number = 23;

let frase: string = `Meu nome é ${nome}. Completarei ${idade + 1} anos mes que vem.`

console.log(frase)

*/
/*
let numeros: number[] = [1, 2, 3];

let numeross: Array<number> = [1, 2, 3];



for (let i: number = 0; i < 3; i++){
    console.log(i);
}
console.log(i); //undefined


for (var i: number = 0; i < 3; i++){
    console.log(i);
}
console.log(i); //3


for (let numero of numeros){
    console.log(numero);
}

*/
/*
function dobrar(numero:number): number {
    return 2 * numero;
}

console.log(dobrar(4));


let tpc = function triplica(numero: number): number{
    return 3 * numero;
}

console.log(typeof(tpc));

console.log(tpc(8));

function soma(...numeros: number[]): number{
    let somatorio: number = 0;
    for (let numero of numeros) {
        somatorio = somatorio + numero;
        
    }
    return somatorio;
}


console.log(soma(1, 2, 3, 4));
console.log(soma());


//arrow function
let sum = (numero : number) => 2 * numero;
let trip = (numero : number) => 3 * numero;

console.log(sum(10));
console.log(trip(10));

//arrow function iterativas

let numeros: number[] = [1, 2, 3 , 4];
console.log(numeros);

//Para cada elemento faça...
numeros = numeros.map(x => 2 * x);
console.log(numeros);


*/
//QUESTAO 1
//Letra A nao compila
/*
let a = 10;
a = "2";
*/
//letra b
var b = 10;
b = 2;
//letra c
var c = 10;
c = 2;
//QUESTAO 2
function soma(x, y) {
    return x + y;
}
//letra a
console.log(soma(1, 2));
//letra b
console.log(soma(1, "2"));
console.log(typeof (soma(1, "2")));
//letra c
console.log(soma(1));
console.log(typeof (soma(1)));
//QUESTAO 3
var Estados;
(function (Estados) {
    Estados[Estados["PI"] = 0] = "PI";
    Estados[Estados["CE"] = 1] = "CE";
    Estados[Estados["MA"] = 2] = "MA";
})(Estados || (Estados = {}));
;
//letra a
for (var i = 0; i < 3; i++) {
    console.log(Estados[i]);
}
//letra b
//# sourceMappingURL=app.js.map