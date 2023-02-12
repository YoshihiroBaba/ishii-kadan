import '../scss/main.scss';

$(function () {
    // バーガーメニュー
    $(".c-menu-icon").off('click');
    $(".c-menu-icon").on('click', function () {
      $("#c-menu-icon").toggleClass("c-menu-open");
      $(".c-gnav__burger").toggleClass("u-dis--show");
    //   $(window).scroll(function(){
    //     $(".burger__menu").slideUp(400).removeClass("is-active");
    //     $(".burger").removeClass("is-active");
      });

    // });

    // タブ切り替え
    $('.notice__nav li').click(function(){
        var index = $('.notice__nav li').index(this);
        $('.notice__nav li').removeClass('--active');
        $(this).addClass('--active');
        $('.notice__wrapper ul').removeClass('--show').eq(index).addClass('--show');
    })

    // ヘッダー
    $(window).scroll(function(){
        var position = $(window).scrollTop();
        if(position > 0){
        $('.l-header').addClass('l-sub-header__bg');
        $('.c-gnav__list,.c-menu-icon').removeClass('l-sub-header--white');
        $('.l-header__logo').addClass('u-dis--none').eq(1).removeClass('u-dis--none');
        }else{
        $('.l-header').removeClass('l-sub-header__bg');
        $('.c-gnav__list,.c-menu-icon').addClass('l-sub-header--white');
        $('.l-header__logo').removeClass('u-dis--none').eq(1).addClass('u-dis--none');
        }
    })


    // スクロール
    // $("a[href^='#']:not([href='#'])").click(function(){
    //   var target = $($(this).attr("href")).offset().top;
    //   target -= 100;
    //   $("html,body").animate({scrollTop: target}, 500);
    //   return false;
    // });
    // $("#toCta").click (function(){
    //   $(window).scrollTop($("#toCta").position().top - 100);
    // });

  });


// AOS.init();
