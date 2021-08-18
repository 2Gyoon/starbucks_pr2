const search = document.querySelector(".search");
const searchInput = search.querySelector(".search input");

search.addEventListener("click", function(){
  searchInput.focus();
});

searchInput.addEventListener("focus", function(){
  search.classList.add("focused");
  searchInput.setAttribute("placeholder", "통합검색");

});
searchInput.addEventListener("blur", function(){
  search.classList.remove("focused");
  searchInput.setAttribute("placeholder", "");

});

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  });
});

const badgeEls = document.querySelector("header .badges");
const toTop = document.querySelector("#to_top");

window.addEventListener("scroll", function(){
  if(window.scrollY > 500){
    gsap.to(badgeEls, 0.6, {
      opacity: 0,
      display: "none"
    });
    gsap.to(toTop, 0.6, {
      x : -130
    });
  }else{
    gsap.to(badgeEls, 0.6, {
      opacity: 1,
      display: "block"
    });
    gsap.to(toTop, 0.6, {
      x : 0
    });
  }
});

toTop.addEventListener("click", function(){
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});

new Swiper(".notice_line .swiper-container", {
  direction: "vertical",
  loop: true,
  autoplay: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView : 3,
  loop: true,
  autoplay: true,
  centeredSlides: true,
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next"
  }
});

new Swiper(".awards .swiper-container", {
  slidesPerView: 5,
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  navigation:{
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  }
});

const promotionEl = document.querySelector(".promotion");
const promo_toggle = document.querySelector(".promo_toggle");
let toggle_hide = false;

promo_toggle.addEventListener("click", function(){
  toggle_hide = !toggle_hide;
  if(toggle_hide){
    promotionEl.classList.add("hide");
  }else{
    promotionEl.classList.remove("hide");
  }
});

function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingEls(floating, delay, size){
  gsap.to(floating, 1, {
    delay: random(0, delay),
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
  })
};

floatingEls(".floating1", 1, 15);
floatingEls(".floating2", 0.5, 15);
floatingEls(".floating3", 1.5, 20);


const thisYear = document.querySelector(".this_year");
thisYear.textContent = new Date().getFullYear();

