$(function() {
    var w = -1090;
    var timer;
    var index = 0;
    //显示当前隐藏其他litext信息
    // var li;
    //
    // function litext(){
    //     li=$('#slide>li');
    //     if()
    // }
    //下一个
    function left() {
        if (w === -4360) {
            $('#slide').css('left', '-1090px');
            w = -1090;
        }
        w -= 1090;
        $('#slide').animate({
            'left': w
        }, 500);
        //
        index++;
        if (index === 3) index = 0;
        dots();
    };
    //上一个
    function right() {
        if (w === -1090) {
            $('#slide').css('left', '-4360px');
            w = -4360;
        }
        console.log(w);
        w += 1090;
        $('#slide').animate({
            'left': w
        }, 500);
        //
        index--;
        if (index === -1) index = 2;
        console.log(index);
        dots();
    };
    //停止
    function stop() {
        clearInterval(timer);
    }
    //自动播放
    $('.bannerWrapaer').hover(function() {
        stop();
    }, function() {
        timer = setInterval(left, 2000);
    });
    //蒙版
    $('.lunbo-box>div').hover(function() {
        $(this).stop().fadeOut(500);
    }, function() {
        $(this).stop().fadeIn(500);
    });
    //上一个
    $('.lunbo-box .left').click(function() {
        right();
    });
    //下一个
    $('.lunbo-box .right').click(function() {
        left();
    });
    //实现圆点点击切换
    $('.dots dd').click(function() {
        index = $(this).index();
        $('#slide').animate({
            'left': -1090 * (index + 1)
        }, 500);
        //
        dots();
    });
    //dots下方圆点
    function dots() {
        $('.dots dd').eq(index).addClass('dd-show').siblings().removeClass('dd-show');
    }
});