"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personagens_1 = require("./personagens");
var jogo_1 = require("./jogo");
var personagem_comum;
var soldado1;
var soldado2;
var cavaleiro;
var jogo = new jogo_1.Jogo();
personagem_comum = new personagens_1.Personagem(1, "Estagiario", 5);
soldado1 = new personagens_1.Soldado(2, "Soldado 1", 100, 10);
soldado2 = new personagens_1.Soldado(3, "Soldado 2", 80, 8);
cavaleiro = new personagens_1.Cavaleiro(4, "Cavaleiro 1", 97, 8);
jogo.incluir(personagem_comum);
jogo.incluir(soldado1);
jogo.incluir(soldado2);
jogo.incluir(cavaleiro);
jogo.avaliarBatalha();
//# sourceMappingURL=TestaJogo.js.map