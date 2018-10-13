$(function() {
    //选项卡
    (function() {
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
    })();
    //video切换
    (function() {
        var list = $("#list");
        var y = -60;
        $('#prev').click(function() {
            if (y === -1140) {
                y = -60;
                list.css('top', '-60px');
            }
            y -= 180;
            list.animate({
                'top': y
            }, 500);
        });
        $('#next').click(function() {
            if (y === -60) {
                y = -1140;
                list.css('top', '-1140px');
            }
            y += 180;
            list.animate({
                'top': y
            }, 500);
        });
        //显示在左侧
        var li = $('#list li');
        var pic = $('#left-pic img');
        var _this;
        var arr = ['https://yanxuan.nosdn.127.net/6acc419dff7ed1e7bcea0ac25c28a39c.mp4?vframe=&offset=2&resize=350x180&quality=95', 'https://yanxuan.nosdn.127.net/cfbb4faa90b958f5cfa3b06ad1d3e4eb.mp4?vframe=&offset=2&resize=350x180&quality=95', 'https://yanxuan.nosdn.127.net/d55c12d1fee65c82e50a08b0ddecc29b.mp4?vframe=&offset=2&resize=350x180&quality=95', 'https://yanxuan.nosdn.127.net/e6abbab0807796874af0b3b3ab5864d0.mp4?vframe=&offset=2&resize=350x180&quality=95', 'https://yanxuan.nosdn.127.net/f63018da6446083a7ac1ccfc628590ef.mp4?vframe=&offset=2&resize=350x180&quality=95', 'https://yanxuan.nosdn.127.net/8cba71618a973528b54d941eeabf6a0a.mp4?vframe=&offset=2&resize=350x180&quality=95'];
        li.click(function() {
            _this = $(this).index();
            pic.attr('src', arr[_this]);
        });
    })();
});