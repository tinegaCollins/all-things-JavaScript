function getSecondLetter(letter,,starting){
    let indexOfSecondLetter;
    if(word[starting] == letter){
        indexOfSecondLetter = word.indexOf(word[startingPoint])
        return(indexOfSecondLetter,indexOfFirstLetter)
    }
    else {
        return getSecondLetter(letter,word,startingPoint += 1)
    }
}

function getLetter(letter1,letter2,word,startingPoint){
    let indexOfFirstLetter;
    if (word[startingPoint] == letter1){
        indexOfFirstLetter = word.indexOf(word[startingPoint])
        getSecondLetter(letter2,word,startingPoint)
    }
    else {
        return getLetter(letter1,word,startingPoint += 1)
    }
}
console.log(getLetter('a','b',['e','r','a','t','b'], 0))


