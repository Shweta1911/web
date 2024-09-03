var Queue = /** @class */ (function () {
    function Queue() {
        this.elements = [];
    }
    Queue.prototype.enqueue = function (ele) {
        this.elements.push(ele);
    };
    Queue.prototype.dequeue = function () {
        this.elements.splice(0, 1);
    };
    Queue.prototype.traverse = function () {
        console.log(this.elements.map(function (value) {
            return value;
        }));
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.traverse();
console.log("-------------------------");
queue.dequeue();
queue.traverse();
console.log("-------------------------");
queue.dequeue();
queue.traverse();
console.log("-------------------------");
