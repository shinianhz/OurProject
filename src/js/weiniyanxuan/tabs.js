$(function() {
    //获取对象
    var tabs = $('#tabs div'),
        pic = $('#tabs-box .position'),
        side = $('#sidebar'),
        sidepic = $('#sidebody>div'),
        sidetext = $('#sidebar>p');
    //选项卡
    tabs.click(function() {
        var that = $(this).index();
        tabs.eq(that).addClass('active').siblings().removeClass();
        pic.eq(that).addClass('show').siblings().removeClass('show');
        sidetext.eq(that).addClass('show').siblings().removeClass('show');
        sidepic.eq(that).addClass('show').siblings().removeClass('show');
    });
    //侧边栏
    var flag = true;
    side.click(function() {
        if (flag) {
            $(this).children('.show').html('收起&gt;').css('paddingTop', '200px');
            $(this).parent('.side').animate({
                right: 0
            }, 500);
            flag = false;
        } else {
            $(this).parent('.side').animate({
                right: -320
            }, 500);
            flag = true;
        }
    });
    //video切换
    var list = $("#list");
    var y = -60;
    $('#prev').click(function() {
        if (y == -1140) y = -60;
        y -= 180;
        list.css('transform', 'translateY(' + y + 'px)');
    });
    $('#next').click(function() {
        y += 180;
        if (y > -60) y = -1140;
        list.css('transform', 'translateY(' + y + 'px)');
    });
});