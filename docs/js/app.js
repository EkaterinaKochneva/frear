$(document).ready(function(){

    // Кнопки в шапке
    $('.body-header__burger').click(function () {
        $('.mobile-header').addClass('active');
        $('body').addClass('fixed-mb');
    });
    $('.mobile-header__close').click(function () {
        $('.mobile-header').removeClass('active');
        $('body').removeClass('fixed-mb');
    });

    $('.mobile-header .menu-top__icon-arrow').click(function () {		
		let parent = $(this).parents('.menu-top__item');
        parent.toggleClass("selected");
		parent.children(".menu-top__submenu").slideToggle();
	});

    $('.mobile-header .bottom-header__icon').click(function () {		
		let parent = $(this).parents('.bottom-header__item');
        parent.toggleClass("selected");
		parent.children(".bottom-header__submenu").slideToggle();
	});

    // Cлайдер на главной
	const swiperTopBanner = new Swiper('.top-banner__slider', {
		loop: true,
		slidesPerView: 1,
		draggable: true,
		// autoplay: {
		// 	delay: 5000,
		//   },

        navigation: {
        nextEl: '.top-banner__button-next',
        prevEl: '.top-banner__button-prev',
        },

		pagination: {
			el: '.top-banner__pagination',
			clickable: true,
		  },
	});

})