let botonseleccionadoj1 = '';

function dimegamer (miobj){
    
    let button = miobj;

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

function dimegamer2 (miobj){
    
    let button = miobj;

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

