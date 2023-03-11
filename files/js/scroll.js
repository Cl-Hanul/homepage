var swiper = new Swiper(".mySwiper1", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var swiper = new Swiper(".swiper-container2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// 스크롤시 상단바색 변경
$(window).scroll(function () {
var scrollValue = $(document).scrollTop();
if(scrollValue>100) {
$(".top-bar").css("background-color","rgba(0,0,0,0.9)");
$(".top-bar").removeClass("absolute");
$(".top-bar").addClass("fixed");
$(".top-bar").css("transform","translateY(100%)");
}
else {
$(".top-bar").css("background-color","");
$(".top-bar").removeClass("fixed");
$(".top-bar").addClass("absolute");
$(".top-bar").css("transform","");
}
});