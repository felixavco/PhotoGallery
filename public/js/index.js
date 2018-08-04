$(document).ready(() => {
  // Scroll Effect
  const scroll = new SmoothScroll('a[href*="#"]');

  //Materialize inicializations
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
  
  document.querySelector('#year').innerHTML = new Date().getFullYear();

  /* Implement Waypoints */
  const gal1 = $('.gal1');
  const gal2 = $('.gal2');
  const gal3 = $('.gal3');
  const about = $('.about-wrapper');
  const services = $('.service');
  const form = $('.form');
  const testimonialTitle = $('.testimonial-title');
  const testimonials = $('.testimonials');
  const socialIcon = $('ul.social-cont > li');
  const footer = $('.tm > h5');
  const signature = $('.signature > h6');





  const wpoint = (element, animation, offset = '30') => {
    element.waypoint(() => {
      element.addClass(animation).css({opacity: '1'})
    }, {offset: offset+'%'})
  }

  wpoint(gal1, 'fadeInUp', '75');
  wpoint(gal2, 'fadeInUp', '50');
  wpoint(gal3, 'fadeInUp', '75');
  wpoint(about, 'fadeInUp', '95');
  wpoint(services, 'fadeInUp', '95');
  wpoint(form, 'fadeInUp', '95');
  wpoint(testimonialTitle, 'fadeInUp', '100');
  wpoint(testimonials, 'fadeInUp', '100');
  wpoint(socialIcon, 'fadeInUp', '95');
  wpoint(footer, 'fadeInUp', '95');
  wpoint(signature, 'fadeInUp', '95');
});
    