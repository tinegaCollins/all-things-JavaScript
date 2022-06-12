
let stocks = {
    fruits : ['grapes', 'strawberry','banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'peanuts']
}

let isShopOpen = true;

let toppingsChoice = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(
                console.log("which toping")
            )
        }, 3000);
    })
}

async function kitchen(){
    console.log("a");
    console.log("b");

    await toppingsChoice()
    console.log("c");
    console.log("d");
    console.log("e");
}
kitchen()

console.log("fuckig kidding me");
console.log("non ogg");
console.log("taking other orders");