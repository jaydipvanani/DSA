
class Stack {

    constructor() {
        this.items = [];
        this.size = 5;
    }
    printStack() {
        if (this.items.length === 0) {
            console.log("stack underflow");
        }
        else {
            console.log(this.items);
        }
    }
    push(element) {
        if (this.items.length == this.size) {
            console.log("stack is overflow");
        }
        else {
            this.items[this.items.length] = element;
        }
    }
    pop() {
        if (this.items.length == 1) {
            console.log("   ");
        }
        else {
            this.items.length = this.items.length - 1;
        }
    }
    peek(){

    }
   

}

let stack = new Stack();
stack.push(10);
stack.push(12);
stack.push(12);
stack.push(2234);
stack.push(99);
stack.pop();
stack.printStack();


