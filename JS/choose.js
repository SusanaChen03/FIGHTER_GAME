let botonseleccionadoj1 = ''
function dimegamer (miobj){
    
    let button = miobj;

    if(botonseleccionadoj1 !=''){

        let ultimoboton = document.getElementById(botonseleccionadoj1);
        ultimoboton.classList.remove("selected");
    }

    botonseleccionadoj1=button.id;
    button.classList.add("selected");
}


let botonseleccionadoj1 = ''
function dimegamer2 (miobj){
    
    let button = miobj;

    if(botonseleccionadoj1 !=''){

        let ultimoboton = document.getElementById(botonseleccionadoj1);
        ultimoboton.classList.remove("selected");
    }

    botonseleccionadoj1=button.id;
    button.classList.add("selected");
}
