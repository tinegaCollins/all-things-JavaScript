

function containsDuplicates(nums){
    let duplicate = [];
    let nonDulicate = [];
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i]
        
        for (let j = 0; j < nums.length; j++) {
            if(j == nums.indexOf(nums[i])){ continue; }
            if(number === nums[j]){
               duplicate.push(nums[i])
            }
            else {
                nonDulicate.push(nums[i])
            }
        }
    }
    if(duplicate.length > 1){
        return true
    }
    else{
        return false
    }
}

let number = [6,6,7]

console.log(containsDuplicates(number))