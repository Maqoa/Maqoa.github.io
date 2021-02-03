'use strict';

function biblioteka() {
    var tytulKs = document.getElementById("tytul").value;
    console.log("tytul: " + tytulKs);

    var autorKs = document.getElementById("autor").value;
    console.log("autor: " + autorKs);

    var kategoriaKs = document.getElementById("kategoria").value;
    console.log("kategoria: " + kategoriaKs);

    var priorytetKs = document.getElementById("priorytet").value;
    console.log("priorytet: " + priorytetKs);
return biblioteka;
var ksiazkiBiblioteki = [];
 ksiazkiBiblioteki.push('tytulKs') ;
    console.log(ksiazkiBiblioteki.tytulKs);
    ksiazkiBiblioteki.push('autorKs');
   ksiazkiBiblioteki.push('kategoriaKs');
    ksiazkiBiblioteki.push('priorytetKs');
console.log(ksiazkiBiblioteki.join());
    
}
document.getElementById("send").onclick = biblioteka;

