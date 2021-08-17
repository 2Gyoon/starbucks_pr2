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
