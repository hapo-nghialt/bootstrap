$(document).ready(function() {
    $('.btn-header').click(function() {
        $('.btn-icon').toggleClass('fa-times');
        $('.btn-icon').toggleClass('fa-bars');
    });

    $(".btn-chat").click(() => {
        $("div.chat-content").fadeToggle();
    });

    function myFunction(x) {
        if (x.matches) {
            $('.comment').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows:true,
                prevArrow:'<button type="button" class="button-prev fas fa-angle-left"></button>',
                nextArrow:'<button type="button" class="button-next fas fa-angle-right"></button>',
            });
        } else {
            $('.comment').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows:true,
                prevArrow:'<button type="button" class="button-prev fas fa-angle-left"></button>',
                nextArrow:'<button type="button" class="button-next fas fa-angle-right"></button>',
            });
        }
    }
      
    var x = window.matchMedia("(max-width: 768px)")
    myFunction(x) 
    x.addListener(myFunction)
});
