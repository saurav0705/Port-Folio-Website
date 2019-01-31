function shrink(){
    $(".front").animate({
     height:'40%',width:'40%',
    left:'30%'
    });
    $(".decoy-image").css("border-radius","50%");
    
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
function f(){
    x=setTimeout(shrink,2000)
} 
$(document).ready(function(){
$(".aboutme").click(function(){
    $(".aboutmecontent").toggle("slow");
    $(".hiretxt").hide("slow");
    $(".carasol").hide("slow");
});
$(".hire").click(function(){
    $(".hiretxt").toggle("slow");
    $(".aboutmecontent").hide("slow");
    
    $(".carasol").hide("slow");
});
$(".gallery").click(function(){
    $(".carasol").toggle("slow");
    $(".aboutmecontent").hide("slow");
    $(".hiretxt").hide("slow");
    
});
});