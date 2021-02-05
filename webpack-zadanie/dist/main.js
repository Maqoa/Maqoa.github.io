'use strict';

function biblioteka(autor, tytul, kategoria, priorytet){ {
            this.autor = tytulKs;
            this.tytul = autorKs;
            this.kategoria = autorKs;
            this.priorytet = priorytetKs;
       this.opiszKsiazke = function() {             
     return ("autor: " + this.autor + ",  " + "tytul: " + this.tytul, + "kategoria: " + this.kategoria, + ",  " + "priorytet: " + this.priorytet);
        }
    }

   

}
var tytulKs = document.getElementById("tytul").value;
    var autorKs = document.getElementById("autor").value;
    var autorKs = document.getElementById("kategoria").value;
    var priorytetKs = document.getElementById("priorytet").value;
 
document.getElementById("send").onclick = biblioteka;


