let tipeplayer1= 0; //0ryu, 1honda, 2chunli, 3ken
let tipeplayer2= 0;//0ryu,1honda,2chunli,3ken

let lifeplayer1 = 100;
let lifeplayer2 = 100;

let timer=300;

const arrayPunch = ["../Images/ryu/ryu.gif","../Images/honda/Honda ataque.png","../Images/chunLi/C ataque mano.png","../Images/ken/K manos dfre.png"];
const arraykick = ["../Images/ryu/R patada.png","../Images/honda/Honda ataque.png","../Images/chunLi/C ataque mano.png","../Images/ken/K manos dfre.png"];
const arrayEspecial = ["../Images/ryu/R en guardia.png","../Images/honda/Honda ataque.png","../Images/chunLi/C ataque mano.png","../Images/ken/K manos dfre.png"];
const arrayBack = ["../Images/ryu/R patada.png","../Images/honda/Honda ataque.png","../Images/chunLi/C ataque mano.png","../Images/ken/K manos dfre.png"];


function init(){
    document.getElementById("player1").src = arrayBack[tipeplayer1];
    document.getElementById("player2").src = arrayBack[tipeplayer2];
}
 

let turn = "player1"; //player1, player2


function punch(){

    if(turn=="player1"){
    
        document.getElementById("player1").src= arrayPunch[tipeplayer1];
   
        let valor = 20;
        restliveoponent("player1", valor);

        setTimeout (back,timer);
    }

}
   

function back (){ 

    document.getElementById("player1").src= arrayBack[tipeplayer1];

    if ( lifeplayer2 <= 0){
        alert("jugador 1 has ganado");
    }

    turn ="player2";
}

function kick (){

    if(turn=="player1")
    {

    document.getElementById("player1").src= arraykick[tipeplayer1];
    
    let valor = 30;
        restliveoponent("player1", valor);

        setTimeout (back,timer);
    }
}
    

function especial (){

    if(turn=="player1"){

    document.getElementById("player1").src= arrayEspecial[tipeplayer1];
    
    let valor = 50;
        restliveoponent("player1", valor);

        setTimeout (back,timer);
    }
}


function restliveoponent(player, valor){
    
    if (player == "player1"){
        lifeplayer2 = lifeplayer2 - valor;
        if (lifeplayer2 < 0){
            lifeplayer2 = 0;
        }
        document.getElementById("bv2").style="width: " + lifeplayer2 +"px;";
        
    }

    if (player == "player2"){
        
        lifeplayer1 = lifeplayer1 - valor;
        if (lifeplayer1 < 0){
            lifeplayer1 = 0;
        
        }
        document.getElementById("bv1").style="width: " + lifeplayer1 +"px;";
    }
}
    




function punch2(){
    if(turn=="player2"){
    
    document.getElementById("player2").src= arrayPunch[tipeplayer2];
   
        let valor = 20;
        restliveoponent("player2", valor);

        setTimeout (back2,timer);
    }
    
}
   

function back2 (){ 
    if(turn=="player2"){

    document.getElementById("player2").src= arrayBack[tipeplayer2];

    if ( lifeplayer1 <= 0){
        alert("jugador 2 has ganado");
    }
        turn = "player1";
    }   
}

function kick2 (){
    if(turn=="player2"){

    document.getElementById("player2").src= arraykick[tipeplayer2];
    
    let valor = 30;
        restliveoponent("player2", valor);

        setTimeout (back2,timer);
}
}

function especial2 (){
    if(turn=="player2"){

    document.getElementById("player2").src= arrayEspecial[tipeplayer2];
    
    let valor = 50;
        restliveoponent("player2", valor);

        setTimeout (back2,timer);

}

}
