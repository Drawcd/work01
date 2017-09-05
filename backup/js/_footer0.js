// DOM loading 완료 후 가로 세로 판단
$(document).ready(function() {
if (window.matchMedia("(orientation: portrait)").matches) {
    // $('.width-mask').removeClass('width-info');
    $('.width-mask').stop().css({ display:none}).fadeIn(0);
    console.log('세로');
  } else if (window.matchMedia("(orientation: landscape)").matches) {
    // $('.width-mask').addClass('width-info');
    $('.width-mask').stop().fadeOut(0).css({ display:none});
    console.log('가로');
  }
});



  $(function() {

    var filter = "win16|win32|win64|mac|macintel";
    var portrait;
  // 접속 장치 인식
    function clientview() {
      if ( navigator.platform ) {
        if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
          //모바일 버튼 숨기기
          $('.full-screen-btn').css({'display' : 'none'});
        console.log('mobile 접속');
       } else {
         $('.full-screen-btn').css({'display' : 'inline-block'});
         $('.width-mask').stop().fadeOut(0);
         console.log('pc 접속');

       }
     }
   }




    // 모바일 가로 세로 인식
    // function wvhv() {
    //   if (window.matchMedia("(orientation: portrait)").matches && portrait == false) {
    //     // $('.width-mask').removeClass('width-info');
    //     $('.width-mask').stop().fadeIn(1000);
    //     console.log('세로');
    //     portrait = true;
    //     // alert('세로');
    //   } else if (window.matchMedia("(orientation: landscape)").matches && portrait == true) {
    //     // $('.width-mask').addClass('width-info');
    //     $('.width-mask').stop().fadeOut(1000);
    //     console.log('가로');
    //     portrait = false;
    //     // alert('가로');
    //   }
    // }
// $(document).ready(function() {
//   wvhv();
// });
//
// function remask() {
//   $(window).on("orientationchange", function(event) {
//     wvhv();
//   });
// }
//
// 모바일 가로 세로 변환 이벤트 함수 실행
// remask();


  window.addEventListener("resize", function() {
  	clientview();
    if (window.matchMedia("(orientation: portrait)").matches) {
        $('.width-mask').stop().fadeIn(1000);
        console.log('세로');
        // alert('세로');
      } else if (window.matchMedia("(orientation: landscape)").matches) {
        $('.width-mask').stop().fadeOut(1000);
        console.log('가로');
        // alert('가로');
      }
  }, false);








// start-image 중앙 위치 transform으로 대체
    // $('.start-img').on('resize', function(){
    //   var startImageWidth = $('.start-img').width();
    //   var startImageHeight = $('.start-img').height();
    //   $('.footer-inner').css({
    //     'margin-left' : -( startImageWidth / 2 ),
    //     'margin-top' : -( startImageHeight / 2 )
    //   });
    // }).resize();


    //End
  });
