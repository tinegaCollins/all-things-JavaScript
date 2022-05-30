function getSecondLetter(a,b,c){
    if(b[c] == a){
        return b.indexOf(b[c])
    }
}

function getLetter(letter1,letter2,word,startingPoint){
    let indexOfFirstLetter;
    let indexOfSecondLetter;
    if (word[startingPoint] == letter1){
        indexOfFirstLetter = word.indexOf(word[startingPoint])
        getSecondLetter(letter2,word,startingPoint)
    }
    else {
        return getLetter(letter1,letter2,word,startingPoint + 1)
    }
}
console.log(getLetter('a','b',['e','r','a','t','b'], 0))


