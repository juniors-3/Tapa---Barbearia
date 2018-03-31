//Menu Sanduiche

$('.mobile-btn').click(function () {
    $(this).toggleClass('active');

    $('.aqui').toggleClass('on');
});

//Scroll Suave Interno

$('.menu a[href^="#"]').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    
    $('html, body').animate({
        scrollTop: targetOffset
    },500);
});
