let selectedButtonPlayer1 = '';
let numberplayer1 = 0;

function tellMeGamer (myObj,number){
    
    let button = myObj;
    numberplayer1 = number;

    if(selectedButtonPlayer1 !=''){

        let lastButton = document.getElementById(selectedButtonPlayer1);
        lastButton.classList.remove("selected");
    }

    selectedButtonPlayer1=button.id;
    button.classList.add("selected");

    if (selectedButtonPlayer1 !='' && selectedButtonPlayer2!=''){

        document.getElementById('start').style = 'display:flex';
    }
}


let selectedButtonPlayer2 = '';
let numberplayer2 = 0;

function tellMeGamer2 (myObj, number){
    
    let button = myObj;
    numberplayer2 = number;

    if(selectedButtonPlayer2 !=''){

        let lastButton = document.getElementById(selectedButtonPlayer2);
        lastButton.classList.remove("selected");
    }

    selectedButtonPlayer2=button.id;
    button.classList.add("selected");

    if (selectedButtonPlayer1 !='' && selectedButtonPlayer2!=''){

        document.getElementById('start').style = 'display:flex';
    }
}

startgame = ()=>{
  window.open('Playscreen.html?jugador1='+numberplayer1+'&jugador2='+numberplayer2,"_self");
};
