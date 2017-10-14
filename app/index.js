"use strict"
//Starting Page;
{
    let buttonStart = document.querySelector('#start');
    buttonStart.addEventListener('click', UserName, false);
    function UserName(nickUser){
        let nickname = document.querySelector('#nick').value;
        if (typeof(Storage) !== "undefined") {
                localStorage.setItem('nick',nickname);
        } 
        else {
            alert('Please open in Chrome!');
        }
        let catchUserDiv = document.querySelector('#user'); 
        catchUserDiv.innerHTML = localStorage.getItem('nick');
        hideStartingView();
        showSecondView();
    }
    function hideStartingView(){
        let catchWelcomeScreen = document.querySelector('.welcomeScreen');
        catchWelcomeScreen.style.display = 'none'; 
    }
    function showSecondView(){
        let catchSecondView = document.querySelector('.mainContentWrapper');
        catchSecondView.style.display = 'flex';
    }
}
//Main Page
let oneCardVissible = false;
let points=0;
let counter=0;
let firstCardColor, secondCardColor,firstCardId, secondCardId;
let cards = document.querySelectorAll('.card');
(function shuffleCards(){
    for (let i = cards.length - 1; i >= 0; i--) {
        let j = Math.floor(1+Math.random() * (i + 1));
        cards[i].style.order = j;

        console.log(j);
        // cards[i].style.order =`${j}`;
    }
})();

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click',function listeners(){
        pickCard(this.getAttribute('id'));
    },
    false);
}
function pickCard(nr){
    let changeBackground = document.querySelector(`.card${nr}`);
    if(nr==1||nr==2){
        changeBackground.style.backgroundColor = 'red';
    }
    else if(nr==3||nr==4){
        changeBackground.style.backgroundColor = 'pink';
    }
    else if(nr==5||nr==6){
        changeBackground.style.backgroundColor = 'blue';
    }
    else if(nr==7||nr==8){
        changeBackground.style.backgroundColor = 'orange';
    }
    else if(nr==9||nr==10){
        changeBackground.style.backgroundColor = 'yellow';
    }
    else{
        changeBackground.style.backgroundColor = 'purple';
    }

    if(oneCardVissible==false){
        //firstcard
        oneCardVissible=true;
        firstCardId=nr;
        firstCardColor = changeBackground.style.backgroundColor;
    }
    else{
        secondCardId=nr;
        secondCardColor = changeBackground.style.backgroundColor;
        //secondcard
        if(firstCardColor==secondCardColor){
            //have pair
            points+=100;
            updateScores(points);
            setTimeout(disablePair,500,firstCardId,secondCardId);
        }
        else{
            //dont have pair
            points-=50;
            updateScores(points);
            setTimeout(defaultColor,500,firstCardId,secondCardId);
        }
        oneCardVissible=false;
        function defaultColor(firstCardId,secondCardId){
            let first=document.getElementById(`${firstCardId}`);
            let second=document.getElementById(`${secondCardId}`);
            first.style.backgroundColor='#39d746';
            second.style.backgroundColor='#39d746';
        }
        function disablePair(firstCardId,secondCardId){
            let first=document.getElementById(`${firstCardId}`);
            let second=document.getElementById(`${secondCardId}`);
            first.style.display = 'none';
            second.style.display = 'none';
        }
    }
    function updateScores(points){
        let scores = document.querySelector('#scores');
        scores.innerHTML = points;
    }
}

// function shuffle(cards) {
    //     for (let i = cards.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         cards[i].style.order =`${j}`;
    //     }
    // };

    //przypisz obrazki na stale, ale wez mieszaj je po order w css
// let tileImages = [1,2,3,4,5,6,1,2,3,4,5,6];
// let tileArray = [];
// const startButton = document.getElementById('start');
// const gameBoard = document.getElementById('gameboard');

// let gamePlay = false;

// //event listeners
// startButton.addEventListener('click', startGame);

// //Functions
// function startGame(){
//     startButton.style.display='none';
//     if(!gamePlay){
//         gamePlay = true;
//         extendNames();
//         tileArray = tileImages.concat(tileArray);
//         shuffleArray(tileArray);
//         console.log(tileArray);
//         buildBoard();
//         clickCard();
//     }
//     console.log('started');
// }
// //buduje plansze
// let buildBoard = () =>{
//     let html = [];
//     for (let x = 0; x <= tileArray.length-1; x++) {
//         html += '<div class="gameTile">';
//         html += '<img id="cards'+x+'" src="../images/back.jpg" class="flipImage"></div></div>';
//     }
//     gameBoard.innerHTML = html;
// }
// //dodanie rozszerzenia do zdjec
// let extendNames = (el) =>'images/'+el+'.jpg';
// tileImages = tileImages.map(extendNames);

// //tasowanie tablicy
// function shuffleArray(array){
//     for(let x=array.length-1;x>=0;x--){
//         let holder = Math.floor(Math.random()*(x+1));
//         let itemValue = array[x];
//         tileArray[holder]=itemValue;
//     }
//     return tileArray;  
// };

// //dodanie listenerow do klikniecia
// let clickCard = ()=>{
//     let getCards =   document.querySelectorAll('.gameTile');
//     for (var i = 0; i < getCards.length; i++) {
//         let result = getCards[i];
//         result.addEventListener('click', pickCard()
//         ,
//         false);
//     }
// }

// let pickCard =()=>{
//     console.log('wybrales karte');
// }