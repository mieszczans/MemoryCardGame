let tileImages = [1,2,3,4,5,6,1,2,3,4,5,6];
let tileArray = [];
let tileFlippedOver = [];
let cardFlipped = -1;
const startButton = document.getElementById('start');
const gameBoard = document.getElementById('gameboard');

let gamePlay = false;

//event listeners
startButton.addEventListener('click', startGame);

//Functions
function startGame(){
    startButton.style.display='none';
    if(!gamePlay){
        gamePlay = true;
        extendNames();
        tileArray = tileImages.concat(tileArray);
        shuffleArray(tileArray);
        console.log(tileArray);
        buildBoard();
        clickCard();
    }
    console.log('started');
}
//buduje plansze
let buildBoard = () =>{
    let html = [];
    for (let x = 0; x <= tileArray.length-1; x++) {
        html += '<div class="gameTile">';
        html += '<img id="cards'+x+'" src="../images/back.jpg" class="flipImage"></div></div>';
    }
    gameBoard.innerHTML = html;
}
//efekt klikniecia w karte
let pickCard = (tileIndex,t) =>{
    console.log(tileIndex);
    console.log(cardFlipped);
    console.log(t.src);
    if(cardFlipped>=0){
        if(tileIndex!=cardFlipped){
            t.src="images/"+tileArray[tileIndex];
            let secondCard = tileIndex;
        }
        console.log('second', cardFlipped);
    }else{
        cardFlipped=tileIndex;
        t.src="images/"+tileArray[tileIndex];
        console.log('first', cardFlipped);
    }
}
//dodanie rozszerzenia do zdjec
let extendNames = (el) =>'images/'+el+'.jpg';
tileImages = tileImages.map(extendNames);

//tasowanie tablicy
function shuffleArray(array){
    for(let x=array.length-1;x>=0;x--){
        let holder = Math.floor(Math.random()*(x+1));
        let itemValue = array[x];
        tileArray[holder]=itemValue;
    }
    return tileArray;  
};

//dodanie listenerow do klikniecia
let clickCard=()=>{
    let getCards =   document.querySelectorAll('.gameTile');
    for (var i = 0; i < getCards.length; i++) {
        let result = getCards[i];
        result.addEventListener('click', pickCard(),
        false);
    }
}



// const clickCards=() =>{
//     for(let i=0;i<getCards.length;i++){
//         card[i].addEventListener('click', pickCard, false);
//     }
// }
// const pickCard =()=>{

// }