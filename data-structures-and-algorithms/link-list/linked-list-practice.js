class linkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = {
            value: value,
            next: null
        }
        if(this.tail){
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head){
            this.head = newNode;
        }
    }

    delete(value){
        if(!this.head){
            return
        }
        while(this.head && this.head.value === value){
            this.head = this.head.next;
        }
        let currentNode = this.head;
        while(currentNode.next){
            if(currentNode.next.value === value){
                currentNode.next = currentNode.next.next
            }
            else {
                currentNode = currentNode.next
            }
        }
    }
    toArray(){
        const elements = [];
        let curNode = this.head;
        while(curNode){
            elements.push(curNode);
            curNode = curNode.next
        }

        return elements;
    }
}
const first = new linkedList
first.append(3)
first.append(6)
first.append(6)
first.append(12)
first.delete(6)
// console.log(first.toArray())



class newLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addToEnd(value){
        const nodeToAdd = {
            value: value,
            next : null
        }
        if(this.tail){
            this.tail.next = nodeToAdd;
        }
        this.tail = nodeToAdd;
        if(!this.head){
            this.head = nodeToAdd;
        }
    }

    toArray(){
        const allElements = [];
        let currentNode = this.head;
        while(currentNode){
            allElements.push(currentNode);
            currentNode = currentNode.next;
        }
        return allElements
    }
}

const link = new newLinkedList;

class lastAppend {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = {
            value: value,
            next : null
        }
        if(this.tail){
            this.tail.next = newNode;
        }
        this.tail = newNode
        if(!this.head){
            this.head = newNode;
        }

    }

    prepend(value){
        const another = {
            value: value,
            next : null
        }
        if(this.head){
            another.next = this.head
        }
        this.head = another;
        if(!this.tail){
            this.tail = another
        }
    }

    delete(value){
        if(!this.head){
            return
        }
        while(this.head && this.head.value === value){
            this.head = this.head.next
        }
        let curNode = this.head;
        while(curNode.next){
            if(curNode.next.value === value){
                curNode.next = curNode.next.next
            }
            else{
                curNode = curNode.next
            }
        }
    }
    toArray(){
        let elements = [];
        let curNode = this.head;
        while(curNode){
            elements.push(curNode);
            curNode = curNode.next
        }
        return elements;
    }
}
const n = new lastAppend;

n.append(4);
n.append("cool");
n.append("dua lipa");
n.append("champe");
n.prepend("waaa");
n.prepend("i am king");
n.delete("cool");
n.delete(4);
// console.log(n.toArray())

class lastPractice {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = {
            value : value,
            next : null
        }
        if(this.tail){
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if(!this.head){
            this.head = newNode
        }
    }

    prepend(value){
        const newNode = {
            value : value,
            next : null
        }
        if(this.head){
            newNode.next =  this.head ;
        }
        this.head = newNode
        if(!this.tail){
            this.tail = newNode;
        }
    }

    delete(value){
        if(!this.head){
            return;
        }
        while(this.head && this.head.value === value){
            this.head = this.head.next;
        }
        let curNode = this.head;
        while(curNode.next){
            if (curNode.next.value === value){
                curNode.next = curNode.next.next;
            }else{
                curNode = curNode.next
            }
        }
    }
    toArray(){
        let elements = [];
        let curNode = this.head;
        while(curNode){
            elements.push(curNode);
            curNode = curNode.next
        }
        return elements
    }
}

const y = new lastPractice
y.append("someday");
y.append("one republic");
y.append("cant feel");
y.append("the weekend");
y.prepend("speechless");
y.append("robin");
y.delete("the weekend")
// console.log(y.toArray())


class linkedList2 {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const node = {
            value: value,
            next : null
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
            value: value,
            next : null
        }
        if(this.head){
            node.next = this.head
        }
        this.head = node
    }
    delete(value){
        if(!this.head){
            return
        }
        while(this.head && this.head.value === value){
            this.head = this.head.next
        }
        let curNode = this.head;
        while(curNode.next){
            if(curNode.next.value === value){
                curNode.next = curNode.next.next
            }else {
                curNode = curNode.next
            }
        }
    }
    display(){
        let allNodes = [];
        let currentNode = this.head;
        while(currentNode){
            allNodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return allNodes;
    }
}

const linked = new linkedList2
linked.append(1);
linked.append(2);
linked.append(3);
linked.append(4);
linked.prepend(0);
linked.delete(4)
linked.delete(1)

// console.log(linked.display())

//last practice on append prepend and delete

class linkedList3 {
    constructor(){
        this.head = null
        this.tail = null
    }
    append(value){
        const newNode = {
            value: value,
            next: null
        }
        if(!this.head){
            this.head = newNode
        }
        if(this.tail){
            this.tail.next = newNode
        }
        this.tail = newNode
    }
    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        if(!this.head){
            this.head = newNode
        }
        if(this.head){
            newNode.next = this.head
        }
        this.head = newNode
    }
    delete(value){
        if(!this.head){
            return
        }
        while(this.head && this.head.value === value){
            this.head = this.head.next
        }
        let currentNode = this.head;
        while(currentNode.next){
            if(currentNode.next.value === value){
                currentNode.next = currentNode.next.next
            }
            else {
                currentNode = currentNode.next
            }
        }
    }
    display(){
        let allElements = [];
        let curNode = this.head;
        while(curNode){
            allElements.push(curNode);
            curNode = curNode.next
        }
        return allElements
    }
}

const r = new linkedList3;
r.append(1)
r.append(2)
r.append(3)
r.prepend(0)
r.delete(1)
// console.log(r.display())

//fpfojjf4o

class linkedList4 {
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
        let node = {
            value : value,
            next: null
        }
        if(!this.head){
            this.head = node
            return
        }
        node.next = this.head
        this.head = node
    }
    find(value){
       if(!this.head){
        return
       } 

       let currentNode  = this.head;
       while(currentNode){
        if(currentNode.value === value){
            return currentNode;
        }
        currentNode = currentNode.next
       }
    }
    delete(value){
        if(!this.head){
            return
        }
        while(this.head && this.head.value === value){
            this.head = this.head.next
        }
        let currentNode = this.head;
        while(currentNode.next){
            if(currentNode.next.value === value){
                currentNode.next = currentNode.next.next
            }else {
                currentNode = currentNode.next
            }
        }
    }
    insertAfter(value, afterValue){

    }
    display(){
        const allNodes = [];
        let curNode = this.head;
        while(curNode){
            allNodes.push(curNode)
            curNode = curNode.next
        }
        return allNodes
    }
}

const v = new linkedList4
v.append(1);
v.append(2);
v.append(3);
v.prepend(6)
v.prepend(5)
v.prepend(1)
v.delete(3)
console.log(v.find(1))
v.insertAfter(45,2)     
console.log(v.display())
