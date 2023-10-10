
/* Start slider of our customers */

$('.owl-carousel').owlCarousel({
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    loop: true,
    nav: true,
    pagination: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },

        850: {
            items: 2
        },

        1500: {
            items: 3
        }
    }
});

/* End slider of our customers */



// Scroll To Top
$(function () {
    $('.to-top').click(function () {
        $('html, body').scrollTop(0);
    });
});
// Scroll To Top



// Start Navbar functions

$(window).scroll(function () {
    if ($(window).scrollTop() === 0) {
        $('nav').css('background', 'none');
    } else {
        $('nav').css('background', '#17484c');
        $('.to-top').fadeIn();
    }
});



$(function () {
    $('.sm-nav-button').click(function () {
        $('.lg-ul').slideToggle();
    });
});

$(document).ready(function () {
    $('.lg-ul').click(function () {
        if ($(window).width() <= 1150) {
            $('.lg-ul').slideToggle();
        }
    });
});

$(window).resize(function () {
    if ($(window).width() > 1150) {
        $('.lg-ul').fadeIn();
    }
})

// End Navbar functions

// Start Slider Function

let sliderP = document.querySelector('.slider p');
let sliderH1 = document.querySelector('.slider h1');


window.addEventListener('load', function () {
    sliderP.setAttribute('style', 'opacity:1;transform: translateX(0px);');
    sliderH1.setAttribute('style', 'opacity:1;transform: translateY(0px);');
});

// End Slider Function 

// Start About function 


$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.about').offset().top - 650) {
            $('.about').animate({
                opacity: 1,
            }, 1000);

            $('.about-box').animate({
                paddingTop: 0,
            }, 0);
        }
    })
})

// End About function

// Start What We Treat
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.treat').offset().top - 650) {
            $('.treat-box').animate({
                opacity: 1,
            }, 500);
        }
    })
})

// End What We Treat


// Start TreatTeq

$(function () {
    $('.treat-teq-seeall').click(function () {
        $('.treat-more').slideDown();
        $('.treat-teq-hideall').fadeIn();
        $(this).fadeOut();
    });
})


$(function () {
    $('.treat-teq-hideall').click(function () {
        $('.treat-more').slideUp();
        $('.treat-teq-seeall').fadeIn();
        $(this).fadeOut();
    });
})
// End TreatTeq


/* Start Blog */

$(function () {
    $('.blog-out1').click(function () {
        $('.blog-inner').fadeIn();
        $('.blog-in1').fadeIn();
        $("html").css("overflow-y", "hidden");
    });
})

$(function () {
    $('.blog-out2').click(function () {
        $('.blog-inner').fadeIn();
        $('.blog-in2').fadeIn();
        $("html").css("overflow-y", "hidden");
    });
})

$(function () {
    $('.blog-out3').click(function () {
        $('.blog-inner').fadeIn();
        $('.blog-in3').fadeIn();
        $("html").css("overflow-y", "hidden");
    });
})

$(function () {
    $('.close-blog').click(function () {
        $('.blog-inner').fadeOut();
        $('.blog-inner .blog').fadeOut();
        $("html").css("overflow-y", "scroll");
    })
});


$(window).on('load', function () {
    $('html, body').scrollTop(0);
    $('html').css('overflow-y', 'scroll');
    $('html').delay(5000).css('scroll-behavior', 'smooth');
    $('.loading').fadeOut(2000);
});

/* End BLOG */



//


// 