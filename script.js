function criptareCesar(text,cheie){
    //initializam un rezultat gol
    var rezultat="";
    
    //parcurgem fiecare litera din text
    for(let i=0;i<text.length;i++){
        //extragem ficare litera
        let litera=text[i];
        
        //verificam daca este litera
        if(litera.match(/[a-z]/)){
            codAscii=text.charCodeAt(i);//pt cod ascii
            litera=String.fromCharCode(((codAscii-97+cheie)%26)+97);
            rezultat+=litera;
        }
        else if(litera.match(/[A-Z]/)){
            codAscii=text.charCodeAt(i);//pt cod ascii
            litera=String.fromCharCode(((codAscii-65+cheie)%26)+65);
            rezultat+=litera;
        }
    }
    return rezultat;
}

function cripteaza(){
//citeste textul din input
const text=document.getElementById("text-input").value;

//citeste cheia din input-ul celalalt
const cheie=parseInt(document.getElementById("cheie-criptare").value);
if(isNaN(cheie)){
    alert("Nu este o cheie valida");
    document.getElementById("rezultat").innerText="Nu este o cheie valida.";
    return;
}
//afisare mesaj criptat
const rezultat=criptareCesar(text,cheie);
document.getElementById("rezultat").innerText=rezultat;

}