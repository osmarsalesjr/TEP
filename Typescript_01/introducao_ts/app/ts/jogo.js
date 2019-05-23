"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personagens_1 = require("./personagens");
var Jogo = (function () {
    function Jogo() {
        this._personagens = [];
    }
    Jogo.prototype.incluir = function (p) {
        if (this.consultar(p.id) != null && this._personagens.length != 0) {
            throw new Error("Erro, o id ja existe!");
        }
        if (p.energia <= 0 || p.energia > 100) {
            throw new Error("Erro, valor de energia precisa estar entre 1 e 100.");
        }
        if (p instanceof personagens_1.Soldado || p instanceof personagens_1.Cavaleiro) {
            if (p.forca_de_ataque < 0 || p.forca_de_ataque > 10) {
                throw new Error("Erro, a forca de ataque precisa estar entre 0 e 10.");
            }
        }
        this._personagens.push(p);
    };
    Jogo.prototype.consultar = function (id) {
        var p = null;
        for (var _i = 0, _a = this._personagens; _i < _a.length; _i++) {
            var personagem = _a[_i];
            if (personagem.id == id) {
                p = personagem;
                break;
            }
        }
        return p;
    };
    Jogo.prototype.atacar = function (id1, id2) {
        var p1 = this.consultar(id1);
        var p2 = this.consultar(id2);
        if (p1 == null || p2 == null) {
            throw new Error("Erro, personagem(ns) não existe(m).");
        }
        if (id1 == id2) {
            throw new Error("Erro, personagem não pode atacar a si mesmo.");
        }
        if (p1 instanceof personagens_1.Personagem) {
            throw new Error("Erro, apenas soldados e cavaleiros podem realizar ataques.");
        }
        p1.atacar(p2);
    };
    Jogo.prototype.avaliarBatalha = function () {
        for (var _i = 0, _a = this._personagens; _i < _a.length; _i++) {
            var personagem = _a[_i];
            console.log(personagem.toString());
        }
    };
    return Jogo;
}());
exports.Jogo = Jogo;
//# sourceMappingURL=jogo.js.map