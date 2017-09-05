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
