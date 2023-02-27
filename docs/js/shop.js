$(document).ready(function(){
    
    // Спойлеры в фильтре в сайдбаре
    $('.brands-sidebar__title').click(function () {
        $(this).toggleClass("collapse").next().slideToggle();
    });
    
    $('.category-filter__main-title').click(function () {
        $(this).toggleClass("collapse").next().slideToggle();
    });

    $('.category-filter__more-btn').click(function () {
        $(this).parent('.category-filter__item').toggleClass('active');
        if ($(this).parent('.category-filter__item').hasClass('active')) {
            $(this).parent('.category-filter__item').find('.hidden').addClass('visible');
            $(this).text('Cкрыть');          
            } else {                  
                $(this).parent('.category-filter__item').find('.hidden').removeClass('visible');
                $(this).text($(this).data('text'));
            }
    });

    // Фильтр для адаптива
    $('.filter-btn-js').click(function () {
		$('.category-filter').addClass('active');
		$('body').addClass('fixed-mb');
	});
	$('.category-filter__close-btn--js').click(function () {
		$('.category-filter').removeClass('active');
		$('body').removeClass('fixed-mb');
	});
	$('.category-filter__submit').click(function () {
		$('.category-filter').removeClass('active');
		$('body').removeClass('fixed-mb');
	});
    
    // Сортировка для адаптива
    $('.line-filter__sort-btn').click(function () {
        $('.line-filter__sort').slideToggle();
    });



    // Основной слайдер в карточке товара
    const swiperProductThumbs = new Swiper('.product-thumbs__swiper', {

		slidesPerView: 'auto',
		spaceBetween: 9,
	});

	const swiperProduct = new Swiper('.product-slider__swiper', {

		slidesPerView: 1,
		draggable: true,
		thumbs: {
			swiper: swiperProductThumbs,
		  },
	});


})