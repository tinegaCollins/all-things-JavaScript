//Given a sorted array of distinct integers and a target value
//target is found. If not, return the index where it would be if it were inserted in order.


var searchInsert = function(nums, target) {
    let index = nums.indexOf(target);
    if(nums.indexOf(target) === -1){
        
    }
    else {
        return index;
    }
};


function getIndex(nums,target){
    let start = 0;
    if(nums[start] > target){
        return nums.indexOf(nums[start])
    }
    else{
        start + 1;
        getIndex(nums,target)
    }
}
console.log(getIndex([1,2,3,4,5,7], 4))