'use strict'
//var paragraf = document.getElementById('copy');
//var btnCopy = document.getElementById('btn-c');
//var btnPaste = document.getElementById('btn-p');
//var output = document.getElementById('output');
//
//console.log(btnCopy);
//var txt = "";
//
//btnCopy.addEventListener('click', function(){
//    txt = paragraf.innerHTML;
//    console.log(txt);
//    
//});
//
//btnPaste.addEventListener('click', function(){
//    if(txt ==""){
//        output.innerHTML="Skopiuj tekst";
//        
//    }
//    else{
//        output.innerHTML = txt;
//    }
//   
//});

var output = document.getElementById('output');

var input= document.getElementsByTagName('input')[0] ;


var btn = document.querySelector("#btn");
console.log(btn);
btn.addEventListener('click', function(e){
   e.preventDefault(); 
var color = input.value;
   output.style.backgroundColor= color; 
    
});
















