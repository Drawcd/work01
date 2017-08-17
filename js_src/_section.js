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
