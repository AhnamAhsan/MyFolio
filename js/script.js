$(function () {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        $('#backToTop').fadeIn(1000)
      } else {
        $('#backToTop').fadeOut(1000)
      }
    })
  
    $('#backToTop').on('click', function () {
      $('html,body').animate({
        scrollTop:0,
      },1000)
    })
     $(window).on('load', function () {
      $('.preloader').fadeOut(1000);
    })
    $("a").on("click", function (event) {
        event.preventDefault();
        if (this.hash !== "") {
          var hash = this.hash;
    
          $("html,body").animate(
            {
              scrollTop: $(hash).offset().top,
            },
            1000
          );
        }
      });
      $(window).on('scroll', function () {

        if ($(window).scrollTop() > $('#header').height()) {
           $('#header').addClass('menu_animate')
        } else {
           $('#header').removeClass('menu_animate')
        }
     })

     $('.banner_slider').slick({
      prevArrow:'<i class="banner_slider_icon fas fa-arrow-left"></i>',
      nextArrow: '<i class="banner_slider_icon fas fa-arrow-right"></i>',
      dots: true,
      dotsClass: 'banner_slider_dots',
      fade:true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed:2000,
   })
  })