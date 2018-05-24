$("#btn1").click(function(){
    
$.ajax({ 
    type: 'GET', 
    url: 'http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function(wynik){
        
$.each(wynik, function(index, wartosc){
    
$("div").append(index + ": " + wartosc + "\n");
        });
}
});
});