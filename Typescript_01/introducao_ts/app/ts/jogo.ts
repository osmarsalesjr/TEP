import {Personagem, Soldado, Cavaleiro} from "./personagens";

class Jogo {

    private _personagens: Array<Personagem>;

    constructor(){
        this._personagens = [];
    }

    incluir(p: Personagem){

        if (this.consultar(p.id) != null && this._personagens.length != 0){
            throw new Error("Erro, o id ja existe!");
        }

        if (p.energia <= 0 || p.energia > 100){
            throw new Error("Erro, valor de energia precisa estar entre 1 e 100.");
        }

        if (p instanceof Soldado || p instanceof Cavaleiro){
            if (p.forca_de_ataque < 0 || p.forca_de_ataque > 10){
                throw new Error("Erro, a forca de ataque precisa estar entre 0 e 10.");
            }
        }

        this._personagens.push(p);
    }

    consultar(id: number){
        let p = null;

        for (let personagem of this._personagens) {
            if (personagem.id == id){
                p = personagem;
                break;
            }
        }
        
        return p;
    }

    atacar(id1: number, id2: number){
        let p1 = this.consultar(id1);
        let p2 = this.consultar(id2);

        if (p1 == null || p2 == null){
            throw new Error("Erro, personagem(ns) não existe(m).");
        }

        if (id1 == id2){
            throw new Error("Erro, personagem não pode atacar a si mesmo.");
        }

        if (p1 instanceof Personagem){
            throw new Error("Erro, apenas soldados e cavaleiros podem realizar ataques.");
        }

        p1.atacar(p2);
    }

    avaliarBatalha(){
        for (let personagem of this._personagens){
            console.log(personagem.toString());
        }
    }
}




export { Jogo };