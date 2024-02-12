$(document).ready(function () {
  $('.princing-plan').mouseenter(function () {
    $(this).addClass('active');
  });
  $('.princing-plan').mouseleave(function () {
    $('.princing-plan').removeClass('active'); // remove active class from any open
  });
});
