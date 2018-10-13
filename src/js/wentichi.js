$(function() {
    //初始化
    var count = 0;
    var $ul = $(".m-slick>.slickContent>ul");
    $(".point li").eq(0).addClass("active");
    $ul.eq(0).addClass("show");

    //向右按钮
    $(".next").click(function() {
        count++;
        if (count == $ul.length) {
            count = 0;
        }
        $ul.eq(count).addClass("show").siblings().removeClass("show");
        $(".point li").eq(count).addClass("active").siblings().removeClass('active');
        console.log(count);
    });
    //向左按钮
    $(".prve").click(function() {
        count--;
        if (count == -1) {
            count = $ul.length - 1;
        }
        console.log(count);
        $ul.eq(count).addClass("show").siblings().removeClass("show");
        $(".point li").eq(count).addClass("active").siblings().removeClass('active');
    });
    $(".point li").mouseenter(function() {
        $(this).addClass('active').siblings().removeClass("active");
        $ul.eq($(this).index()).fadeIn().siblings().fadeOut();
        count = $(this).index();
    });
});