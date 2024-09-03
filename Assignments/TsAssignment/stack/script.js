var Stack = /** @class */ (function () {
    function Stack() {
        this.elements = [];
    }
    Stack.prototype.pushele = function (ele) {
        this.elements.push(ele);
    };
    Stack.prototype.popele = function () {
        this.elements.pop();
    };
    Stack.prototype.traverse = function () {
        console.log(this.elements.map(function (value) {
            return value;
        }));
    };
    return Stack;
}());
var stack = new Stack();
stack.pushele(1);
stack.pushele(2);
stack.pushele(3);
stack.pushele(4);
stack.pushele(5);
stack.traverse();
console.log();
stack.popele();
stack.traverse();
