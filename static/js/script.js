document.addEventListener("DOMContentLoaded", function(){

const track = document.querySelector(".carousel-track");

if(!track) return;   // stop JS if carousel not present

const slides = document.querySelectorAll(".project-slide");
const nextBtn = document.querySelector(".right-btn");
const prevBtn = document.querySelector(".left-btn");

let index = 0;

function moveSlide(){
track.style.transform = `translateX(-${index * 100}%)`;
}

/* NEXT BUTTON */

if(nextBtn){
nextBtn.addEventListener("click", function(){

index++;

if(index >= slides.length){
index = 0;
}

moveSlide();

});
}

/* PREVIOUS BUTTON */

if(prevBtn){
prevBtn.addEventListener("click", function(){

index--;

if(index < 0){
index = slides.length - 1;
}

moveSlide();

});
}

/* AUTO SLIDE */

setInterval(function(){

index++;

if(index >= slides.length){
index = 0;
}

moveSlide();

},10000);

});