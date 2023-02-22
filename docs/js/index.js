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
		on: {
		init() {
			this.el.addEventListener('mouseenter', () => {
			this.autoplay.stop();
			});
	
			this.el.addEventListener('mouseleave', () => {
			this.autoplay.start();
			});
		}
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


})