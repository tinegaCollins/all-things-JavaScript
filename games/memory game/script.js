const cardArray = [
    {
        name: 'meme1',
        img: 'images/1.jpg'
    },
    {
        name: 'meme2',
        img: 'images/2.jpg'
    },
    {
        name: 'meme3',
        img: 'images/3.png'
    },
    {
        name: 'meme4',
        img: 'images/4.png'
    },
    {
        name: 'meme5',
        img: 'images/5.JPG'
    },
    {
        name: 'meme6',
        img: 'images/6.png'
    },
    {
        name: 'meme1',
        img: 'images/1.jpg'
    },
    {
        name: 'meme2',
        img: 'images/2.jpg'
    },
    {
        name: 'meme3',
        img: 'images/3.png'
    },
    {
        name: 'meme4',
        img: 'images/4.png'
    },
    {
        name: 'meme5',
        img: 'images/5.JPG'
    },
    {
        name: 'meme6',
        img: 'images/6.png'
    }
]

cardArray.sort(()=>0.5 -  Math.random())

const gridDisplay = document.querySelector("#grid")
const result = document.querySelector("#result")
let cardsChosen = [];
let cardsChosenIds = []
let cardsWon = []




function createBoard (){
    for (let i = 0; i < cardArray.length ; i++) {
        const card = document.createElement("img")
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener("click",flipCard)
        gridDisplay.appendChild(card)
    }
} 

function checkMatch (){

    const images = document.querySelectorAll('img')
    const option1Id = cardsChosenIds[0]
    const option2Id = cardsChosenIds[1]

    if (option1Id == option2Id){
        alert('you clicked the same card')
    }
    if(cardsChosen[0] == cardsChosen[1]){
        alert('you have found a match')
        images[option1Id].setAttribute('src','images/png.png')
        images[option2Id].setAttribute('src','images/png.png')
        images[option1Id].removeEventListener('click',flipCard)
        images[option2Id].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen) 
    }
    else{
        images[option1Id].setAttribute('src','images/blank.png')
        images[option2Id].setAttribute('src','images/blank.png')
        alert('sorry try  again')
    }
    result.innerHTML = cardsWon 
    cardsChosen = []
    cardsChosenIds = []
    if (cardsWon.length == cardArray.length/2){
        result.innerHTML = 'congratulations, youve found the alll'
    }
}
 function flipCard(){
     const cardId = this.getAttribute('data-id');
     cardsChosen.push(cardArray[cardId].name)
     cardsChosenIds.push(cardId) 
     this.setAttribute('src', cardArray[cardId].img)
     if(cardsChosen.length === 2){
         setTimeout(checkMatch , 500)
     }
 }