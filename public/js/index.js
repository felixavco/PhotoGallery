$(document).ready(() => {

  // Scroll Effect
  const scroll = new SmoothScroll('a[href*="#"]');




  $('.parallax').parallax();
  $('.slider').slider();

  /* menu effect */
    let flag = true;
    const menuBtn = $('.menu-btn');
    const menu = $('#menu');

    $('section, li').on('click', () => {
        menu.animate({left: '-100%'}, 1000);
        flag = true;
    })

    menuBtn.on('click', () => {

      if(flag){
        menu.animate({left: '0'}, 500);
        flag = false;
      } else {
        menu.animate({left: '-100%'}, 1000);
        flag = true;
      }
    })

    menuBtn.hover(() => menuBtn.removeClass('pulse'));
  /* menu effect */
  
  document.querySelector('#year').innerHTML = new Date().getFullYear();



});
    