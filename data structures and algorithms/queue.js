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
let a = [1,2,3,4,5]
console.log(a.indexOf(77))

