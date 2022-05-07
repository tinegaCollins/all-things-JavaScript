// callbacks


let stocks = {
    fruits : ['grapes', 'strawberry','banana', 'apple'],
    liquid : ['water', 'ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'peanuts']
}
let order = (call_production)=>{
    console.log("order placed call production")
    call_production()
};

let production = ()=>{
    console.log("production started")
}

// order(production)

 
