let tipojugador1="ryu";
let tipojugador2="honda";//ryu,honda,chunli,ken

let lifeplayer1 = 100;
let lifeplayer2 = 100;

function punetazo(){

    document.getElementById("player1").src="../Images/ryu/ryu.gif";
    
    let valor = 60;
    restavidaoponente("player1", valor);

    setTimeout (volver,2000);
}
   

function volver (){ 
        document.getElementById("player1").src="../Images/ryu/R en guardia.png";

        if ( lifeplayer2 <= 0){
            alert("jugador 1 has ganado");
        }
        
}

function restavidaoponente(jugador, valor){
    
    if (jugador == "player1"){
        lifeplayer2 = lifeplayer2 - valor;
    
        document.getElementById("bv2").style="width: " + lifeplayer2 +"px;";
        
        
    }

    if (jugador == "player2"){
        document.getElementById("bv1").style="width: " + valor +"px;";
        lifeplayer1 = lifeplayer1 - valor;
    }
    }









function ataquepatada (id){

    document.getElementById(id).src = imagenpatada();
    
}
    



function imagenpatadajugador1 (){
    
    let v = "../Images/ryu/R patada.png";

    return v;
} 



function blood1 (id,vsize){

    document.getElementById(id).style="width:" + vsize +"px;";

}
 
