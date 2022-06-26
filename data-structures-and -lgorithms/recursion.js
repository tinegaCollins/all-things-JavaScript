function getDistance(word){
    let element = []
    for (let i = 0; i < word.length; i++) {
        element.push(word[i])
    }
    function getSecondIndex(start2){
        if(element[start2] == 'b'){
            let pos = element.indexOf('b')
            console.log(pos)
            return pos;
        }
        else{
            getSecondIndex(start2 + 1)
        }
    }
    function getFirstIndex(start){
        if(element[start] == 'a'){
            return element.indexOf('a')
        }
        else{
            getFirstIndex(start + 1)
        }
    }

    let a = getFirstIndex(0)
    let b = getSecondIndex(0)
    console.log(b)
    
    return b-a
}

console.log(getDistance('alllb'))

