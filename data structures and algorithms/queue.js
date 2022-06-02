// first in first out

function Queue(){
    collection = []
    this.print = function(){
        console.log(collection)
    }
    this.enqueue = function(item){
        return collection.push(item)
    }
    this.dequeue = function(){
        return collection.shift()
    }
    this.length = function(){
        return collection.length
    }
}

var queue1 = new Queue()

queue1.enqueue(1)
queue1.enqueue(2)
queue1.enqueue(3)
queue1.print()
queue1.dequeue()
queue1.print()


//priority queue


function priorityQueue(){
    const collection = [];
    this.printCollection = function(){
        console.log(collection)
    }
    this.enqueue = function(element) {
        if(collection.length == 0){
            collection.push(element)
        }
        else {
            var added = false
            for (let i = 0; i < collection.length; i++) {
                if(element[1] < collection[i][1]){
                    collection.splice(i,0,element);
                    added = true
                    break;
                }
            }
            if(!added){
                collection.push(element)
            }
        }
    }
    this.dequeue = function(){
        let value = collection.shift()
        return value
    }
}
let newP = new priorityQueue
newP.enqueue(['moranga',5])
newP.enqueue(['tinega', 2])
newP.enqueue(['collins', 1])
newP.printCollection()

newP.dequeue()
newP.printCollection()
