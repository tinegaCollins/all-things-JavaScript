//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The relative order of the elements may be changed.

function remove(nums,value){
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === value){
            let start = nums.indexOf(nums[i])
            nums.splice(start,1)
        }
    }
    return nums
}
console.log(remove([3,2,2,3],3));