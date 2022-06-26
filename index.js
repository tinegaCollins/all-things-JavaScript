const mergeTwoLists = function(list1, list2) {
    const all = list1.concat(list2);
    all.sort((a,b)=>(a-b))
    return all
};

mergeTwoLists([1,3,4],[5,6,7])