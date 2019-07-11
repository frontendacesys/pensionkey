///////////////////////
/////// MAIN.js ///////
///////////////////////

$(function() {
  $(".scrollToP").click(function() {
    $("html,body").animate({ scrollTop: $("body").offset().top }, "1600");
    return false;
  });
});
