//Given a sorted array of distinct integers and a target value
//target is found. If not, return the index where it would be if it were inserted in order.


var searchInsert = function(nums, target) {
    let index = nums.indexOf(target)
    console.log(index)
    if(index < 0){
        for(i=0;i<nums.length;i++){
            if(nums[i] > target){
                console.log(nums[i])
                return nums[i] - 1;
            }
            else {

            }
        }
    }
    else {
        return index;
    }
};

searchInsert([1,2,3,4,5], 6)