const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
  // spaceBetween : 30, // 슬라이드간 간격
  slidesPerGroup : 3,
  loop: true,
  loopFillGroupWithBlank : true,
  // autoplay: {
  //   delay: 5000,
  // },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});