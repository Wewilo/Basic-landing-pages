

const elementsArray = document.querySelectorAll("ul li");

let pelements = document.querySelectorAll("ul li a p");

let department = document.querySelectorAll(".departments > div");




    elementsArray.forEach(function(elem) {
      elem.addEventListener("click", function() {
        var x = elem.id;
        var y = document.getElementById(x).children[0].children[1];
        
        for (const i of pelements) {
            if(y!==i){
              i.classList.add("d-none")
            }
            else{
              i.classList.remove("d-none")
            }
        }

        for (const i of department) {
          if(i.classList.contains(x)){
            i.classList.remove("d-none")
          }
          else{
            i.classList.add("d-none")
          }
      }

        

        
      });
  });




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}



