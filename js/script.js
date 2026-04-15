$(document).ready(function(){
    // nav 설정
    $('.sub_mn').hide()
    $('.nav > ul > li').mouseenter(function(){
        $('.sub_mn').show().css({height:0}).animate({height:300})
    })
    $('.sub_mn').mouseleave(function(){
        $(this).css({height:300}).animate({height:0})
    })

    // 메인슬라이드 설정
    var slide = $('#slide > .slide_img > li')
    var current = 0
    var setIntervalId

    timer()

    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1
            if(n == 3){
                n = 0
            }
            move(n)
        }, 3000)
    }
    function move(i){
        if(current == 3) return;
        var currentEl = slide.eq(current)
        var nextEl = slide.eq(i)
        currentEl.css({left:0}).stop().animate({left:'-100%'}, 1000)
        nextEl.css({left:'100%'}).stop().animate({left:0}, 1000)
        current = i
    }
})