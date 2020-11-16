
//var o = {
    'use strict'
//    wlasciwosci: [
//        0,1,2,3
//        
//    ],
//    wlasciwosci2: "string",
//    metoda1: function(){
//    console.log("metoda");
//}
//}


class Ogloszenie {
    constructor(tytul, opis, kategoria, autor, cena ){
        this.tytul = tytul;
        this.opis = opis;
        this.kategoria = kategoria;
        this.autor = autor;
        this.cena = cena;
    }
    
    
    pobierzOgłoszenie(){
        var ogl = "<h1>" + this.tytul + "<br><small>" + this.autor + "</small></h1>";
        ogl += "<h6>Cena: " + this.cena + "</h6>";
        ogl += "<p>" + this.opis + "</p>";
        ogl += "<p><em>Kategoria: " + this.kategoria + "</em></p>";
        ogl += "<hr>";
        
        
        document.body.insertAdjacentHTML("afterbegin", ogl);
    
}
var ogloszenie = new Ogloszenie("sprzedam opla","niemiec plakal jak sprzedawal","motoryzacja","helmut",3000);
ogloszenie.pobierzOgłoszenie();

console.log(ogloszenie);

var ogloszenie = new Ogloszenie("sprzedam pralke","programowalna frania","agd","halina", 3000);
ogloszenie.pobierzOgłoszenie();




