var slideIndex=0;
var slides=document.getElementsByClassName("my_slide");
var dots=document.getElementsByClassName("dot");
Automatico();

function Manual(no) {
    ClearSlideElements();
    slideIndex=no;
    slides[no].style.display = "block";    
    dots[slideIndex].className += " active";
}

function Automatico(){
    FixCurrentSlide(slideIndex);
    ClearSlideElements();
    slides[slideIndex].style.display = "block";  
    dots[slideIndex].className += " active";
    slideIndex++;   
    setTimeout(Automatico,4000);

}

function ClearSlideElements(){
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
}

function FixCurrentSlide(slide_index){    
    if(slide_index > 2){
        slideIndex=0;
    }
    if(slide_index<0){
        slideIndex=2;
    }     
}
