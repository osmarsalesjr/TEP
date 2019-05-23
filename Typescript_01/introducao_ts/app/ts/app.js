var nome = "Type Script";
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
var anything = 10;
console.log("Teste letra B: primeiro valor " + anything);
anything = 2;
console.log("Teste letra B: segundo valor " + anything);
//LETRA C
var numero = 10;
console.log("Teste letra C: primeiro valor " + numero);
numero = 2;
console.log("Teste letra B: segundo valor " + numero);
///QUESTAO 2
function soma(x, y) {
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
var Estados;
(function (Estados) {
    Estados[Estados["PI"] = 0] = "PI";
    Estados[Estados["CE"] = 1] = "CE";
    Estados[Estados["MA"] = 2] = "MA";
    Estados[Estados["PE"] = 3] = "PE";
    Estados[Estados["MG"] = 4] = "MG";
    Estados[Estados["MS"] = 5] = "MS";
})(Estados || (Estados = {}));
;
//LETRA A
console.log("Resultados da letra A:");
for (var i = 0; i < 6; i++) {
    console.log("Estado: " + Estados[i]);
}
console.log("Resultados da letra B:");
for (var i = 0; i < 6; i++) {
    console.log("Indice: " + Estados[i].indexOf + " | Estado: " + Estados[i]);
}
///QUESTAO 5
console.log("------------------------ Testes da 5ª Questão:");
function exibir() {
    var caracters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        caracters[_i] = arguments[_i];
    }
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
var ola = function () { return "Ola"; };
console.log(ola());
///QUESTAO 7
console.log("------------------------ Testes da 7ª Questão:");
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log("Lista: " + array);
var numeros_pares = array.filter(function (x) { return x % 2 == 0; });
console.log("Pares: " + numeros_pares);
///QUESTAO 8
console.log("------------------------ Testes da 8ª Questão:");
var MeuNumero = (function () {
    function MeuNumero(_numero) {
        this._numero = _numero;
    }
    Object.defineProperty(MeuNumero.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: true,
        configurable: true
    });
    MeuNumero.prototype.getInteiro = function () {
        return Math.floor(this._numero);
    };
    MeuNumero.prototype.getDecimal = function () {
        return this._numero - Math.floor(this._numero);
    };
    return MeuNumero;
}());
var meu_numero;
meu_numero = new MeuNumero(10.0546);
console.log("Resultado da letra A: " + meu_numero.numero);
console.log("Resultado da letra B: " + meu_numero.getInteiro());
console.log("Resultado da letra C: " + meu_numero.getDecimal());
///QUESTAO 9
console.log("------------------------ Testes da 9ª Questão:");
var Transacao = (function () {
    function Transacao(valor, desconto) {
        this._valor = valor;
        this._desconto = desconto;
    }
    Object.defineProperty(Transacao.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transacao.prototype, "desconto", {
        get: function () {
            return this._desconto;
        },
        enumerable: true,
        configurable: true
    });
    Transacao.prototype.calcularDesconto = function () {
        return this._valor * ((1 - this._desconto) / 100);
    };
    return Transacao;
}());
var transacao;
transacao = new Transacao(10, 5);
console.log("Resultado da letra A: Valor -> " + transacao.valor);
console.log("Resultado da letra A: Desconto -> " + transacao.desconto);
console.log("Resultado da letra B: Desconto aplicado ao Valor -> " + transacao.calcularDesconto());
var ArrayCollection = (function () {
    function ArrayCollection() {
        this._collection = [];
    }
    ArrayCollection.prototype.next = function (item) {
        var indexOf = this._collection.indexOf(item);
        return this._collection[indexOf + 1];
    };
    ArrayCollection.prototype.isFirst = function (item) {
        return this._collection.indexOf(item) == 0;
    };
    ArrayCollection.prototype.isLast = function (item) {
        return this._collection.indexOf(item) == (this._collection.length - 1);
    };
    ArrayCollection.prototype.goToTheFirst = function () {
        throw new Error("Method not implemented.");
    };
    ArrayCollection.prototype.goToTheLast = function () {
        throw new Error("Method not implemented.");
    };
    return ArrayCollection;
}());
//# sourceMappingURL=app.js.map