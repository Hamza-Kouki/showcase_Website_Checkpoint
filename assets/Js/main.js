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
//////////------------------------------
$(document).ready(function(){
  $("#hideAndShow").click(function(){
    $("#showElement").toggle();
  });
});
//////////------------------------------

var temp , imgId ,imgSrc , strPath , imgChange ;
function showImgUrl(temp){
imgSrc = document.getElementById(temp).getAttribute('src');
var str1 = '"';
var str2 = imgSrc;
var res = str1.concat(str2);
var newImgSrc = res.concat(str1);
var img = document.getElementById('toChange');
img.setAttribute('src', newImgSrc);
//---------------------------------------
console.log(newImgSrc);
alert(newImgSrc);
}
//////////////////////////////////////
  /*
  //alert message
document.querySelector('.alert').style.display = 'block';

//Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000)*/