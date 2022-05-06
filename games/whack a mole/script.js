let divs = [...document.querySelectorAll("div")]
setInterval(() => {
    let num = Math.floor(Math.random(0,7)*10)
    console.log(num)
    divs[num].classList.add("red")
    setTimeout(() => {
        divs[num].classList.remove("red") 
    }, 1000);
},1000);
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click",()=>{
        if(divs[i].has("red")){
            console.log("whacked")
        }
    })
}
