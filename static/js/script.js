document.addEventListener("DOMContentLoaded", function(){

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".project-slide");

const nextBtn = document.querySelector(".right-btn");
const prevBtn = document.querySelector(".left-btn");

let index = 0;
const slideWidth = 100;

function moveSlide(){
track.style.transform = `translateX(-${index * slideWidth}%)`;
}

/* NEXT BUTTON */

nextBtn.addEventListener("click", function(){

index++;

if(index >= slides.length){
index = 0;
}

moveSlide();

});

/* PREVIOUS BUTTON */

prevBtn.addEventListener("click", function(){

index--;

if(index < 0){
index = slides.length - 1;
}

moveSlide();

});

/* AUTO SLIDE */

setInterval(function(){

index++;

if(index >= slides.length){
index = 0;
}

moveSlide();

},10000);

});