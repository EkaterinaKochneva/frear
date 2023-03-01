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

	// Фиксация меню в шапке
	$(window).on('scroll', function () {
		let posScrol = $('.top-header').outerHeight() + $('.body-header').outerHeight();
		if ($(this).scrollTop() > posScrol) {
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
	});

	// Cлайдер сертификатов
	const swiperCertificates = new Swiper('.certificates__slider', {
		loop: true,
		slidesPerView: 1,
		draggable: true,
		autoplay: {
			delay: 5000,
		  },

		breakpoints: {
			1199: {
				slidesPerView: 4,
				spaceBetween: 9,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 5,
			},
			575: {
				slidesPerView: 2,	
				spaceBetween: 5,
			}
		},

        navigation: {
        nextEl: '.certificates__button-next',
        prevEl: '.certificates__button-prev',
        },

		pagination: {
			el: '.certificates__pagination',
			clickable: true,
		  },
	});

	// Высота заголовка в карточке акций (для одинакового расположения блока с ценой)	
	function titleSaleHeight(){
		if ($(window).width() > '992'){
			$('.sale-block__row').each(function() {
				let lengthRow = $(this).find('.sale-item__title').length;
				// console.log(lengthRow);

				let heightTitleBase = 0;		
				for ( let i = 0; i < lengthRow; i++ ) {
					let heightTitle = $(this).find('.sale-item__title').eq(i).outerHeight();
					if (heightTitleBase < heightTitle) {
						heightTitleBase = heightTitle;
					} 			
				}
				// console.log(heightTitleBase);
				for ( let i = 0; i < lengthRow; i++ ) {
					$(this).find('.sale-item__title').outerHeight(heightTitleBase);			
				}
			})
		} 
	}
	titleSaleHeight();

	// Модальные окна
	const link = ".link-modal-js";
	$(link).fancybox({
		arrows: false,
		infobar: false,
		touch: false,
		type: 'inline',
		autoFocus: false,
		i18n: {
			en: {
				CLOSE: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад" 

			}
		}
	});
	$(".modal-close-js").click(function () {
		$.fancybox.close();
	});
	$.fancybox.defaults.backFocus = false;

	// Аккардион 
	$('.accordion-block__more').click(function(){         

		if(!$(this).hasClass('active')){	
			$(this).addClass('active').text('Скрыть');
			$(this).parents('.accordion-block__item').find('.accordion-block__desc').slideDown(); 
				
		} else {	
			$(this).removeClass('active').text('Подробнее');
			$(this).parents('.accordion-block__item').find('.accordion-block__desc').slideUp(); 
		}
	});

	// Tabs
	$('.tabs__caption').on('click', '.tabs__btn:not(.active)', function (e) {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabs').find('.tabs__content').hide().removeClass('active')
			.eq($(this).index()).fadeIn(50).addClass('active');
	});

	// Прокрутка наверх страницы
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('.button-up').addClass('scroll');
		} else {
			$('.button-up').removeClass('scroll');
		}
	});
	$('.button-up').click(function(){
		$('body,html').animate({
		scrollTop: 0
		}, 500);
		return false;
	});

	// Фиксация блока консультанта
	$(window).scroll(function(){
		if ($('.page__row').outerHeight(true) > 1000){
			let posScrol = $('.promo-sidebar').offset().top + $('.promo-sidebar').outerHeight();
			let contentHeight = $('.page__row').offset().top + $('.page__row').outerHeight()  - $('.sidebar__consultant').outerHeight() - 60;
			console.log(contentHeight);
			if ($(window).scrollTop() <= posScrol)
				$('.sidebar__consultant').removeClass('fixed');
			else $('.sidebar__consultant').addClass('fixed');
			if ($(window).scrollTop() > contentHeight){
				$('.sidebar__consultant').addClass('fixed-2')
			} else {
				$('.sidebar__consultant').removeClass('fixed-2');
			}
		}
	});


})
