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

	// Cлайдер команды
	const swiperTeam = new Swiper('.our-team__slider', {
		loop: true,
		slidesPerView: 1,
		draggable: true,
		autoplay: {
			delay: 5000,
		  },

		breakpoints: {

			991: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			575: {
				slidesPerView: 2,	
				spaceBetween: 10,
			}
		},

        navigation: {
        nextEl: '.our-team__button-next',
        prevEl: '.our-team__button-prev',
        },
		pagination: {
			el: '.our-team__pagination',
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


})
