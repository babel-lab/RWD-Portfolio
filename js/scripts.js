  //畫面縮小時選單變化
  var num = 50; //number of pixels before modifying styles
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('#top').addClass('scrolled');
    } else {
        $('#top').removeClass('scrolled');
    }
  });
  
  //回最上面
  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
  });