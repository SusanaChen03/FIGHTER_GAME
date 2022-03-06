let tipeplayer1= 0; //0ryu, 1honda, 2chunli, 3ken
let tipeplayer2= 0;//0ryu,1honda,2chunli,3ken

let lifeplayer1 = 150;
let lifeplayer2 = 150;

let timer=400;

const arrayPunch = ["../Images/ryu/ryu puñetazo izquierda.png","../Images/honda/Honda puñetazo izquierdo.png","../Images/chunLi/Chun puñetazo izquierdo.png","../Images/ken/ken.png"];
const arraykick = ["../Images/ryu/Ryu patada izquierda.png","../Images/honda/Honda patada izquierdo.png","../Images/chunLi/Chun patada izquierda.png","../Images/ken/ken patada izquierda.png"];
const arraySpecial = ["../Images/ryu/Ryu especial izquierda.png","../Images/honda/Honda especial izquierdo.png","../Images/chunLi/Chun especial izquierdo.png","../Images/ken/Ken especial izquierdo.png"];
const arrayBack = ["../Images/ryu/ryu inicio izquierda.png","../Images/honda/Honda inicio izquierdo.png","../Images/chunLi/Chun inicio izquierda.png","../Images/ken/ken inicio izquierda.png"];

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
tipeplayer1=Number(params.jugador1);
tipeplayer2=Number(params.jugador2);



function init(){
    document.getElementById("player1").src = arrayBack[tipeplayer1];
    document.getElementById("player2").src = arrayBack2[tipeplayer2];
}
 


let turn = "player1"; //player1, player2


function punch(){

    if(turn=="player1"){
    
        document.getElementById("player1").src= arrayPunch[tipeplayer1];
   
        let valor = 30;
        restliveoponent("player1", valor);

        setTimeout (back,timer);
    }

}
   

function back (){ 

    document.getElementById("player1").src= arrayBack[tipeplayer1];

    if ( lifeplayer2 <= 0){
        document.getElementById("winner").innerText ="PLAYER 1 WIN";
        document.getElementById("winner").style= "display:block";
        document.getElementById("playagain").style= "display:block";
    }

    turn ="player2";
}

function kick (){

    if(turn=="player1"){
    

    document.getElementById("player1").src= arraykick[tipeplayer1];
    
    let valor = 40;
        restliveoponent("player1", valor);

        setTimeout (back,timer);
    }
}
    

function especial (){

    if(turn=="player1"){

    document.getElementById("player1").src= arraySpecial[tipeplayer1];
    
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
        document.getElementById("lifeBar2").style="margin-top:-30px;width: " + lifeplayer2 +"px;";
        
    }

    if (player == "player2"){
        
        lifeplayer1 = lifeplayer1 - valor;
        if (lifeplayer1 < 0){
            lifeplayer1 = 0;
        
        }
        document.getElementById("lifeBar1").style="margin-top:-30px;width: " + lifeplayer1 +"px;";
    }
}
    

const arrayPunch2 = ["../Images/ryu/ryu puñetazo derecha.png","../Images/honda/Honda punetazo derecho.png","../Images/chunLi/Chun puñetazo derecho.png","../Images/ken/ken puño derecha.png"];
const arraykick2 = ["../Images/ryu/Ryu patada derecha.png","../Images/honda/Honda patada derecho .png","../Images/chunLi/Chun patada derecha.png","../Images/ken/ken patada derecha.png"];
const arraySpecial2 = ["../Images/ryu/Ryu especial derecha.png","../Images/honda/Honda especial derecho.png","../Images/chunLi/Chun especial derecho.png","../Images/ken/Ken especial derecho.png"];
const arrayBack2 = ["../Images/ryu/ryu inicio derecha.png","../Images/honda/Honda inicio derecho .png","../Images/chunLi/Chun inicio derecha.png","../Images/ken/ken inicio derecha .png"];



function punch2(){
    if(turn=="player2"){
    
    document.getElementById("player2").src= arrayPunch2[tipeplayer2];
   
        let valor = 40;
        restliveoponent("player2", valor);

        setTimeout (back2,timer);
    }
    
}
   

function back2 (){ 
    if(turn=="player2"){

    document.getElementById("player2").src= arrayBack2[tipeplayer2];

    if ( lifeplayer1 <= 0){
        document.getElementById("winner").innerText ="PLAYER 2 WIN";
        document.getElementById("winner").style= "display:block";
        document.getElementById("playagain").style= "display:block";
    }
        turn = "player1";
    }   
}

function kick2 (){
    if(turn=="player2"){

    document.getElementById("player2").src= arraykick2[tipeplayer2];
    
    let valor = 50;
        restliveoponent("player2", valor);

        setTimeout (back2,timer);
}
}

function especial2 (){
    if(turn=="player2"){

    document.getElementById("player2").src= arraySpecial2[tipeplayer2];
    
    let valor = 60;
        restliveoponent("player2", valor);

        setTimeout (back2,timer);

}

}
