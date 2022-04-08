// Coin Counter

let counterCoin=0;

let incrementCoin=()=>{
    updateDisplay(++counterCoin)
    coinsToPay()
};

let updateDisplay=(value)=>{
    document.getElementById("coinNumber").innerHTML=value;
}

// Prices 

let snakeBox= document.getElementById('snakeG');
let snakeBtn=document.getElementById('snakeB');
let pongBox= document.getElementById('pongG');
let pongBtn=document.getElementById('pongB');
let dinoBox= document.getElementById('dinoG');
let dinoBtn=document.getElementById('dinoB');
let tetrisBox= document.getElementById('tetrisG');
let tetrisBtn=document.getElementById('tetrisB');

let coinsToPay=()=>{
    if(counterCoin>=20){
        snakeBox.classList.remove('disabled');
        snakeBtn.classList.add('active');
        snakeBtn.classList.remove('nonvisible');
    }
    if(counterCoin>=30){
        pongBox.classList.remove('disabled');
        pongBtn.classList.add('active');
        pongBtn.classList.remove('nonvisible');
    }
    if(counterCoin>=35){
        dinoBox.classList.remove('disabled');
        dinoBtn.classList.add('active');
        dinoBtn.classList.remove('nonvisible');
    }
    if(counterCoin>=40){
        tetrisBox.classList.remove('disabled');
        tetrisBtn.classList.add('active');
        tetrisBtn.classList.remove('nonvisible');
    }
}
