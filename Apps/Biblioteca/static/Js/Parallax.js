$(document).ready(function(){
    var ancho = $(window).width();
 
    // Si trabajamos con una imagen desactivamos el background-size:cover;
    if (ancho <= 1350){
        $('body').css({
            'background-size': 'initial'
        });
    }

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion = barra * 0.10;

		$('body').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});

});