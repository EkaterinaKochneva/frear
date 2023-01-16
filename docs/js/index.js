$(document).ready(function(){

    // Топ слайдер на главной
	const swiperTopBanner = new Swiper('.top-banner__slider', {
		loop: true,
		slidesPerView: 1,
		draggable: true,
		autoplay: {
			delay: 5000,
		  },

        navigation: {
        nextEl: '.top-banner__button-next',
        prevEl: '.top-banner__button-prev',
        },

		pagination: {
			el: '.top-banner__pagination',
			clickable: true,
		  },
	});

    // Cлайдер выполненных работ
	const swiperCompletedWork = new Swiper('.completed-work__slider', {
		loop: true,
		slidesPerView: 1,
		draggable: true,
		autoplay: {
			delay: 5000,
		  },

        navigation: {
        nextEl: '.completed-work__button-next',
        prevEl: '.completed-work__button-prev',
        },

		pagination: {
			el: '.completed-work__pagination',
			clickable: true,
		  },
	});

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


})