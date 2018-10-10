$(function() {
    //初始化
    var count = 0;
    var $li = $(".slider>.slider_list>li");
    $(".point li").eq(0).addClass("active");
    $li.eq(0).addClass("show");
    //定时器
    var timeout = setInterval(function() {
        count++;
        if (count == $li.length) {
            count = 0;
        }
        $li.eq(count).addClass("show").siblings().removeClass("show");
        $(".point li").eq(count).addClass("active").siblings().removeClass('active');
    }, 3000);
    $('.slider').hover(function() {
            clearInterval(timeout);
        }, function() {
            timeout = setInterval(function() {
                count++;
                if (count == $li.length) {
                    count = 0;
                }
                $li.eq(count).addClass("show").siblings().removeClass("show");
                $(".point li").eq(count).addClass("active").siblings().removeClass('active');
            }, 6000);
        })
        //
        //向右按钮
    $(".next").click(function() {
        count++;
        if (count == $li.length) {
            count = 0;
        }
        $li.eq(count).addClass("show").siblings().removeClass("show");
        $(".point li").eq(count).addClass("active").siblings().removeClass('active');
        console.log(count);
    });
    //向左按钮
    $(".prve").click(function() {
        count--;
        if (count == -1) {
            count = $li.length - 1;
        }
        console.log(count);
        $li.eq(count).addClass("show").siblings().removeClass("show");
        $(".point li").eq(count).addClass("active").siblings().removeClass('active');
    });
    $(".point li").mouseenter(function() {
        $(this).addClass('active').siblings().removeClass("active");
        $li.eq($(this).index()).fadeIn().siblings().fadeOut();
        count = $(this).index();
    });
});