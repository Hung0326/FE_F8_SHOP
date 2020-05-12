$(document).ready(function () {
    $('.box1').css("display", "none").animate({marginLeft:-100,opacity:0})
    // $(".box1").css("display", "none");

    $('.box2').click(function (e) { 
        e.preventDefault();
        // $('.box2').animate({width:500})
        $('.box2').animate({marginLeft:-100,opacity:0})
        $('.box1').css("display", "block").animate({marginLeft:0,opacity:1})
    });

    $('.box1').click(function (e) { 
        e.preventDefault();
        // $('.box2').animate({width:500})
        $('.box1').animate({marginLeft:-100,opacity:0})
        $('.box2').animate({marginLeft:0,opacity:1})
    });
});
