$(function () {
    //tab
    var tabLink = $('.tab_menu li'),
        subLink = $('.tab_menu li'),
        currentUrl = location.href,
        tabContent = $('.tab_content > div');

    tabLink.add(subLink).click(function (e) {
        e.preventDefault();
        var targetIdx = $(this).index();
        activateTab(targetIdx);
    });

    subLink.each(function (i) {
        var compareUrl = $(this).find('a').attr('href');
        var compareUrl_Active = compareUrl.split("-");
        var active = currentUrl.split("-");
        if (compareUrl_Active[1] == active[1]) {
            activateTab(active[1] - 1);
            goTop();
        }

    });

    $('.sub_nav li').click(function () {
        var a = $(location).attr('pathname').split("/");
        var thisUrl = a[a.length - 1].split("#");
        var clickUrl = $(this).find('a').attr('href').split("#");

        if (thisUrl[0] == clickUrl[0]) {
            hideMenu();
            goTop();
            var idx = $(this).index();
            activateTab(idx);
            var text = $('.tab_menu li a.active').text();
            $('.tab_name').text(text);
        }


    });



    //top
    $('.top').click(function () {
        goTop();
    });


    //menu
    var nav_on = false;
    $('.menu').click(function () {
        $('.header_box').fadeIn();
        $('.inner_box').animate({
            right: 0
        });
        $('.menu').fadeOut();
        $('.close').fadeIn();
        nav_on = true;
        $('.header_box').on('scroll touchmove mousewheel', function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    });

    $('.close').click(function () {
        hideMenu();
        nav_on = false;
    });
    $('.home').click(function () {
        location.href = 'index.html';
    })


    function mobile() {

        var windowWidthOrigin = $(window).innerWidth();

        if (windowWidthOrigin < 800) {
            $('.nav_title').attr('onclick', '');
            $('.nav_title').off('click').on('click', function () {
                $('.sub_nav').stop().slideUp();
                $(this).siblings('.sub_nav').stop().slideToggle();
            });

            $('.close').click(function () {
                $('.sub_nav').stop().slideUp();
            });

        } else if (windowWidthOrigin >= 800) {
            $('.nav_title').unbind('click');
            $('.environment').click(function () {
                location.href = 'esg_environment.html';
            });
            $('.social').click(function () {
                location.href = 'esg_social.html';
            });
            $('.governance').click(function () {
                location.href = 'esg_governance.html';
            });
            $('.material').click(function () {
                location.href = 'material_highlight.html';
            });
            $('.focus').click(function () {
                location.href = 'focus.html';
            });
        }
    }
    mobile();

    $(window).resize(function () {
        mobile();
    });


    function activateTab(idx) {
        tabContent.hide();
        tabLink.find('a').removeClass('active');
        tabLink.eq(idx).find('a').addClass('active');
        tabContent.eq(idx).show();
        $('html').scrollTop($('.container').offset().top+2);
    }

    function hideMenu() {
        $('.header_box').fadeOut();
        $('.inner_box').animate({
            right: '-70%'
        });
        $('.close').fadeOut();
        $('.menu').fadeIn();
    }

    function goTop() {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    }

});
