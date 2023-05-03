const swiper = new Swiper(".coverflowswiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-right",
    prevEl: ".swiper-left",
  },
});

const fadeswiper = new Swiper(".fade-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
   navigation: {
    nextEl: ".fade-swiper-right",
    prevEl: ".fade-swiper-left",
  },
});
