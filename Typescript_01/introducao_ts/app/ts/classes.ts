
class Alo {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    //constructor(public nome: string){} Nao precisa declarar atributo nome acima

    dizerAlo(): void{
        console.log(`Ola, ${this.nome}`);
    }
}

let a = new Alo('Osmá');

a.dizerAlo();




class Post {
    constructor(private _text: String){}

    get text(){
        return this._text;
    }

    set text(text: String){
        this._text = text;
    }
}

let p = new Post('Typing...');

console.log(p.text);

p.text = 'Done!'

console.log(p.text);


interface Indexable{
    hashtags: String[];

    addHashtag(hashtag: String);
}


class AdvancedPost extends Post implements Indexable {
    hashtags: String[];
    
    addHashtag(hashtag: String) {
        this.hashtags.push(hashtag);
    }
    
    private _likes: number = 0;
    
    like() {
        this._likes++;
    }

    get likes(){ return this._likes; }
}


let ap = new AdvancedPost('New post...');
ap.like();
console.log(ap.likes);

ap.like();
console.log(ap.likes);



class Stack<T> {
    private _data: T[] = [];

    push(item: T){ this._data.push(item); }
    pop(){return this._data.pop()}

    get data(){ return this._data; }
}


let stack = new Stack<number>();
stack.push(1);

console.log(stack.data);
