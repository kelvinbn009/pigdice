var log = logger('output'),
    rollBtn = getById('roll'),
    resetBtn = getById('reset'),
    nDices = getById('numofdices'),
    nSides = getById('numofsides'),
    dices = null,
    sides = null,
    rolls = [],
    doubles=0;

rollBtn.addEventListener('click',rollHandler);
resetBtn.addEventListener('click', resetHandler);


function rollHandler() {
    resetView();
    sides = nSides.value;
    dices = nDices.value;
    doubles=0;
    rolls=[];
    
    if(validateInput()) {
        log('invalid input');
        return;
    }
    //rolling simulation
    var rolled;
    while (dices--) {
        rolled = Math.ceil(Math.random()*sides);
        log('For Dice #'+(dices+1)+' Your Rolled: '+ rolled  +'!');
        rolls.push(rolled);
    }

    //finding doubles
    //first sort: you can use any way to sort doesnt matter
    rolls.sort(function(a,b){
      return (a>b?1:(a<b)?0:-1);
    });
    
    for (var i =0; i < rolls.length; i++) {
        if (rolls[i] == rolls[i+1]) {
            doubles++;
            i++;
        }
    }
    if (doubles>0) log("You rolled " + doubles + " doubles");
    
}

function resetHandler(){
    resetView();
    nDices.value = nSides.value = '';
}


function resetView() {
    getById('output').innerText = '';
}


function validateInput(){
    return (isNaN(sides) || sides == '' || isNaN(dices) || dices == '');
}


function logger(x) { var output = getById(x); 
    return function(text){
        output.innerText += text + '\n';
};}

function getById(x){ return document.getElementById(x); }
