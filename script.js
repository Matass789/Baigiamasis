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