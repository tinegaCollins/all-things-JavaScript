function factorial(n){
    if(n == 1 || n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1)
    }
}

function add(b){
    if(b >= 5){
        return 1
    }
    else{
        return b + add(b + 1)
    }
}
console.log(add(1))