//stack.push to push items on top of a stack
//stack.pop to remove elements from a stack
//stack.peek displaying the item on top
//stack.length - the size of a stack



function palindrome(word){
    let letters = [];
    for (let i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }
    let reverseLetters = ''
    for (let j = 0; j < word.length; j++) {
        reverseLetters += letters.pop()
    }
    if(reverseLetters == word){
        return `${word} is a palindrome`
    }
    else {
        return `${word} is not a palindrome`
    }
}

console.log(palindrome('tinega'));

function practice(nums){
    nums.push(4)
    console.log(nums)
    nums.pop()
    console.log(nums)
}
practice([2,4,5])