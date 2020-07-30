$(window).on('scroll', function () {
    'use strict';
    if ($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});
$('#toTop').on('click', function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, Opera
}