

class Personagem {
    private _id: number;
    private _nome: String;
    private _energia: number;

    constructor(id: number, nome: String, energia: number){
        this._id = id;
        this._nome = nome;
        this._energia = energia;
    }

    public toString = (): String => {
        let vivo: String;

        if (this.estaVivo){
            vivo = "Sim";
        } else {
            vivo = "Não";
        }

        let info: String = `ID: ${this._id}\nNome: ${this._nome}\nEnergia: ${this._energia}\nEsta Vivo? ${vivo}`;
        return info;
    }

    get id(){
        return this._id;
    }

    get energia(){
        return this._energia;
    }

    estaVivo(): boolean {
        if (this._energia != 0){
            return true;
        }
        return false;
    }

    defenderAtaque(valor: number){
        if (valor >= this._energia) {
            this._energia = 0;
        } else {
            this._energia -= valor;
        }
    }
}


class Soldado extends Personagem {
    private _forca_de_ataque: number;

    constructor(id: number, nome: String, energia: number, forca_de_ataque: number){
        super(id, nome, energia);
        this._forca_de_ataque = forca_de_ataque;
    }

    get forca_de_ataque(){
        return this._forca_de_ataque;
    }

    atacar(p: Personagem){
        p.defenderAtaque(this._forca_de_ataque);
    }

    defenderAtaque(valor: number){
        super.defenderAtaque(valor/2);
    }
}


class Cavaleiro extends Soldado {

    constructor(id: number, nome: String, energia: number, forca_de_ataque: number){
        super(id, nome, energia, forca_de_ataque);
    }
    
    atacar(p: Personagem){
        p.defenderAtaque(this.forca_de_ataque * 2);
    }

    defenderAtaque(valor: number){
        super.defenderAtaque(valor/3);
    }
}




export{Personagem, Soldado, Cavaleiro}
