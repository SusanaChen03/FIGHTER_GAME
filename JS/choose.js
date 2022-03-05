let botonseleccionadoj1 = '';
let numberplayer1 = 0;

function tellMeGamer (miobj,number){
    
    let button = miobj;

    numberplayer1 = number;

    if(botonseleccionadoj1 !=''){

        let ultimoboton = document.getElementById(botonseleccionadoj1);
        ultimoboton.classList.remove("selected");
    }

    botonseleccionadoj1=button.id;
    button.classList.add("selected");

    if (botonseleccionadoj1 !='' && botonseleccionadoj2!=''){

        document.getElementById('start').style = 'display:flex';
    }
}


let botonseleccionadoj2 = '';
let numberplayer2 = 0;

function tellMeGamer2 (miobj, number){
    
    let button = miobj;
    numberplayer2 = number;

    if(botonseleccionadoj2 !=''){

        let ultimoboton = document.getElementById(botonseleccionadoj2);
        ultimoboton.classList.remove("selected");
    }

    botonseleccionadoj2=button.id;
    button.classList.add("selected");

    if (botonseleccionadoj1 !='' && botonseleccionadoj2!=''){

        document.getElementById('start').style = 'display:flex';
    }
}

startgame = ()=>{
  window.open('playscreen.html?jugador1='+numberplayer1+'&jugador2='+numberplayer2);
};
