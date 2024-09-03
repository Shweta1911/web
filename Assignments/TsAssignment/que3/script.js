var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
var LinkedListNamespace;
(function (LinkedListNamespace) {
    var Node = /** @class */ (function () {
        function Node(data) {
            this.data = data;
            this.next = null;
        }
        return Node;
    }());
    LinkedListNamespace.Node = Node;
    var LinkedList = /** @class */ (function () {
        function LinkedList() {
            this.head = null;
        }
        LinkedList.prototype.append = function (data) {
            var newNode = new Node(data);
            if (!this.head) {
                this.head = newNode;
            }
            else {
                var current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
        };
        LinkedList.prototype.print = function () {
            var current = this.head;
            while (current) {
                console.log(current.data);
                current = current.next;
            }
        };
        return LinkedList;
    }());
    LinkedListNamespace.LinkedList = LinkedList;
})(LinkedListNamespace || (LinkedListNamespace = {}));
var linkedList = new LinkedListNamespace.LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.print();
