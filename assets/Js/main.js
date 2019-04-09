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
  /////////////////////
 
  ////////////////////////////////////////
  function information(valeur){
    $(document).ready(function(e) {
        $(valeur).click(function(){
				$imgsrc=$('.img1 img').attr('src');
				alert("Image Source Is :"+$imgsrc);
			});
    });
  }

/*
  //alert message
document.querySelector('.alert').style.display = 'block';

//Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000)*/