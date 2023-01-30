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
})