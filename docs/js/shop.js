$(document).ready(function(){
    
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
    

    // Tabs
	$('.tabs__caption').on('click', '.tabs__btn:not(.active)', function (e) {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabs').find('.tabs__content').hide().removeClass('active')
			.eq($(this).index()).fadeIn(50).addClass('active');
	});


    $('.line-filter__sort-btn').click(function () {
        $('.line-filter__sort').slideToggle();
    });


})