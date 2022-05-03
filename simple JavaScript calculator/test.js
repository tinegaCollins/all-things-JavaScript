function getInput2(){
    let value = document.querySelector(".input2").innerHTML;
    let valueNum = parseInt(value);
    return valueNum;
}
function getInput1(){
    let value = document.querySelector(".input1").innerHTML;
    let valueNum = parseInt(value);
    return valueNum;
}
const numbers =  document.querySelector(".numbers")
var newArray =  []
var displayArray = []
numbers.addEventListener("click",(e)=>{
    if(e.target.classList == "num"){
        newArray.push(e.target.innerHTML)
        displayArray.push(e.target.innerHTML)
    }else if(e.target.classList == "times"){
        newArray.push("*")
        displayArray.push(e.target.innerHTML)
    }else if(e.target.classList == "divide"){
        newArray.push("/")
        displayArray.push(e.target.innerHTML)
    }else if(e.target.classList == "equals"){
        let stringArray = newArray.join("").toString()
        newArray = []
        displayArray= []
    
        try {
            let answer = eval(stringArray)
            document.querySelector(".input2").innerHTML = answer
        } catch (error){
            document.querySelector(".input2").style.fontSize = "20px"
            document.querySelector(".input2").innerHTML = "😂😂 rudi shule"
        }
    }else if(e.target.classList == "del"){
        newArray.pop()
        displayArray.pop()
    }else if(e.target.classList == "c"){
        newArray = []
        displayArray= []
        document.querySelector(".input2").innerHTML = ""
    }
    else{
        return
    }
    document.querySelector(".input1").innerHTML = displayArray.join("").toString()
})

