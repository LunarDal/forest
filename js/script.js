$(document).ready(function(){
    $('.sub_mn').hide()
    $('.nav > ul > li').mouseenter(function(){
        $('.sub_mn').show().css({height:0}).animate({height:300})
    })
    $('.sub_mn').mouseleave(function(){
        $(this).css({height:300}).animate({height:0})
    })
})
