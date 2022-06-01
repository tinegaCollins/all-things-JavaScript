//Given an array of integers nums and an integer target, return indices of the two 
//numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

function twoSum(value,target){
    for (let i = 0; i < value.length; i++) {
        let currentNumber = value[i];
        for (let j = 0; j < value.length; j++) {
            if(j == i){continue;}
            if(currentNumber + value[j] === target){
                return [value.indexOf(currentNumber),value.indexOf(value[j])];
            }
        }
    }
}
console.log(twoSum([3,3],6));

