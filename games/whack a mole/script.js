let divs = [...document.querySelectorAll("div")]
setInterval(() => {
    let num = Math.floor(Math.random(0,7)*10)
    divs[num].classList.add("red")
    setTimeout(() => {
        divs[num].classList.remove("red") 
    }, 1000);
},1000);
let scorenum = 0
let score = document.querySelector("h4 span")
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click",()=>{
        if(divs[i].classList.contains("red")){
            scorenum++
            console.log(scorenum)
            score.innerHTML = scorenum
        }else{
            console.log("fhyui")
        }
    })
}
