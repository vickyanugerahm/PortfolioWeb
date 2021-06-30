// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    var tujuan = $(this).attr('href');
    // tangkap elemen tsb
    var elemenTujuan = $(tujuan);

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});

// menyimpan parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/5 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/3 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
    });

    // portfolio
    // if( wScroll > $('.portfolio').offset().top - 200 ){
    //     $('portfolio .thumbnail').addClass('muncul');
    // }

}); 
















































