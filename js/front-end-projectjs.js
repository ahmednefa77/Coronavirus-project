$(document).ready(function(){

 //$(".QAlist div p").hide();  
 //$(".QAlist div div").hide();
 //expand QAlist according to the item in main list is clicked
 $(".MainQAlist li").on("click",function(){
    $(".MainQAlist li").removeClass("activeitem");
    $(this).addClass("activeitem"); 
    $(".QAlist").hide();
     var list="."+$(this).data("list");
     $(list).show();
 })
 //toggle the paragraph when the QAlist item is clicked
$(".QAlist div li").on("click",function(){
    $(this).siblings().toggle();
   var icon= $(this).find('span').text();
   var newicon= icon=="-" ? "+":"-";
   if(newicon=="-") $(this).addClass("text-color2");
   else $(this).removeClass("text-color2")
   $(this).find('span').text(newicon);
})
//trigger the first item in the main list
$(".MainQAlist li:nth-child(1)").trigger("click");
//adjust the scroll event
$(window).on("scroll",function(){
    if ($(window).scrollTop()>500)
    $(".scrollbutton").show();
    else $(".scrollbutton").hide();
})
///scroll button click
$(".scrollbutton").on("click",function(){
    $(window).scrollTop(0);
    $(this).hide();
})
///toggle button
$(".togglebutton").on("click",function(){
    $(".togglebutton #toggleicon").toggleClass('fa-bars fa-times')
;
})
$(".nav-item").on("click",function(){
    if ($(".togglebutton").css("display")!="none")
    $(".togglebutton").trigger("click");

    //$(".togglebutton #toggleicon").toggleClass('fa-bars fa-times')

})
$(".collapse .nav-item").on("click","a",function(){
    $(".nav-link").css("color","#50658e");
    $(this).css("color","#2a81ea");
})
})