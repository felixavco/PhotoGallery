$(document).ready(function(){
  $('.parallax').parallax();
  $('.slider').slider();

  /* menu effect */
    let flag = true;
    const menu = $('#menu');

    $('section, li').on('click', () => {
        menu.animate({left: '-100%'}, 1000);
        flag = true;
    })

    $('.menu-btn').on('click', () => {

      if(flag){
        menu.animate({left: '0'}, 500);
        flag = false;
      } else {
        menu.animate({left: '-100%'}, 1000);
        flag = true;
      }

    })
  /* menu effect */
  
  document.querySelector('#year').innerHTML = new Date().getFullYear();

});
    