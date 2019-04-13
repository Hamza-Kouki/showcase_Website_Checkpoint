$(function(){
    $(window).scroll( function(){
      
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      
      $('.fade-ani').each(function(){
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
         if( bottom_of_window > bottom_of_object ){
          $(this).addClass('showing');
        }
        else{
          $(this).removeClass('showing');
        }
      });
  
    });
  });
  /*============================================================================*/
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
/*================================================================*/
  function showImgUrl(){
    var target = event.target /*|| event.srcElement*/;
    var id = target.id
    console.log(id);
    /*console.log('for full image url ' + $(id).prop('src') );
    console.log('for relative image url ' + $(id).attr('src'));*/
  }
  //////////////////////////////////////
  /*
  //alert message
document.querySelector('.alert').style.display = 'block';

//Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000)*/