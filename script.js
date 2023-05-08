
// Headeris
window.onscroll = function() {myFunction()};


var header = document.getElementById("myHeader");


var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// .....




// Karusele

const myCarouselElement = document.querySelector('#hero-carousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 9000,
  wrap: true,
  pause: false,
  
})

const myCarousel = document.getElementById('hero-carousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  direction("left")
})

// ....



// Akordeonas

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// ....