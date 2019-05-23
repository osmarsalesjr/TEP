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
var Alo = (function () {
    function Alo(nome) {
        this.nome = nome;
    }
    //constructor(public nome: string){} Nao precisa declarar atributo nome acima
    Alo.prototype.dizerAlo = function () {
        console.log("Ola, " + this.nome);
    };
    return Alo;
}());
var a = new Alo('Osmá');
a.dizerAlo();
var Post = (function () {
    function Post(_text) {
        this._text = _text;
    }
    Object.defineProperty(Post.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
        },
        enumerable: true,
        configurable: true
    });
    return Post;
}());
var p = new Post('Typing...');
console.log(p.text);
p.text = 'Done!';
console.log(p.text);
var AdvancedPost = (function (_super) {
    __extends(AdvancedPost, _super);
    function AdvancedPost() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._likes = 0;
        return _this;
    }
    AdvancedPost.prototype.addHashtag = function (hashtag) {
        this.hashtags.push(hashtag);
    };
    AdvancedPost.prototype.like = function () {
        this._likes++;
    };
    Object.defineProperty(AdvancedPost.prototype, "likes", {
        get: function () { return this._likes; },
        enumerable: true,
        configurable: true
    });
    return AdvancedPost;
}(Post));
var ap = new AdvancedPost('New post...');
ap.like();
console.log(ap.likes);
ap.like();
console.log(ap.likes);
var Stack = (function () {
    function Stack() {
        this._data = [];
    }
    Stack.prototype.push = function (item) { this._data.push(item); };
    Stack.prototype.pop = function () { return this._data.pop(); };
    Object.defineProperty(Stack.prototype, "data", {
        get: function () { return this._data; },
        enumerable: true,
        configurable: true
    });
    return Stack;
}());
var stack = new Stack();
stack.push(1);
console.log(stack.data);
//# sourceMappingURL=classes.js.map