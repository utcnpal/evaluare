var resurse = document.getElementById("resurse")

let slideIndex = 0;
showSlides();

resurse.addEventListener("dblclick", showSlides)
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i[.classList.remove("active");  
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}    
 
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("active");
 
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
  slideIndex += n;
  let slides = document.getElementByClassName("mySlides");

   if (slideIndex > slides.length) {
      slideIndex = 1;
  }

  if (slideIndex < 1) {
      slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.dispkay = "block";
}

document.addEventListener("DOMContentLoaded", function () {
});







