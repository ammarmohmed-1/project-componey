// style the navbar

var open = document.querySelector(".open");
var navbar_none = document.querySelector(".navbar_none");
let i = 0;

open.addEventListener("click", ()=>{
  navbar_none.classList.toggle("navbar_block");
  
});

//  change a background header

var header = document.querySelector(".headerImg_1");
console.log(header);

var change_img = ['url("../imges/bg-1.jpg")','url("../imges/bg-2.jpg")','url("../imges/bg-3.jpg")','url("../imges/bg-4.jpg")','url("../imges/bg-5.jpg")',]

setInterval(()=> {
  header.style.backgroundImges = change_img[i]
  i++
  if(i = change_img.length){
    i=0
  }
}, 1000);

// Our service
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

