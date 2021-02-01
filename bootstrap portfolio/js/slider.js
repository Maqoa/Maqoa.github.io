'use strict';

$(function () {
    
//    var slideShow = $('.slide-show');
//    var slideCount = $('.single-slide').length;
//    var slideWidth = 100/slideCount;
//    var slideIndex = ('i=0');
//    
//    slideShow.css({'width': '400%'});
//    
//    var slideProc=(slideWidth+'%');
//   
//    slideShow.find('.single-slide').css({
//       
//    })
////      do tad dziala
////        .each(function(index){
////        'margin-left',25%
////    })
//    ;
//    
//    console.log("slide show" + slideShow);
//    console.log("liczenie slidow: " + slideCount);
//    console.log('podzielenie slajdow: ' + slideWidth);
//    console.log('wartosc slideWidth: ' + slideProc);
//    console.log(slideIndex);
    
    //dotad moje wlasne
    
    
    //to co na zajeciach
    
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100/slideCount;
    var slideIndex  = 0;
    
    slideShow.css('width', 100*slideCount + '%');
    
    slideShow.find('.single-slide').each(function(index){
        $(this).css({
            width:slideWidth + '%',
            'margin-left': slideWidth * index + '%'
        });
    });
    
    $('.prev-slide').click(function(){
        slide(slideIndex -1);
    })
    
    $('.next-slide').click(function(){
        slide(slideIndex +1);
    });
    
    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex >= slideCount)
            return;
        var slideCaption = $('.slide-caption');
        var marginLeft = newSlideIndex * -100;
        slideCaption.hide();
        slideShow.animate({
            'margin-left':marginLeft + '%'}, 400, function(){
            slideIndex = newSlideIndex;
            slideCaption.fadeIn();
        }
    )
}
    
    
    
  
})