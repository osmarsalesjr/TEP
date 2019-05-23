"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem = (function () {
    function Personagem(id, nome, energia) {
        var _this = this;
        this.toString = function () {
            var vivo;
            if (_this.estaVivo) {
                vivo = "Sim";
            }
            else {
                vivo = "Não";
            }
            var info = "ID: " + _this._id + "\nNome: " + _this._nome + "\nEnergia: " + _this._energia + "\nEsta Vivo? " + vivo;
            return info;
        };
        this._id = id;
        this._nome = nome;
        this._energia = energia;
    }
    Object.defineProperty(Personagem.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "energia", {
        get: function () {
            return this._energia;
        },
        enumerable: true,
        configurable: true
    });
    Personagem.prototype.estaVivo = function () {
        if (this._energia != 0) {
            return true;
        }
        return false;
    };
    Personagem.prototype.defenderAtaque = function (valor) {
        if (valor >= this._energia) {
            this._energia = 0;
        }
        else {
            this._energia -= valor;
        }
    };
    return Personagem;
}());
exports.Personagem = Personagem;
var Soldado = (function (_super) {
    __extends(Soldado, _super);
    function Soldado(id, nome, energia, forca_de_ataque) {
        var _this = _super.call(this, id, nome, energia) || this;
        _this._forca_de_ataque = forca_de_ataque;
        return _this;
    }
    Object.defineProperty(Soldado.prototype, "forca_de_ataque", {
        get: function () {
            return this._forca_de_ataque;
        },
        enumerable: true,
        configurable: true
    });
    Soldado.prototype.atacar = function (p) {
        p.defenderAtaque(this._forca_de_ataque);
    };
    Soldado.prototype.defenderAtaque = function (valor) {
        _super.prototype.defenderAtaque.call(this, valor / 2);
    };
    return Soldado;
}(Personagem));
exports.Soldado = Soldado;
var Cavaleiro = (function (_super) {
    __extends(Cavaleiro, _super);
    function Cavaleiro(id, nome, energia, forca_de_ataque) {
        return _super.call(this, id, nome, energia, forca_de_ataque) || this;
    }
    Cavaleiro.prototype.atacar = function (p) {
        p.defenderAtaque(this.forca_de_ataque * 2);
    };
    Cavaleiro.prototype.defenderAtaque = function (valor) {
        _super.prototype.defenderAtaque.call(this, valor / 3);
    };
    return Cavaleiro;
}(Soldado));
exports.Cavaleiro = Cavaleiro;
//# sourceMappingURL=personagens.js.map