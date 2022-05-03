let divs = [...document.querySelectorAll("div")]
setInterval(() => {
    let num = Math.floor(Math.random(0,8.4)*10)
    console.log(num)
    divs[num].classList.add("red")
    
},1000);
