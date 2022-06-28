class linkList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = {
            value: value,
            next: null
        }
        if(!this.head){
            this.head = newNode
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    display(){
        let allElements = [];
        let currentNode = this.head;
        while(currentNode){
            allElements.push(currentNode);
            currentNode = currentNode.next
        }
        return allElements
    }
}

let t = new linkList
t.append(4)
console.log(t.display())