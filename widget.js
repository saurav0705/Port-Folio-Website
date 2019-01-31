$(document).ready(function(){
$(".before").click(function(){
 $(".child").fadeIn();
 $(".before").css("display","none");
 $(".master").animate({
     width:'50px'
 });
 $(".after").fadeIn();
 $(".master").css("background-color", "red");
 $(".container").css("filter","blur(5px)");
});
});

$(document).ready(function(){
    $(".after").click(function(){
     $(".child").fadeOut();
     $(".master").animate({
         width:'110px'
     });
     setTimeout(function(){$(".before").fadeIn()},400)
     $(".after").fadeOut();
     $(".master").css("background-color", "orange");
     $(".container").css("filter","none");
    });
    });