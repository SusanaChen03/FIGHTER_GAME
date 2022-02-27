let tipojugador1="ryu";
let tipojugador2="honda";//ryu,honda,chunli,ken



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
 
