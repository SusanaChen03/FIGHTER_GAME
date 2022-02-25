let botonseleccionadoj1;
function dimegamer (miobj){
    debugger;
    let button = miobj;

    if(botonseleccionadoj1 !=undefined){

        let ultimoboton = document.getElementById(botonseleccionadoj1);
        ultimoboton.classList.remove("selected");
    }


    botonseleccionadoj1=button.id;
    button.classList.add("selected");
         
    

}
