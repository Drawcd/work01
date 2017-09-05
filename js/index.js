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

$(function() {


  var windowWidth = $(window).width();
  var stage01Left = ( $('#stage01').css('left')).replace(/[^0-9]/g,'');


  var stage02Left = ( $('#stage02').css('left') - windowWidth );


  console.log('#stage02 : ' + $('#stage02').css('left'));
  console.log('stage02left : '+  stage02Left ) ;
  $(function(){
    $('#menu-jungle1').on('click', function(){
        $('#stage01').animate({
          'left' : -windowWidth
        },3000, function(){
          $('#stage01').css({
            'display' : 'none'
          });
        });
        $('#stage02').animate({
          'left' : stage02Left
        });
    });
  });
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
      // $('.text03').text('type-b');
    }

  } else if ( sec01Width > 1920) {
    reSizeD = sec01Height / 1080;
    reXUU = 0;

    // $('.text03').text('type-c');
  } else {
    reSizeD = sec01Height / 1080;
    reXUU = ( sec01Width - 1920 )/2;
    navItemBtn = (( 162 * reSizeD ) /4 );

    // navItemBtn = ( ( ( ( sec01Height * 1.778)/reSizeD ) - (sec01Width/reSizeD) )/2 );
    //
    // $('.text03').text('type-d');

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



  // $('.text01').text('가로 비율 , 1920 UP     (reXUU) : '+ reXUUtext );
  // $('.text02').text('가로 비율 , 1920 DOWN (reSizeD) : '+ reSizeD);
  // $('.winwidth').text('가로 창 크기 : '+ sec01Width + 'px');
  // $('.winheight').text('세로 창 크기 : '+ sec01Height + 'px');
  // $('.section-01Ratio').text('가로세로비율 : '+ sec01Ratio.toFixed(4) );
  // $('.text04').text('sec01Width x reSizeD  : '+ sec01Width + '-' + reSizeD + '=' + (sec01Width * reSizeD));
  // $('.text05').text('reSizeD : ' +  reSizeD );
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9mb290ZXIuanMiLCJfaW5kZXguanMiLCJfc2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIGZpbHRlciA9IFwid2luMTZ8d2luMzJ8d2luNjR8bWFjfG1hY2ludGVsXCI7XHJcblxyXG4gIC8vIOqwgOuhnCDshLjroZwg7J247IudXHJcbiAgZnVuY3Rpb24gcG9ydHJhaXQoKSB7XHJcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIob3JpZW50YXRpb246IHBvcnRyYWl0KVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgICQoJy53aWR0aC1tYXNrJykuc3RvcCgpLmZhZGVJbigwKTtcclxuICAgICAgY29uc29sZS5sb2coJ+yEuOuhnCcpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgICQoJy53aWR0aC1tYXNrJykuc3RvcCgpLmZhZGVPdXQoMCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfqsIDroZwnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOygkeyGjSDsnqXsuZgg7J247IudXHJcbiAgZnVuY3Rpb24gY2xpZW50dmlldygpIHtcclxuICAgIGlmIChuYXZpZ2F0b3IucGxhdGZvcm0pIHtcclxuICAgICAgaWYgKGZpbHRlci5pbmRleE9mKG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpKSA+IDApIHtcclxuICAgICAgICAvL1BDIOygkeyGjSBmdWxsLXNjcmVlbiDrsoTtirwg7IOd7ISxXHJcbiAgICAgICAgJCgnLmZvb3RlcicpLmNzcyh7XHJcbiAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLndpZHRoLW1hc2snKS5hZGRDbGFzcygnZGlzcGxheU5vbmUnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncGMg7KCR7IaNJyk7XHJcbiAgICAgICAgLy8gYWxlcnQoJ3BjJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy/rqqjrsJTsnbwgZnVsbC1zY3JlZW4g67KE7Yq8IOyIqOq5gFxyXG4gICAgICAgICQoJy5mb290ZXInKS5jc3Moe1xyXG4gICAgICAgICAgJ2Rpc3BsYXknOiAnbm9uZSdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcud2lkdGgtbWFzaycpLnJlbW92ZUNsYXNzKCdkaXNwbGF5Tm9uZScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtb2JpbGUg7KCR7IaNJyk7XHJcbiAgICAgICAgLy8gYWxlcnQoJ21vYmlsZScpO1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvLyBET00gbG9hZGluZyDsmYTro4wg7ZuEIOqwgOuhnCDshLjroZwg7YyQ64uoXHJcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCdib2R5JykuYmluZCgndG91Y2htb3ZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIH0pO1xyXG4gICAgJChcImJvZHlcIikudW5iaW5kKCd0b3VjaG1vdmUnKTsgLy/siqTtgazroaQg67Cp7KeAIO2VtOygnFxyXG4gICAgY2xpZW50dmlldygpO1xyXG4gICAgcG9ydHJhaXQoKTtcclxuICB9KTtcclxuICAvL0VuZFxyXG59KTtcclxuXHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIikubWF0Y2hlcykge1xyXG4gICAgICAkKCcud2lkdGgtbWFzaycpLnN0b3AoKS5mYWRlSW4oMTAwMCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfshLjroZwnKTtcclxuICAgICAgLy8gYWxlcnQoJ+yEuOuhnCcpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihvcmllbnRhdGlvbjogbGFuZHNjYXBlKVwiKS5tYXRjaGVzKSB7XHJcbiAgICAgICQoJy53aWR0aC1tYXNrJykuc3RvcCgpLmZhZGVPdXQoMTAwMCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfqsIDroZwnKTtcclxuICAgICAgLy8gYWxlcnQoJ+qwgOuhnCcpO1xyXG4gICAgfVxyXG4gIH0sIGZhbHNlKTtcclxuXHJcbiAgLy8gRW5kXHJcbn0pO1xyXG4iLCIkKGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcbiAgdmFyIHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgdmFyIHN0YWdlMDFMZWZ0ID0gKCAkKCcjc3RhZ2UwMScpLmNzcygnbGVmdCcpKS5yZXBsYWNlKC9bXjAtOV0vZywnJyk7XHJcblxyXG5cclxuICB2YXIgc3RhZ2UwMkxlZnQgPSAoICQoJyNzdGFnZTAyJykuY3NzKCdsZWZ0JykgLSB3aW5kb3dXaWR0aCApO1xyXG5cclxuXHJcbiAgY29uc29sZS5sb2coJyNzdGFnZTAyIDogJyArICQoJyNzdGFnZTAyJykuY3NzKCdsZWZ0JykpO1xyXG4gIGNvbnNvbGUubG9nKCdzdGFnZTAybGVmdCA6ICcrICBzdGFnZTAyTGVmdCApIDtcclxuICAkKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcjbWVudS1qdW5nbGUxJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcjc3RhZ2UwMScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgJ2xlZnQnIDogLXdpbmRvd1dpZHRoXHJcbiAgICAgICAgfSwzMDAwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgJCgnI3N0YWdlMDEnKS5jc3Moe1xyXG4gICAgICAgICAgICAnZGlzcGxheScgOiAnbm9uZSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJyNzdGFnZTAyJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAnbGVmdCcgOiBzdGFnZTAyTGVmdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCIkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCcudG9nZ2xlLWJ0bi5vZmYnLCBmdW5jdGlvbihlKXtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29mZicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJCgnLmduYi1saXN0LWl0ZW0nKS5lcSgwKS5yZW1vdmVDbGFzcygncmlnaHRIaWRkZW5PZmYnKS5hZGRDbGFzcygncmlnaHRIaWRkZW4nKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnb24nKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLnRvZ2dsZS1idG4ub24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvbicpLmFkZENsYXNzKCdvZmYnKTtcclxuICAgICQoJy5nbmItbGlzdC1pdGVtJykuZXEoMCkucmVtb3ZlQ2xhc3MoJ3JpZ2h0SGlkZGVuJykuYWRkQ2xhc3MoJ3JpZ2h0SGlkZGVuT2ZmJyk7XHJcbiAgICBjb25zb2xlLmxvZygnb2ZmJyk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuJCh3aW5kb3cpLnJlc2l6ZSggZnVuY3Rpb24gKCkge1xyXG4gIHZhciBzZWMwMVdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgdmFyIHNlYzAxSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gIHZhciBzZWMwMVJhdGlvID0gc2VjMDFXaWR0aC9zZWMwMUhlaWdodCA7XHJcbiAgdmFyIHNlYzAxU2NhbGUgPSBzZWMwMVJhdGlvIC8gMS43NzggO1xyXG4gIHZhciByZVNpemVEID0gc2VjMDFXaWR0aCAvIDE5MjA7XHJcbiAgdmFyIHJlWFVVID0gKCBzZWMwMVdpZHRoIC0gMTkyMCApLzI7XHJcbiAgdmFyIHJlWFVVdGV4dCA9IHJlWFVVLnRvRml4ZWQoNCk7XHJcbiAgdmFyIG5hdkl0ZW1CdG47XHJcbiAgdmFyIG5hdlJlU2l6ZTtcclxuXHJcblxyXG4gIGlmICggc2VjMDFSYXRpbyA+IDEuNzc4ICkge1xyXG4gICAgaWYgKCBzZWMwMVdpZHRoID4gMTkyMCkge1xyXG4gICAgICByZVNpemVEID0gc2VjMDFXaWR0aCAvIDE5MjA7XHJcbiAgICAgIHJlWFVVID0gKCBzZWMwMVdpZHRoIC0gMTkyMCApLzI7XHJcbiAgICAgIG5hdkl0ZW1CdG4gPSA1MCAqIHJlU2l6ZUQ7XHJcbiAgICAkKCcudGV4dDAzJykudGV4dCgndHlwZS1BJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZVNpemVEID0gc2VjMDFXaWR0aCAvIDE5MjA7XHJcbiAgICAgIHJlWFVVID0gKCBzZWMwMVdpZHRoIC0gMTkyMCApLzI7XHJcbiAgICAgIG5hdkl0ZW1CdG4gPSAoKCAxNjIgKiByZVNpemVEICkgLzQgKTtcclxuICAgICAgLy8gJCgnLnRleHQwMycpLnRleHQoJ3R5cGUtYicpO1xyXG4gICAgfVxyXG5cclxuICB9IGVsc2UgaWYgKCBzZWMwMVdpZHRoID4gMTkyMCkge1xyXG4gICAgcmVTaXplRCA9IHNlYzAxSGVpZ2h0IC8gMTA4MDtcclxuICAgIHJlWFVVID0gMDtcclxuXHJcbiAgICAvLyAkKCcudGV4dDAzJykudGV4dCgndHlwZS1jJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlU2l6ZUQgPSBzZWMwMUhlaWdodCAvIDEwODA7XHJcbiAgICByZVhVVSA9ICggc2VjMDFXaWR0aCAtIDE5MjAgKS8yO1xyXG4gICAgbmF2SXRlbUJ0biA9ICgoIDE2MiAqIHJlU2l6ZUQgKSAvNCApO1xyXG5cclxuICAgIC8vIG5hdkl0ZW1CdG4gPSAoICggKCAoIHNlYzAxSGVpZ2h0ICogMS43NzgpL3JlU2l6ZUQgKSAtIChzZWMwMVdpZHRoL3JlU2l6ZUQpICkvMiApO1xyXG4gICAgLy9cclxuICAgIC8vICQoJy50ZXh0MDMnKS50ZXh0KCd0eXBlLWQnKTtcclxuXHJcbiAgfVxyXG5cclxuICB0ZXN0ID0gKCAkKCcuc2VjdGlvbjAxJykud2lkdGgoKSk7XHJcbiAgdGVzdDIgPSAgJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgdGVzdDMgPSAwO1xyXG5cclxuICAkKCcuc2VjdGlvbjAxJykuY3NzKHtcclxuICAgICctd2Via2l0LXRyYW5zZm9ybScgOiAnc2NhbGUoJyArIHJlU2l6ZUQgKyAnKScsXHJcbiAgICAndHJhbnNmb3JtJyA6ICdzY2FsZSgnICsgcmVTaXplRCArICcpJ1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKCByZVNpemVEICk7XHJcbiAgJCgnLm5hdicpLmNzcyh7XHJcbiAgICBsZWZ0IDogcmVYVVVcclxuICB9KTtcclxuXHJcblxyXG4gICQoJy5nbmItYnV0dG9uJykuY3NzKHtcclxuICAgICctd2Via2l0LXRyYW5zZm9ybScgOiAnc2NhbGUoJyArIHJlU2l6ZUQgKyAnKScsXHJcbiAgICAndHJhbnNmb3JtJyA6ICdzY2FsZSgnICsgcmVTaXplRCArICcpJyxcclxuICAgIGxlZnQgOiBuYXZJdGVtQnRuLFxyXG4gICAgdG9wIDogbmF2SXRlbUJ0blxyXG4gIH0pO1xyXG5cclxuXHJcbiAgIEduYkxpc3RJdGVtUmlnaHQgPSAoLSg0NzAtKDQ3MCpyZVNpemVEKSkpLzI7XHJcbiAgIEduYkxpc3RJdGVtQm90dG9tID0gKC0oNjAwLSg2MDAqcmVTaXplRCkpKS8yO1xyXG5cclxuICAkKCcuZ25iLWxpc3QtaXRlbScpLmVxKDApLmNzcyh7XHJcbiAgICAnLXdlYmtpdC10cmFuc2Zvcm0nIDogJ3NjYWxlKCcgKyByZVNpemVEICsgJyknLFxyXG4gICAgLy8gJ3RyYW5zZm9ybScgOiAnc2NhbGUoJyArIHJlU2l6ZUQgKyAnKScsXHJcbiAgICByaWdodCA6IEduYkxpc3RJdGVtUmlnaHQgLFxyXG4gICAgYm90dG9tIDogR25iTGlzdEl0ZW1Cb3R0b21cclxuICB9KTtcclxuXHJcbiAgJCgnLmJnJykuY3NzKHtcclxuICAgIGxlZnQgOiByZVhVVVxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG4gIC8vICQoJy50ZXh0MDEnKS50ZXh0KCfqsIDroZwg67mE7JyoICwgMTkyMCBVUCAgICAgKHJlWFVVKSA6ICcrIHJlWFVVdGV4dCApO1xyXG4gIC8vICQoJy50ZXh0MDInKS50ZXh0KCfqsIDroZwg67mE7JyoICwgMTkyMCBET1dOIChyZVNpemVEKSA6ICcrIHJlU2l6ZUQpO1xyXG4gIC8vICQoJy53aW53aWR0aCcpLnRleHQoJ+qwgOuhnCDssL0g7YGs6riwIDogJysgc2VjMDFXaWR0aCArICdweCcpO1xyXG4gIC8vICQoJy53aW5oZWlnaHQnKS50ZXh0KCfshLjroZwg7LC9IO2BrOq4sCA6ICcrIHNlYzAxSGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgLy8gJCgnLnNlY3Rpb24tMDFSYXRpbycpLnRleHQoJ+qwgOuhnOyEuOuhnOu5hOycqCA6ICcrIHNlYzAxUmF0aW8udG9GaXhlZCg0KSApO1xyXG4gIC8vICQoJy50ZXh0MDQnKS50ZXh0KCdzZWMwMVdpZHRoIHggcmVTaXplRCAgOiAnKyBzZWMwMVdpZHRoICsgJy0nICsgcmVTaXplRCArICc9JyArIChzZWMwMVdpZHRoICogcmVTaXplRCkpO1xyXG4gIC8vICQoJy50ZXh0MDUnKS50ZXh0KCdyZVNpemVEIDogJyArICByZVNpemVEICk7XHJcbiAgLy8gJCgnLnRleHQwNicpLnRleHQoJ3Rlc3Q0IDogJyArICB0ZXN0NCApO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvdWNoSGFuZGxlcihldmVudClcclxue1xyXG4gICAgdmFyIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcclxuICAgICAgICBmaXJzdCA9IHRvdWNoZXNbMF0sXHJcbiAgICAgICAgdHlwZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICBzd2l0Y2goZXZlbnQudHlwZSlcclxuICAgIHtcclxuICAgICAgICBjYXNlIFwidG91Y2hzdGFydFwiOiB0eXBlID0gXCJtb3VzZWRvd25cIjsgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInRvdWNobW92ZVwiOiAgdHlwZT1cIm1vdXNlbW92ZVwiOyBicmVhaztcclxuICAgICAgICBjYXNlIFwidG91Y2hlbmRcIjogICB0eXBlPVwibW91c2V1cFwiOyBicmVhaztcclxuICAgICAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW5pdE1vdXNlRXZlbnQodHlwZSwgY2FuQnViYmxlLCBjYW5jZWxhYmxlLCB2aWV3LCBjbGlja0NvdW50LFxyXG4gICAgLy8gICAgICAgICAgICAgICAgc2NyZWVuWCwgc2NyZWVuWSwgY2xpZW50WCwgY2xpZW50WSwgY3RybEtleSxcclxuICAgIC8vICAgICAgICAgICAgICAgIGFsdEtleSwgc2hpZnRLZXksIG1ldGFLZXksIGJ1dHRvbiwgcmVsYXRlZFRhcmdldCk7XHJcblxyXG4gICAgdmFyIHNpbXVsYXRlZEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50XCIpO1xyXG4gICAgc2ltdWxhdGVkRXZlbnQuaW5pdE1vdXNlRXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdC5zY3JlZW5YLCBmaXJzdC5zY3JlZW5ZLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdC5jbGllbnRYLCBmaXJzdC5jbGllbnRZLCBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMC8qbGVmdCovLCBudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QudGFyZ2V0LmRpc3BhdGNoRXZlbnQoc2ltdWxhdGVkRXZlbnQpO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpXHJcbntcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoSGFuZGxlciwgdHJ1ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRvdWNoSGFuZGxlciwgdHJ1ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdG91Y2hIYW5kbGVyLCB0cnVlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0b3VjaEhhbmRsZXIsIHRydWUpO1xyXG59XHJcbiJdfQ==
