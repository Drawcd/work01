 $(document).ready(function() {
  if (window.matchMedia("(orientation: portrait)").matches) {
      // $('.width-mask').removeClass('width-info');
      $('.width-mask').stop().fadeIn(0);
      console.log('세로');
      // alert('세로');
    } else if (window.matchMedia("(orientation: landscape)").matches) {
      // $('.width-mask').addClass('width-info');
      $('.width-mask').stop().fadeOut(0);
      console.log('가로');
      // alert('가로');
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


$(function() {

  $(document).on('click','.toggle-btn.off', function(e){
    $(this).removeClass('off').addClass('on');
    $('.gnb-list-item').eq(0).removeClass('rightHiddenOff').addClass('rightHidden');

    console.log('on');
  });

  $(document).on('click','.toggle-btn.on', function(e) {
    $(this).removeClass('on').addClass('off');
    $('.gnb-list-item').eq(0).removeClass('rightHidden').addClass('rightHiddenOff');
    console.log('off');
  });
});




$(window).resize( function () {
  var sec01Width = $(window).width();
  var sec01Height = $(window).height();
  var sec01Ratio = sec01Width/sec01Height ;
  var sec01Scale = sec01Ratio / 1.778 ;
  var reSizeD = sec01Width / 1920;
  var reXUU = ( sec01Width - 1920 )/2;
  var reXUUtext = reXUU.toFixed(4);
  var navItemBtn;
  var navReSize;


  if ( sec01Ratio > 1.778 ) {
    if ( sec01Width > 1920) {
      reSizeD = sec01Width / 1920;
      reXUU = ( sec01Width - 1920 )/2;
      navItemBtn = 50 * reSizeD;
    $('.text03').text('type-A');
    } else {
      reSizeD = sec01Width / 1920;
      reXUU = ( sec01Width - 1920 )/2;
      navItemBtn = (( 162 * reSizeD ) /4 );
      $('.text03').text('type-b');
    }

  } else if ( sec01Width > 1920) {
    reSizeD = sec01Height / 1080;
    reXUU = 0;

    $('.text03').text('type-c');
  } else {
    reSizeD = sec01Height / 1080;
    reXUU = ( sec01Width - 1920 )/2;
    navItemBtn = (( 162 * reSizeD ) /4 );

    // navItemBtn = ( ( ( ( sec01Height * 1.778)/reSizeD ) - (sec01Width/reSizeD) )/2 );
    //
    $('.text03').text('type-d');

  }

  test = ( $('.section01').width());
  test2 =  $(window).width();
  test3 = 0;

  $('.section01').css({
    '-webkit-transform' : 'scale(' + reSizeD + ')',
    'transform' : 'scale(' + reSizeD + ')'
  });
  console.log( reSizeD );
  $('.nav').css({
    left : reXUU
  });


  $('.gnb-button').css({
    '-webkit-transform' : 'scale(' + reSizeD + ')',
    'transform' : 'scale(' + reSizeD + ')',
    left : navItemBtn,
    top : navItemBtn
  });


   GnbListItemRight = (-(470-(470*reSizeD)))/2;
   GnbListItemBottom = (-(600-(600*reSizeD)))/2;

  $('.gnb-list-item').eq(0).css({
    '-webkit-transform' : 'scale(' + reSizeD + ')',
    // 'transform' : 'scale(' + reSizeD + ')',
    right : GnbListItemRight ,
    bottom : GnbListItemBottom
  });

  $('.bg').css({
    left : reXUU
  });



  $('.text01').text('가로 비율 , 1920 UP     (reXUU) : '+ reXUUtext );
  $('.text02').text('가로 비율 , 1920 DOWN (reSizeD) : '+ reSizeD);
  $('.winwidth').text('가로 창 크기 : '+ sec01Width + 'px');
  $('.winheight').text('세로 창 크기 : '+ sec01Height + 'px');
  $('.section-01Ratio').text('가로세로비율 : '+ sec01Ratio.toFixed(4) );
  $('.text04').text('sec01Width x reSizeD  : '+ sec01Width + '-' + reSizeD + '=' + (sec01Width * reSizeD));
  $('.text05').text('reSizeD : ' +  reSizeD );
  // $('.text06').text('test4 : ' +  test4 );
});




function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";

         switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type="mousemove"; break;
        case "touchend":   type="mouseup"; break;
        default: return;
    }

    // initMouseEvent(type, canBubble, cancelable, view, clickCount,
    //                screenX, screenY, clientX, clientY, ctrlKey,
    //                altKey, shiftKey, metaKey, button, relatedTarget);

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1,
                              first.screenX, first.screenY,
                              first.clientX, first.clientY, false,
                              false, false, false, 0/*left*/, null);
                              first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function init()
{
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9mb290ZXIuanMiLCJfaW5kZXguanMiLCJfc2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RHQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIHtcbiAgICAgIC8vICQoJy53aWR0aC1tYXNrJykucmVtb3ZlQ2xhc3MoJ3dpZHRoLWluZm8nKTtcbiAgICAgICQoJy53aWR0aC1tYXNrJykuc3RvcCgpLmZhZGVJbigwKTtcbiAgICAgIGNvbnNvbGUubG9nKCfshLjroZwnKTtcbiAgICAgIC8vIGFsZXJ0KCfshLjroZwnKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLm1hdGNoZXMpIHtcbiAgICAgIC8vICQoJy53aWR0aC1tYXNrJykuYWRkQ2xhc3MoJ3dpZHRoLWluZm8nKTtcbiAgICAgICQoJy53aWR0aC1tYXNrJykuc3RvcCgpLmZhZGVPdXQoMCk7XG4gICAgICBjb25zb2xlLmxvZygn6rCA66GcJyk7XG4gICAgICAvLyBhbGVydCgn6rCA66GcJyk7XG4gICAgfVxuICB9KTtcblxuXG5cbiAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIgZmlsdGVyID0gXCJ3aW4xNnx3aW4zMnx3aW42NHxtYWN8bWFjaW50ZWxcIjtcclxuICAgIHZhciBwb3J0cmFpdDtcclxuICAvLyDsoJHsho0g7J6l7LmYIOyduOyLnVxyXG4gICAgZnVuY3Rpb24gY2xpZW50dmlldygpIHtcclxuICAgICAgaWYgKCBuYXZpZ2F0b3IucGxhdGZvcm0gKSB7XHJcbiAgICAgICAgaWYgKCBmaWx0ZXIuaW5kZXhPZiggbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKCkgKSA8IDAgKSB7XHJcbiAgICAgICAgICAvL+uqqOuwlOydvCDrsoTtirwg7Iio6riw6riwXHJcbiAgICAgICAgICAkKCcuZnVsbC1zY3JlZW4tYnRuJykuY3NzKHsnZGlzcGxheScgOiAnbm9uZSd9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbW9iaWxlIOygkeyGjScpO1xyXG4gICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgJCgnLmZ1bGwtc2NyZWVuLWJ0bicpLmNzcyh7J2Rpc3BsYXknIDogJ2lubGluZS1ibG9jayd9KTtcclxuICAgICAgICAgJCgnLndpZHRoLW1hc2snKS5zdG9wKCkuZmFkZU91dCgwKTtcclxuICAgICAgICAgY29uc29sZS5sb2coJ3BjIOygkeyGjScpO1xyXG5cclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyDrqqjrsJTsnbwg6rCA66GcIOyEuOuhnCDsnbjsi51cclxuICAgIC8vIGZ1bmN0aW9uIHd2aHYoKSB7XHJcbiAgICAvLyAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMgJiYgcG9ydHJhaXQgPT0gZmFsc2UpIHtcclxuICAgIC8vICAgICAvLyAkKCcud2lkdGgtbWFzaycpLnJlbW92ZUNsYXNzKCd3aWR0aC1pbmZvJyk7XHJcbiAgICAvLyAgICAgJCgnLndpZHRoLW1hc2snKS5zdG9wKCkuZmFkZUluKDEwMDApO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCfshLjroZwnKTtcclxuICAgIC8vICAgICBwb3J0cmFpdCA9IHRydWU7XHJcbiAgICAvLyAgICAgLy8gYWxlcnQoJ+yEuOuhnCcpO1xyXG4gICAgLy8gICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXCIpLm1hdGNoZXMgJiYgcG9ydHJhaXQgPT0gdHJ1ZSkge1xyXG4gICAgLy8gICAgIC8vICQoJy53aWR0aC1tYXNrJykuYWRkQ2xhc3MoJ3dpZHRoLWluZm8nKTtcclxuICAgIC8vICAgICAkKCcud2lkdGgtbWFzaycpLnN0b3AoKS5mYWRlT3V0KDEwMDApO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCfqsIDroZwnKTtcclxuICAgIC8vICAgICBwb3J0cmFpdCA9IGZhbHNlO1xyXG4gICAgLy8gICAgIC8vIGFsZXJ0KCfqsIDroZwnKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gICB3dmh2KCk7XHJcbi8vIH0pO1xyXG4vL1xyXG4vLyBmdW5jdGlvbiByZW1hc2soKSB7XHJcbi8vICAgJCh3aW5kb3cpLm9uKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuLy8gICAgIHd2aHYoKTtcclxuLy8gICB9KTtcclxuLy8gfVxyXG4vL1xyXG4vLyDrqqjrsJTsnbwg6rCA66GcIOyEuOuhnCDrs4DtmZgg7J2067Kk7Yq4IO2VqOyImCDsi6TtlolcclxuLy8gcmVtYXNrKCk7XHJcblxyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcclxuICBcdGNsaWVudHZpZXcoKTtcclxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogcG9ydHJhaXQpXCIpLm1hdGNoZXMpIHtcclxuICAgICAgICAkKCcud2lkdGgtbWFzaycpLnN0b3AoKS5mYWRlSW4oMTAwMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+yEuOuhnCcpO1xyXG4gICAgICAgIC8vIGFsZXJ0KCfshLjroZwnKTtcclxuICAgICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgJCgnLndpZHRoLW1hc2snKS5zdG9wKCkuZmFkZU91dCgxMDAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZygn6rCA66GcJyk7XHJcbiAgICAgICAgLy8gYWxlcnQoJ+qwgOuhnCcpO1xyXG4gICAgICB9XHJcbiAgfSwgZmFsc2UpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIHN0YXJ0LWltYWdlIOykkeyVmSDsnITsuZggdHJhbnNmb3Jt7Jy866GcIOuMgOyytFxyXG4gICAgLy8gJCgnLnN0YXJ0LWltZycpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gICB2YXIgc3RhcnRJbWFnZVdpZHRoID0gJCgnLnN0YXJ0LWltZycpLndpZHRoKCk7XHJcbiAgICAvLyAgIHZhciBzdGFydEltYWdlSGVpZ2h0ID0gJCgnLnN0YXJ0LWltZycpLmhlaWdodCgpO1xyXG4gICAgLy8gICAkKCcuZm9vdGVyLWlubmVyJykuY3NzKHtcclxuICAgIC8vICAgICAnbWFyZ2luLWxlZnQnIDogLSggc3RhcnRJbWFnZVdpZHRoIC8gMiApLFxyXG4gICAgLy8gICAgICdtYXJnaW4tdG9wJyA6IC0oIHN0YXJ0SW1hZ2VIZWlnaHQgLyAyIClcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9KS5yZXNpemUoKTtcclxuXHJcblxyXG4gICAgLy9FbmRcclxuICB9KTtcclxuIiwiIiwiJChmdW5jdGlvbigpIHtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLnRvZ2dsZS1idG4ub2ZmJywgZnVuY3Rpb24oZSl7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvZmYnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICQoJy5nbmItbGlzdC1pdGVtJykuZXEoMCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0SGlkZGVuT2ZmJykuYWRkQ2xhc3MoJ3JpZ2h0SGlkZGVuJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ29uJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy50b2dnbGUtYnRuLm9uJywgZnVuY3Rpb24oZSkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb24nKS5hZGRDbGFzcygnb2ZmJyk7XHJcbiAgICAkKCcuZ25iLWxpc3QtaXRlbScpLmVxKDApLnJlbW92ZUNsYXNzKCdyaWdodEhpZGRlbicpLmFkZENsYXNzKCdyaWdodEhpZGRlbk9mZicpO1xyXG4gICAgY29uc29sZS5sb2coJ29mZicpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiQod2luZG93KS5yZXNpemUoIGZ1bmN0aW9uICgpIHtcclxuICB2YXIgc2VjMDFXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gIHZhciBzZWMwMUhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuICB2YXIgc2VjMDFSYXRpbyA9IHNlYzAxV2lkdGgvc2VjMDFIZWlnaHQgO1xyXG4gIHZhciBzZWMwMVNjYWxlID0gc2VjMDFSYXRpbyAvIDEuNzc4IDtcclxuICB2YXIgcmVTaXplRCA9IHNlYzAxV2lkdGggLyAxOTIwO1xyXG4gIHZhciByZVhVVSA9ICggc2VjMDFXaWR0aCAtIDE5MjAgKS8yO1xyXG4gIHZhciByZVhVVXRleHQgPSByZVhVVS50b0ZpeGVkKDQpO1xyXG4gIHZhciBuYXZJdGVtQnRuO1xyXG4gIHZhciBuYXZSZVNpemU7XHJcblxyXG5cclxuICBpZiAoIHNlYzAxUmF0aW8gPiAxLjc3OCApIHtcclxuICAgIGlmICggc2VjMDFXaWR0aCA+IDE5MjApIHtcclxuICAgICAgcmVTaXplRCA9IHNlYzAxV2lkdGggLyAxOTIwO1xyXG4gICAgICByZVhVVSA9ICggc2VjMDFXaWR0aCAtIDE5MjAgKS8yO1xyXG4gICAgICBuYXZJdGVtQnRuID0gNTAgKiByZVNpemVEO1xyXG4gICAgJCgnLnRleHQwMycpLnRleHQoJ3R5cGUtQScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVTaXplRCA9IHNlYzAxV2lkdGggLyAxOTIwO1xyXG4gICAgICByZVhVVSA9ICggc2VjMDFXaWR0aCAtIDE5MjAgKS8yO1xyXG4gICAgICBuYXZJdGVtQnRuID0gKCggMTYyICogcmVTaXplRCApIC80ICk7XHJcbiAgICAgICQoJy50ZXh0MDMnKS50ZXh0KCd0eXBlLWInKTtcclxuICAgIH1cclxuXHJcbiAgfSBlbHNlIGlmICggc2VjMDFXaWR0aCA+IDE5MjApIHtcclxuICAgIHJlU2l6ZUQgPSBzZWMwMUhlaWdodCAvIDEwODA7XHJcbiAgICByZVhVVSA9IDA7XHJcblxyXG4gICAgJCgnLnRleHQwMycpLnRleHQoJ3R5cGUtYycpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZVNpemVEID0gc2VjMDFIZWlnaHQgLyAxMDgwO1xyXG4gICAgcmVYVVUgPSAoIHNlYzAxV2lkdGggLSAxOTIwICkvMjtcclxuICAgIG5hdkl0ZW1CdG4gPSAoKCAxNjIgKiByZVNpemVEICkgLzQgKTtcclxuXHJcbiAgICAvLyBuYXZJdGVtQnRuID0gKCAoICggKCBzZWMwMUhlaWdodCAqIDEuNzc4KS9yZVNpemVEICkgLSAoc2VjMDFXaWR0aC9yZVNpemVEKSApLzIgKTtcclxuICAgIC8vXHJcbiAgICAkKCcudGV4dDAzJykudGV4dCgndHlwZS1kJyk7XHJcblxyXG4gIH1cclxuXHJcbiAgdGVzdCA9ICggJCgnLnNlY3Rpb24wMScpLndpZHRoKCkpO1xyXG4gIHRlc3QyID0gICQod2luZG93KS53aWR0aCgpO1xyXG4gIHRlc3QzID0gMDtcclxuXHJcbiAgJCgnLnNlY3Rpb24wMScpLmNzcyh7XHJcbiAgICAnLXdlYmtpdC10cmFuc2Zvcm0nIDogJ3NjYWxlKCcgKyByZVNpemVEICsgJyknLFxyXG4gICAgJ3RyYW5zZm9ybScgOiAnc2NhbGUoJyArIHJlU2l6ZUQgKyAnKSdcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyggcmVTaXplRCApO1xyXG4gICQoJy5uYXYnKS5jc3Moe1xyXG4gICAgbGVmdCA6IHJlWFVVXHJcbiAgfSk7XHJcblxyXG5cclxuICAkKCcuZ25iLWJ1dHRvbicpLmNzcyh7XHJcbiAgICAnLXdlYmtpdC10cmFuc2Zvcm0nIDogJ3NjYWxlKCcgKyByZVNpemVEICsgJyknLFxyXG4gICAgJ3RyYW5zZm9ybScgOiAnc2NhbGUoJyArIHJlU2l6ZUQgKyAnKScsXHJcbiAgICBsZWZ0IDogbmF2SXRlbUJ0bixcclxuICAgIHRvcCA6IG5hdkl0ZW1CdG5cclxuICB9KTtcclxuXHJcblxyXG4gICBHbmJMaXN0SXRlbVJpZ2h0ID0gKC0oNDcwLSg0NzAqcmVTaXplRCkpKS8yO1xyXG4gICBHbmJMaXN0SXRlbUJvdHRvbSA9ICgtKDYwMC0oNjAwKnJlU2l6ZUQpKSkvMjtcclxuXHJcbiAgJCgnLmduYi1saXN0LWl0ZW0nKS5lcSgwKS5jc3Moe1xyXG4gICAgJy13ZWJraXQtdHJhbnNmb3JtJyA6ICdzY2FsZSgnICsgcmVTaXplRCArICcpJyxcclxuICAgIC8vICd0cmFuc2Zvcm0nIDogJ3NjYWxlKCcgKyByZVNpemVEICsgJyknLFxyXG4gICAgcmlnaHQgOiBHbmJMaXN0SXRlbVJpZ2h0ICxcclxuICAgIGJvdHRvbSA6IEduYkxpc3RJdGVtQm90dG9tXHJcbiAgfSk7XHJcblxyXG4gICQoJy5iZycpLmNzcyh7XHJcbiAgICBsZWZ0IDogcmVYVVVcclxuICB9KTtcclxuXHJcblxyXG5cclxuICAkKCcudGV4dDAxJykudGV4dCgn6rCA66GcIOu5hOycqCAsIDE5MjAgVVAgICAgIChyZVhVVSkgOiAnKyByZVhVVXRleHQgKTtcclxuICAkKCcudGV4dDAyJykudGV4dCgn6rCA66GcIOu5hOycqCAsIDE5MjAgRE9XTiAocmVTaXplRCkgOiAnKyByZVNpemVEKTtcclxuICAkKCcud2lud2lkdGgnKS50ZXh0KCfqsIDroZwg7LC9IO2BrOq4sCA6ICcrIHNlYzAxV2lkdGggKyAncHgnKTtcclxuICAkKCcud2luaGVpZ2h0JykudGV4dCgn7IS466GcIOywvSDtgazquLAgOiAnKyBzZWMwMUhlaWdodCArICdweCcpO1xyXG4gICQoJy5zZWN0aW9uLTAxUmF0aW8nKS50ZXh0KCfqsIDroZzshLjroZzruYTsnKggOiAnKyBzZWMwMVJhdGlvLnRvRml4ZWQoNCkgKTtcclxuICAkKCcudGV4dDA0JykudGV4dCgnc2VjMDFXaWR0aCB4IHJlU2l6ZUQgIDogJysgc2VjMDFXaWR0aCArICctJyArIHJlU2l6ZUQgKyAnPScgKyAoc2VjMDFXaWR0aCAqIHJlU2l6ZUQpKTtcclxuICAkKCcudGV4dDA1JykudGV4dCgncmVTaXplRCA6ICcgKyAgcmVTaXplRCApO1xyXG4gIC8vICQoJy50ZXh0MDYnKS50ZXh0KCd0ZXN0NCA6ICcgKyAgdGVzdDQgKTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0b3VjaEhhbmRsZXIoZXZlbnQpXHJcbntcclxuICAgIHZhciB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXHJcbiAgICAgICAgZmlyc3QgPSB0b3VjaGVzWzBdLFxyXG4gICAgICAgIHR5cGUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgc3dpdGNoKGV2ZW50LnR5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgY2FzZSBcInRvdWNoc3RhcnRcIjogdHlwZSA9IFwibW91c2Vkb3duXCI7IGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ0b3VjaG1vdmVcIjogIHR5cGU9XCJtb3VzZW1vdmVcIjsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInRvdWNoZW5kXCI6ICAgdHlwZT1cIm1vdXNldXBcIjsgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGluaXRNb3VzZUV2ZW50KHR5cGUsIGNhbkJ1YmJsZSwgY2FuY2VsYWJsZSwgdmlldywgY2xpY2tDb3VudCxcclxuICAgIC8vICAgICAgICAgICAgICAgIHNjcmVlblgsIHNjcmVlblksIGNsaWVudFgsIGNsaWVudFksIGN0cmxLZXksXHJcbiAgICAvLyAgICAgICAgICAgICAgICBhbHRLZXksIHNoaWZ0S2V5LCBtZXRhS2V5LCBidXR0b24sIHJlbGF0ZWRUYXJnZXQpO1xyXG5cclxuICAgIHZhciBzaW11bGF0ZWRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudFwiKTtcclxuICAgIHNpbXVsYXRlZEV2ZW50LmluaXRNb3VzZUV2ZW50KHR5cGUsIHRydWUsIHRydWUsIHdpbmRvdywgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Quc2NyZWVuWCwgZmlyc3Quc2NyZWVuWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QuY2xpZW50WCwgZmlyc3QuY2xpZW50WSwgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAvKmxlZnQqLywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0LnRhcmdldC5kaXNwYXRjaEV2ZW50KHNpbXVsYXRlZEV2ZW50KTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKVxyXG57XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b3VjaEhhbmRsZXIsIHRydWUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0b3VjaEhhbmRsZXIsIHRydWUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRvdWNoSGFuZGxlciwgdHJ1ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdG91Y2hIYW5kbGVyLCB0cnVlKTtcclxufVxyXG4iXX0=
