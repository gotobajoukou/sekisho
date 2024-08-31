$(function () {
  $('.js-btn').on('click', function () {       
    $('.nav , .btn-line').toggleClass('open'); 
  })
});

$('nav li a').on('click', function(event) {
  $('.open').trigger('click');
});


window.addEventListener("DOMContentLoaded", () => {
  const infiniteSlider = new Swiper(".infinite-slider", {
    loop: true,
    loopedSlides: 2,
    slidesPerView: "auto",
    speed: 15000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
});


  function delayScrollAnime() {
    var time = 0.2;
    var value = time;
    $('.delayScroll').each(function () {
      var parent = this;         
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var childs = $(this).children();  
      
      if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
        $(childs).each(function () {
          
          if (!$(this).hasClass("fadeUp")) {
            
            $(parent).addClass("play"); 
            $(this).css("animation-delay", value + "s");
            $(this).addClass("fadeUp");
            value = value + time;
            
            var index = $(childs).index(this);
            if((childs.length-1) == index){
              $(parent).removeClass("play");
            }
          }
        })
      }
    })
  }
  
    $(window).scroll(function (){
      delayScrollAnime();
    });


function TextTypingAnime() {
  $('.main h1').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var thisChild = "";
    if (scroll >= elemPos - windowHeight) {
      thisChild = $(this).children();
      thisChild.each(function (i) {
        var time = 100
        $(this).delay(time * i).fadeIn(time);
      });
    } else {
      thisChild = $(this).children();
      thisChild.each(function () {
        $(this).stop();
        $(this).css("display", "none");
      });
    }
  });
}

$(window).on('load', function () {
  var element = $(".main h1");
  element.each(function () {
    var text = $(this).html();
    var textbox = "";
    text.split('').forEach(function (t) {
      if (t !== " ") {
        textbox += '<span>' + t + '</span>';
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);

  });

  TextTypingAnime();
});

