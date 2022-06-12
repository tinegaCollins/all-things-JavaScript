class Node {
    constructor (data, next = null){
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++
    }
    //insert last node
    insertLast(data){
        let node = new Node(data);
        let current;
        // if list empty
        if(!this.head){
            this.head = node;
        }
        else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++
    }
    //insert at index
    insertAt(data, index){
        if(index > 0 && index > this.size){
            return;
        }
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        //set current to first
        current = this.head;
        let count = 0;
        while(count < index){
            previous = current;
            count++;
            current = current.next;
        }
        node.next = current;

    }
    //print list
    printList(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(500);

ll.printList()