class ListNode<T> {
  data: T;
  next: ListNode<T> | null;
 
  constructor(data: T) {
      this.data = data;
      this.next = null;
  }
}
 
namespace LinkedListNamespace {
 
  export class Node<T> {
      data: T;
      next: Node<T> | null;
 
      constructor(data: T) {
          this.data = data;
          this.next = null;
      }
  }
 
 
  export class LinkedList<T> {
      head: Node<T> | null;
 
      constructor() {
          this.head = null;
      }
 
     
      append(data: T): void {
          const newNode = new Node(data);
 
          if (!this.head) {
             
              this.head = newNode;
          } else {
             
              let current = this.head;
              while (current.next) {
                  current = current.next;
              }
              current.next = newNode;
          }
      }
 
     
      print(): void {
          let current = this.head;
          while (current) {
              console.log(current.data);
              current = current.next;
          }
      }
  }
}
 
 
const linkedList = new LinkedListNamespace.LinkedList<number>();
 
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.print();
 