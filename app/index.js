
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
    }
})();

for (let i = 0; i < cards.length; i++) {
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
            first.style.backgroundColor='#b4b4b4';
            second.style.backgroundColor='#b4b4b4';
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