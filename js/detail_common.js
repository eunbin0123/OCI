//text animation
$(function () {


    //scroll animation
    $(document).ready(function () {
        $(window).scroll(function () {
            $('.scrollbox>div').each(function (i) {
                var bottom_of_element = $(this).offset().top;
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).addClass('scroll');
                }


            });
        });
    });

    $(document).ready(openAni);

    function openAni() {
        $('.txt-ani-detail').addClass('txt-ani-detail-active');
        $('.scrollbox2').children('div').addClass('scroll');
        $('.scrolltitlebox').children('div').addClass('scroll');
        var text = $('.tab_menu li a.active').text();
        $('.tab_name').text(text);
    }
    //tab메뉴 클릭시 스크롤 초기화
    $('.tab_menu li a').click(function () {
        $('.scrollbox > div, .scrollbox2 > div, .scrolltitlebox > div').removeClass('scroll');
        setTimeout(openAni, 100);
        
    });


    //tab scroll
    var tabBarOffset = $('.tab_menu_box').offset();

    $(window).scroll(function () {
        var scrolltop = $(document).scrollTop();
        var tabBar = $('.tab_menu'),
            tabBarList = $('.tab_menu li'),
            tabBarBox = $('.tab_menu_box');
        if (tabBarOffset.top < scrolltop) {
            tabBar.addClass('tab_menu_scroll');
            tabBarBox.addClass('tab_menu_box_scroll');
        } else {
            tabBar.removeClass('tab_menu_scroll');
            tabBarBox.removeClass('tab_menu_box_scroll');
        }

        var top = $('.top');
        if (scrolltop > 600) {
            top.fadeIn();
        } else {
            top.fadeOut();
        }
    });

//    $('.tab_menu li').click(function () {
//        $('header').css('top', '0!important');
//    });

    function mobile() {

        var windowWidthOrigin = $(window).innerWidth();



        if (windowWidthOrigin < 800) {
            $('.tab_name').show();
            $('.tab_menu').css('display', 'none');

            //모바일 이미지 변경
            $('body').find('img').attr('src', function (index, attr) {
                if (attr.match('_w')) {
                    return attr.replace('_w.svg', '_m.svg')
                }
            });
            //tab 메뉴 선택시 tab 메뉴 사라짐
            $('.tab_menu li a').click(function () {
                $('.tab_menu').css('display', 'none');
            });
            

        } else if (windowWidthOrigin >= 800) {
            $('.tab_name').hide();
            $('.tab_menu').css('display', 'flex');
            //모바일 이미지 변경
            $('body').find('img').attr('src', function (index, attr) {
                if (attr.match('_m')) {
                    return attr.replace('_m.svg', '_w.svg')
                }
            });

            $('.tab_menu li a').click(function () {
                $('.tab_menu').css('display', 'flex');
            });
        }
    }
    mobile();

    $(window).resize(function () {
        mobile();

    });

    $('.tab_name').click(function () {
        $('.tab_menu').toggle();
    });




});
