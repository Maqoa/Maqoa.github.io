"use strict";

function biblioteka() {
    var tytulKs = document.getElementById("tytul");
	console.log("tytul: " + tytulKs);
    	
	var autorKs= document.getElementById("autor")
	console.log("autor: " + autorKs);
	
	var kategoriaKs = document.getElementById("kategoria");
	console.log("kategoria: " + kategoriaKs);
    	
	var priorytetKs= document.getElementById("priorytet")
	console.log("priorytet: " + priorytetKs);
	
	
	} 
	
	console.log(tytulKs + autorKs + kategoriaKs + priorytetKs);
 	document.getElementById("wynik").innerHTML = Math.round(K*100)/100;	
	
	
	
}
				 


document.getElementById("submit").onclick = biblioteka;


    this.autor = autor;
    this.kategoraia = kategoraia;
    this.priotytet = priotytet;

    this.opiszKsiazke = function () {
        return ("Książka ma tytuł " + tytul + ", autorem jest " + autor + ", i " + takNie + " została przeczytana");
    }


    var tytul = "tytul";
    var autor = "autor";
    var kategoria = "kategoria";
    var priorytet = "priorytet";

    var bibliotekaArray = [tytul, autor, kategoria, priorytet];

    function iloscPrzeczytanych() {
        var liczbaPrzeczytanych = 0;
        bibliotekaArray.forEach(function (element) {
            if (element.przeczytana) {
                liczbaPrzeczytanych += 1;
            }
            console.log(element.biblioteka());
        });
        console.log('liczba Przeczytanych książek: ' + liczbaPrzeczytanych);
    }
    iloscPrzeczytanych(bibliotekaArray);
    
    
    function biblioteka(tytul, autor, kategoraia, priotytet) {
    this.tytul = tytul;
    this.autor = autor;
    this.kategoraia = kategoraia;
    this.priotytet = priotytet;

    this.opiszKsiazke = function () {
        return ("Książka ma tytuł " + tytul + ", autorem jest " + autor + ", i " + takNie + " została przeczytana");
    }


    var tytul = "tytul";
    var autor = "autor";
    var kategoria = "kategoria";
    var priorytet = "priorytet";

    var bibliotekaArray = [tytul, autor, kategoria, priorytet];

    function iloscPrzeczytanych() {
        var liczbaPrzeczytanych = 0;
        bibliotekaArray.forEach(function (element) {
            if (element.przeczytana) {
                liczbaPrzeczytanych += 1;
            }
            console.log(element.biblioteka());
        });
        console.log('liczba Przeczytanych książek: ' + liczbaPrzeczytanych);
    }
    iloscPrzeczytanych(bibliotekaArray);//
    
    