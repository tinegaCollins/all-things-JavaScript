class linked {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    append(value){
        let node = {
            value: value,
            next: null
        }
        if(!this.head){
            this.head = node 
        }
        if(this.tail){
            this.tail.next = node 
        }
        this.tail = node 
    }
    prepend(value){
        const node = {
            value : value,
            next: null
        }
        if(this.head){
            node.next = this.head
        }
        this.head = node;
    }
    delete(value){
        
    }
    display(){
        let allNodes = [];
        let currentNode = this.head;
        while(currentNode){
            allNodes.push(currentNode.value);
            currentNode  = currentNode.next;
        }
        return allNodes;
    }
}
let t = new linked;
t.append(2)
t.append(3)
t.append(4)
t.prepend(1)


console.log(t.display());