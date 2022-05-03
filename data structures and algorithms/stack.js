//stack.push to push items on top of a stack
//stack.pop to remove elements from a stack
//stack.peek displaying the item on top
//stack.length - the size of a stack

var letters = [];
var word = "racecar"
var rword= "";
//put the letters of the word into a stack

for (let i= 0; i<word.length; i++){
    letters.push(word[i])
}
for (let i= 0; i<word.length; i++){
    rword += letters.pop();
}

if (rword===word){
    console.log(`${word} is a palindrome`)
}
else{
    console.log(`${word} is not a palindrome`)
}


const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
console.log(person.fullName())