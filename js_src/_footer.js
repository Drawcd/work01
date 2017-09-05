$(function() {

  var filter = "win16|win32|win64|mac|macintel";

  // 가로 세로 인식
  function portrait() {
    if (window.matchMedia("(orientation: portrait)").matches) {
      $('.width-mask').stop().fadeIn(0);
      console.log('세로');
    } else if (window.matchMedia("(orientation: landscape)").matches) {
      $('.width-mask').stop().fadeOut(0);
      console.log('가로');
    }
  }

  // 접속 장치 인식
  function clientview() {
    if (navigator.platform) {
      if (filter.indexOf(navigator.platform.toLowerCase()) > 0) {
        //PC 접속 full-screen 버튼 생성
        $('.footer').css({
          'display': 'inline-block'
        });
        $('.width-mask').addClass('displayNone');
        console.log('pc 접속');
        // alert('pc');
      } else {
        //모바일 full-screen 버튼 숨김
        $('.footer').css({
          'display': 'none'
        });
        $('.width-mask').removeClass('displayNone');
        console.log('mobile 접속');
        // alert('mobile');

      }
    }
  }



  // DOM loading 완료 후 가로 세로 판단
  $(document).ready(function() {
    $('body').bind('touchmove', function(e) {
      e.preventDefault()
    });
    $("body").unbind('touchmove'); //스크롤 방지 해제
    clientview();
    portrait();
  });
  //End
});


$(function() {
  window.addEventListener("resize", function() {
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

  // End
});
