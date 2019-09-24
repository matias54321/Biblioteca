function Descripcion(){
    var mostrar= $('.descripcionLibro');
    mostrar[0].style.display="block";
    var ocultar=$('.descripcionAutores');
    ocultar[0].style.display="none";   
}

function Autores(){
    var mostrar= $('.descripcionLibro');
    mostrar[0].style.display="none";
    var ocultar=$('.descripcionAutores');
    ocultar[0].style.display="block";
}