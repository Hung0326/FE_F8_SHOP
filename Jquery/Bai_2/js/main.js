$(function() {
    $('.content').slideUp();

    $('.box__title').click(function (e) { 
        e.preventDefault();
        $(this).next('.content').slideToggle();
        $(this).toggleClass('box__title--active');
        // $(".box__icon-down").css("display", "none");
        // $('.content').slideDown();
    });
});
