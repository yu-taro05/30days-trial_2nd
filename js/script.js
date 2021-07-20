//Q&A
$('.qa_top').click(function() {
  $(this).next().slideToggle();
  $(this).children('.qa_icon').toggleClass('is-open');
});

//ページスクロール
$(window).on("scroll", function() {
  if (100 < $(this).scrollTop()) {
  $('.to-top').addClass( 'is-show' );
  } else {
  $('.to-top').removeClass( 'is-show' );
  }
});

$('.to-top').click(function() {
  $('body, html').animate( {
    scrollTop: 0
  }, 500);
});

//ヘッダーナビ
jQuery('a[href^="#"]').click(function() {
  let header = jQuery(".header").innerHeight();
  let speed = 300;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "href": id);
  let position = 0;
  if(id != '#') {
      position = $(id).offset().top - header;
  }
  jQuery("html, body").animate ( {
    scrollTop: position
  }, speed);
  return false;
});

//ドロワーメニュー
$(document).ready(function() {
  $('.drawer').drawer();
});

$('.header_menu').click(function() {
  $('.header_menu').toggleClass('header_menu_close');
});

//スワイパー
var swiper = new Swiper('.swiper-container', {
  width: 275,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    1200: {
      width: 400,
      spaceBetween: 40,
    },
  },
});

//ナビゲーション
$('.header_nav li a').click(function() {
  $('.header_nav li a').removeClass('.is-active');
  $(this).addClass('.is-active');
});

//WOW
new WOW().init();

//フォーム
$(document).ready(function () {

  const $submitBtn = $('#submit-btn')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #contact-form_checkbox').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});