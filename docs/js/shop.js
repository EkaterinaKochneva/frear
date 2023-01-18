$(document).ready(function(){
    
    $('.brands-sidebar__title').click(function () {
        $(this).toggleClass("collapse").next().slideToggle();
    });
    
    $('.category-filter__main-title').click(function () {
        $(this).toggleClass("collapse").next().slideToggle();
    });

})