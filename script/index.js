// style the navbar

var open = document.querySelector(".open");
var navbar_none = document.querySelector(".navbar_none");
let i = 0;

open.addEventListener("click", ()=>{
  navbar_none.classList.toggle("navbar_block");
  
});


// Our service
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

