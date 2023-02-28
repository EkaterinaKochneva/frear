$(document).ready(function(){
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

	// Cлайдер выполненных работ
	const swiperСompleted = new Swiper('.completed-gallery__slider', {
		loop: true,
		slidesPerView: 1,
		draggable: true,
		autoplay: {
			delay: 5000,
		  },

        navigation: {
        nextEl: '.completed-gallery__button-next',
        prevEl: '.completed-gallery__button-prev',
        },
		pagination: {
			el: '.completed-gallery__pagination',
			clickable: true,
		  },
	});

	// Плавная прокрутка
	$(".smooth-scroll-link-js").on("click", function (e) {
		e.preventDefault();
		var get_id = $(this).attr('href');
		var target = $(get_id).offset().top; 
		$("html, body").animate({ scrollTop: target }, 500);
	});

	// Аккардион FAQ
	$('.faq__btn').click(function(){
		$(this).toggleClass('active');
		$(this).parent().next().slideToggle();
	});
})