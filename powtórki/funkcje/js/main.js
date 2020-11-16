var btn = document.getElementById("oblicz");

btn.addEventListener("click", function(e){
    'use strict';
    e.preventDefault();
    oblicz(wynik);
});


function oblicz(){
    
    var dane = pobierzDane();
    if(dane.podatek == true ){
        var oprocentowaniPodatkowe = dane.oprocentowanie - ((dane.oprocentowanie*19/100))
    }
    else{
        var oprocentowaniePodatkowe = oprocentowanie
    }
    var suma = dane.wplata * Math.pow(1+(oprocentowaniePodatkowe/dane.okresKapitalizacji), dane.iloscLat*dane.okresKapitalizacji);
    suma = parseFloat(suma).toFixed(2);
    console.log(dane);
    console.log(suma);
    wyswietlWynik(suma, "wynik");
}

function pobierzDane(){
    var wplata = parseInt(document.getElementById("wplata").value;
     var ilostLat =   parseInt(document.getElementById("ilosc-lat").value;   
    var oprocentowanie =document.getElementById("oprocentowanie").value/100;
    var okresKapitalizacji = parse(document.getElementById("okres-kapitalizacji"));
    var podatek = document.getElementById("podatek").checked;
    var data = {
        
        'wplata':wplata,
        'iloscLat': ilostLat,
        'oprocentowanie': oprocentowanie,
        'okresKapitalizacji':okresKapitalizacji,
        'podatek':podatek,
    }
 return data;
    
    
}

function wyswietlWynik(kwotaDowyswietlenia, idElementu){
    document.getElementById(idElementu).innerHTML = kwotaDowyswietlenia;
}












