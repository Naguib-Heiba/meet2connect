/**
* Template Name: BizLand - v1.2.1
* Template URL: https://bootstrapmade.com/bizland-bootstrap-business-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 21;
  if (window.matchMedia("(max-width: 991px)").matches) {
    scrolltoOffset += 20;
  }
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('#topbar').addClass('topbar-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
      $('#topbar').removeClass('topbar-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
    $('#topbar').addClass('topbar-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);



(function() {
    if (!localStorage.getItem('cookieconsent')) {
        document.body.innerHTML += '\
<div class="cookieconsent" style="position:fixed;padding:20px;left:0;bottom:0;background-color:#eee;color:#000;text-align:center;width:100%;z-index:99999;">\
    This website uses cookies. By continuing to use this website, you agree to their use.<br>\
    <div class="cookieconsentAgree"><a href="#" style="color:#fff; background-color:#ff5400;" class="btn">I agree</a></div>\
</div>\
';
        document.querySelector('.cookieconsentAgree a').onclick = function(e) {
            e.preventDefault();
            document.querySelector('.cookieconsent').style.display = 'none';
            localStorage.setItem('cookieconsent', true);
        };
    }
})();








    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let area=Math.sqrt(canvas.width*canvas.height);
    let radiusLength = canvas.width * canvas.height / 8000;


    let particlesArray;

    let mouse = {
        x: null,
        y: null,
        radius: radiusLength
    }

    window.addEventListener("mousemove", function (event) {
        mouse.x = event.x;
        mouse.y = event.y;

    });
    window.addEventListener("mouseout", function (event) {
        mouse.x = undefined;
        mouse.y = undefined;

    });
    window.addEventListener("resize", function (event) {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        radiusLength = canvas.width * canvas.height / 9000;
        createParticles();


    });

    class Particle {
        constructor(x, y, velX, velY, size, color) {
            this.x = x;
            this.y = y;
            this.velX = velX;
            this.velY = velY;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            //draw a circle and fill it 
            //at posX, posY ,of size, fromAngle 0rad ,to 2pi Rad 
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 1, false);
            ctx.fillStyle = "#000"
            ctx.fill();
            
        }

        update() {
            if (this.x > canvas.width || this.x < 0) {
                this.velX = -this.velX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.velY = -this.velY;
            }

            // collisions
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let dist = Math.sqrt((dx * dx) + (dy * dy));
            if (dist < mouse.radius + this.size) {
                //Buffers on edge of the screens
                const buffer=this.size * 10
                
                if (mouse.x < this.x && this.x < canvas.width - buffer) {
                    this.x += 1;
                }
                if (mouse.x > this.x && this.x > buffer) {
                    this.x -= 2;
                }
                if (mouse.y < this.y && this.y < canvas.height - buffer) {
                    this.y += 1;
                }
                if (mouse.y > this.y && this.y > buffer) {
                    this.y -= 2;
                }
            }

            //moving
            this.x += this.velX;
            this.y += this.velY;
            this.draw();
        }
    }

    function createParticles() {
        particlesArray = [];
        let noOfParticles = canvas.width * canvas.height / 8000;
        
        for (let i = 0; i < noOfParticles; i++) {
            let size = (Math.random() * 5) + 1;
            
            let x = (Math.random() * (innerWidth - 2 * size ) + 2 * size);
            let y = (Math.random() * (innerHeight - 2 * size ) + 2 * size);
            let velX = (Math.random() * 5) - 2.5;
            let velY = (Math.random() * 5) - 2.5;
            let color = "#000"
            // console.log(x + " " + y + " " + size + " " + velX + " " + velY);

            particlesArray.push(new Particle(x, y, velX, velY, size, color));
        }
    }
    function connect(){
        
        let vicinityDist= canvas.width*canvas.height/81;
        for(let i=0;i<particlesArray.length;i++){
            for(let j=i;j<particlesArray.length;j++){
                let distance= Math.pow(particlesArray[i].x-particlesArray[j].x,2) 
                            + Math.pow(particlesArray[i].y-particlesArray[j].y,2);

                let opacity=1-distance/25000;            
                //actually the square of distance

                if (distance < vicinityDist){
                    //draw a line between them
                    ctx.strokeStyle="rgba(0,0,0,"+ opacity +")";
                    ctx.lineWidth=1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x,particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x,particlesArray[j].y);
                    ctx.stroke();

                }            
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connect();
    }



    createParticles();
    animate();
    
