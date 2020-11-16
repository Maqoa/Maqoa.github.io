'use strict';
var btn = document.getElementById('wyslij');
var outpout = document.querySelector('#outpout')


btn.addEventListener('click', function(event) {
                     event.preventDefault();
    
  var imie = document.getElementById("imie").value;
  var nazwisko = document.getElementById("nazwisko").value;
//    console.log(btn);
//    console.log(imie, nazwisko);
   outpout.innerHTML = "<p class='myClass' style='font-size:2rem;'>imie: " + imie +"</p><p>nazwisko: "+ nazwisko + "</p>"  ;
});

console.log(btn);