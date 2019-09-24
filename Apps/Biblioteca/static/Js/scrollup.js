$(document).ready(function(){

    $('.up').hide();
    $(window).scroll(function(){
        if($(this).scrollTop()>10){
            $('.up').slideDown(300);
        }else{
            $('.up').slideUp(300);
        }
    });
});