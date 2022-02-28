let tipeplayer1="ryu"; //ryu, honda, chunli, ken
let tipeplayer2="honda";//ryu,honda,chunli,ken

let lifeplayer1 = 100;
let lifeplayer2 = 100;

function punch(){

    if(tipeplayer1 === "ryu1"){ 
    document.getElementById("player1").src="../Images/ryu/ryu.gif";
    
    let valor = 60;
    restliveoponent("player1", valor);

    setTimeout (back,2000);
    }

    if(tipeplayer1 === "ken1"){
        document.getElementById("player1").src="../Images/ken punetazo"
    }

    
}
   

function back (){ 
    document.getElementById("player1").src="../Images/ryu/R en guardia.png";

    if ( lifeplayer2 <= 0){
        alert("jugador 1 has ganado");
    }
    
}