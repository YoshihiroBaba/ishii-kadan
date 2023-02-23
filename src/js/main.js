import flatpickr from 'flatpickr';
import '../scss/main.scss';

$(function () {
    // バーガーメニュー
    $(".c-menu-icon, .c-menu-icon--sub").off('click');
    $(".c-menu-icon, .c-menu-icon--sub").on('click', function () {
      $("#c-menu-icon").toggleClass("c-menu-open");
      $(".c-gnav__burger").toggleClass("u-dis--show");
      $(window).scroll(function(){
        $("#c-menu-icon").removeClass("c-menu-open");
        $(".c-gnav__burger").removeClass("u-dis--show");
      });

    });

    // タブ切り替え
    $('.notice__nav li').click(function(){
        var index = $('.notice__nav li').index(this);
        $('.notice__nav li').removeClass('--active');
        $(this).addClass('--active');
        $('.notice__wrapper ul').removeClass('--show').eq(index).addClass('--show');
    });

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
    });

    // モーダル
    $("#c-btn--header,.p-modal__form__close").on('click', function () {
      $(".p-modal, .p-modal__form").toggleClass("u-dis--none");
      });

    // モーダル プルダウンメニュー
    $(".p-modal__form__select").addClass("is-empty");
    $(".p-modal__form__select").on("change", function () {
      if ($(this).val() !== "") {
        $(this).removeClass("is-empty");
      }
      else {
        $(this).addClass("is-empty");
      }
        });

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
let minDate = new Date();
flatpickr('#calendar', {
  lang:'ja',
  minDate: minDate,
  dateFormat:'Y年m月d日(D)',
  mode:'range',
});

AOS.init();
