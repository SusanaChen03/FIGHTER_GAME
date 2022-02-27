let tipojugador1="ryu";
let tipojugador2="honda";//ryu,honda,chunli,ken



function punetazo(){

    document.getElementById("player1").src="../Images/ryu/ryu.gif";

    const volver =()=> document.getElementById("player1").src="../Images/ryu/R en guardia.png"
    
    setTimeout (volver,2000)
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
 
