jQuery.fn.exists = function () {
    return $(this).length;
};

jQuery(document).ready(function ($) {

});


$('.custom1').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    smartSpeed:450
});

$('.owl-carousel-first').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.owl-carousel-second').owlCarousel({
    loop:true,
    nav:false,
    autoHeight:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});

$('.owl-carousel-third').owlCarousel({
    loop:true,
    margin:58,
    nav:true,
    navText: ['<span class="btn-prev"><img src="img/arrow-left.png" alt=""></span>', '<span class="btn-next"><img src="img/arrow-right.png" alt=""></span>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('.custom13').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    smartSpeed:650
});


// Open Lightbox
$('.btn').click(function(){
    $('.lightbox').fadeIn();
});

// Close Lightbox
$('.fa-close').click(function(){
    $('.lightbox').fadeOut();
});