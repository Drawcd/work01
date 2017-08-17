$(window).resize( function () {
  var section01Width = $(window).width();
  var section01Height = $(window).height();
  var test01 = $('.section01').width();
  var section01Ratio = section01Width/section01Height ;
  var section01WidthScale = 1920 / $(window).width() ;
  var section01HeightScale = 1080 / $(window).height() ;
  var section01Scale = section01Ratio / 1.778 ;



  $('.winwidth').text('가로 창 크기 : '+ section01Width + 'px');
  $('.winheight').text('세로 창 크기 : '+ section01Height + 'px');
  $('.section01Ratio').text('가로세로비율 : '+ section01Ratio.toFixed(4) );




  if ( section01Ratio > 1.778 ) {
    if ( section01Width > 1920) {
      var reSizeD = section01Width / 1920;
      var reXUU = ( section01Width - 1920 )/2;
      var reXUUtext = reXUU.toFixed(4);



    $('.text01').text('가로 비율 , 1920 UP     (reXUU) : '+ reXUUtext );
    $('.text02').text('가로 비율 , 1920 DOWN (reSizeD) : '+ reSizeD);
    } else {
      reSizeD = 1;
      reXUU = 0;
      var reXUUtext = reXUU.toFixed(4);

      $('.text02').text('가로 비율 , 1920 DOWN (reSizeD) : '+ retset );
      $('.text01').text('가로 비율 , 1920 UP     (reXUU) : '+ 'none');
    }

  } else {}
    // var reXD = ( section01Width - 1920 )/2;
    // var reSizeD = section01Height / 1080;
    // $('.section01').css({
    //   '-webkit-transform' : 'scale(' + reSizeD + ')',
    //   'transform' : 'scale(' + reSizeD + ')'
    // });
    // $('.bg').css({
    //   left : reXD
    // });


    // $('.bg-mountain').css({
    //   '-webkit-transform' : 'scale(' + reSize + ')',
    //   'transform' : 'scale(' + reSize + ')'
    // });
    // $('.bg-ground').css({
    //   '-webkit-transform' : 'scale(' + reSize + ')',
    //   'transform' : 'scale(' + reSize + ')'
    // });
    // $('.bg-sea').css({
    //   '-webkit-transform' : 'scale(' + reSize + ')',
    //   'transform' : 'scale(' + reSize + ')'
    // });
  // } else if ( section01Ratio < 1.778 ){
    // $('.section01').css({
    //   '-webkit-transform' : 'scale(' + section01HeightScale + ')',
    //   'transform' : 'scale(' + section01HeightScale + ')'
    // });
  // }
  $('.section01').css({
    '-webkit-transform' : 'scale(' + reSizeD + ')',
    'transform' : 'scale(' + reSizeD + ')'
  });
  $('.bg').css({
    left : reXUU
  });

});
