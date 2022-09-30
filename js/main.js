$(function () {




    //esg btn hover
    $('.btn_box ul li').hover(function () {
        $(this).find('.esg_btn').fadeIn();
        var lineindex = $(this).index() + 1;

        //Esg line 이미지 변경
        $('.esg_line').children('img').eq(lineindex).stop().fadeIn();
        $('.esg_line').children('img').eq(0).stop().fadeOut();

    }, function () {
        $(this).find('.esg_btn').fadeOut();

        //Esg line 이미지 변경
        $('.esg_line').children('img').stop().fadeOut();
        $('.esg_line').children('img').eq(0).stop().fadeIn();
    });

    //material btn hover

    //red bar
    $('#material .m_box ul li').hover(function () {
        if ($(this).index() == 1) {
            $('.lamp').animate({
                left: '390px'
            }, 100)
        } else if ($(this).index() == 2) {
            $('.lamp').animate({
                left: '780px'
            }, 100)
        } else {
            $('.lamp').animate({
                left: '0'
            }, 100)
        }
    });

    //img opacity
    $('#material .m_box ul li').mouseover(function () {
        $(this).find('.m_img div').css({
            opacity: 0
        });
        $(this).siblings().find('.m_img div').css({
            opacity: '0.4'
        });
    });

    //swiper 
    var swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 500,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });

    //swiper index
    var is_done = true; //한번만 실행 되도록 진행
    swiper.on('transitionEnd', function () {
        if (swiper.realIndex == 1) {
            $('.esg_title').addClass('txt-ani-active');
            $('.btn_box ul').animate({
                opacity: 1
            });
            $('.mo_btn_box').animate({
                opacity: 1
            }, 1000);
        } else if (swiper.realIndex == 2) {
            $('.m_title').addClass('txt-ani-active');
            $('.m_line').animate({
                'width': '100%'
            }, 1000);
            $('.m_btn .l_wrapper').animate({
                opacity: 1
            }, 1000);
        } else if (swiper.realIndex == 3) {

            $('#focus .f_btn_box ul').animate({
                opacity: 1
            });
            $('.txtbase').addClass('txt-ani-active');
            $('#focus div .l_wrapper h3 span').animate({
                top: 0
            });
            $('.f_icon svg').animate({
                opacity: 1
            }, 100);
            $('.f_line').animate({
                'width': '100%'
            }, 1000);
            $('.f_con_m').animate({
                'opacity': 1
            }, 1000);

            //svg 이미지 애니메이션
            if (is_done) {
                var pathes = $('.f_icon svg').find('path');
                pathes.each(function (i, path) {
                    var total_length = path.getTotalLength();
                    path.style.strokeDasharray = total_length + " " + total_length;
                    path.style.strokeDashoffset = total_length;
                    $(path).animate({
                        "strokeDashoffset": 0
                    }, 1000);
                });

                var pathes2 = $('.f_icon svg').find('line');
                pathes2.each(function (i, line) {
                    var total_length = 500;
                    line.style.strokeDasharray = total_length + " " + total_length;
                    line.style.strokeDashoffset = total_length;
                    $(line).animate({
                        "strokeDashoffset": 0
                    }, 1000);
                });

                var pathes3 = $('.f_icon svg').find('circle');
                pathes3.each(function (i, circle) {
                    var total_length = 500;
                    circle.style.strokeDasharray = total_length + " " + total_length;
                    circle.style.strokeDashoffset = total_length;
                    $(circle).animate({
                        "strokeDashoffset": 0
                    }, 1000);
                });

                var pathes4 = $('.f_icon svg').find('polyline');
                pathes4.each(function (i, polyline) {
                    var total_length = polyline.getTotalLength();
                    polyline.style.strokeDasharray = total_length + " " + total_length;
                    polyline.style.strokeDashoffset = total_length;
                    $(polyline).animate({
                        "strokeDashoffset": 0
                    }, 1000);
                });
                is_done = false;
            }
        }

    });


    //intro
    $(".intro_text").animate({
        opacity: 1
    }, 700);
    $('#intro .intro_bgmask').delay(700).animate({
        left: '100%'
    }, 3000);
    $('.intro_img .figure_img').delay(2500).animate({
        opacity: 1
    }, 2000);


    $('.intro_text_m').animate({
        opacity: 1
    }, 1500);
    $('.intro_img_m .figure_img_m').delay(2000).animate({
        opacity: 1
    }, 1700);
    $('#intro_m .intro_bgmask').delay(700).animate({
        left: '100%'
    }, 1500);
    //intro
    function mobile() {


        var windowWidthOrigin = $(window).innerWidth();
        if (windowWidthOrigin < 800) {
            //모바일 이미지 변경
            //intro 도형 이동 - 모바일

            $('.figure_img1_m').delay(2000).animate({
                left: "-23px",
                top: "-11px"
            }, 1000);

            $('.figure_img2_m').delay(2000).animate({
                left: "-39px",
                top: "144px"
            }, 1000);
            $('.figure_img3_m').delay(2000).animate({
                left: "85px",
                top: "7px"
            }, 1000);
            $('.figure_img4_m').delay(2000).animate({
                left: "36px",
                top: "46px"
            }, 1000);
            $('#intro .intro_bgmask').delay(6000).animate({
                opacity: 0
            }, 3000);


        } else if (windowWidthOrigin >= 800) {

            $('.intro_text').animate({
                opacity: 1
            }, 700);
            $('#intro .intro_bgmask').delay(700).animate({
                left: '100%'
            }, 2500);
            $('.intro_img .figure_img').delay(2300).animate({
                opacity: 1
            }, 2000);
            $('.figure_img1').delay(2500).animate({
                left: "-56px",
                top: "-35px"
            }, 1000);
            $('.figure_img2').delay(2500).animate({
                left: "-72px",
                top: "526px"
            }, 1000);
            $('.figure_img3').delay(2500).animate({
                left: "263px",
                top: "26px"
            }, 1000);
            $('.figure_img4').delay(2500).animate({
                left: "90px",
                top: "165px"
            }, 1000);
            $('#intro .intro_bgmask').delay(6000).animate({
                opacity: 0
            }, 3000);
        }
    }
    mobile();

    $(window).resize(function () {
        mobile();

    });

});
