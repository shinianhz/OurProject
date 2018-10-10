$(function() {
    //添加鼠标移入时的按钮显示
    var arr = ['p0', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'];
    var index = 0,
        timer;
    //下一张
    $('.left').on('click', function() {
        left();
    });
    $('.right').on('click', function() {
        right();
    });
    //自动轮播
    $('.lunbo-box').hover(function() {
        stop();
    }, function() {
        timer = setInterval(right, 2000);
    });
    // 上一页函数；
    function left() {
        arr.unshift(arr[7]);
        arr.pop();
        $('.lunbo-box li').each(function(index, elem) {
            $(elem).removeClass().addClass(arr[index]);
        })
        index--;
        if (index < 0) {
            index = 7;
        }
        show();
    }

    function stop() {
        clearInterval(timer);
    }
    //下一张
    function right() {
        arr.push(arr[0]);
        arr.shift();
        $('.lunbo-box li').each(function(index, elem) {
            $(elem).removeClass().addClass(arr[index]);
        })
        index++;
        if (index > 7) {
            index = 0
        };
        show();
    }
    //底部按钮点击切换
    $('.button ').on('click', function(e) {
        //用事件委托 ，因为ajax是后执行的，引入的js选不到，通过ajax请求得到数据创建的DOM元素
        var _thisindex = $(e.target).index();
        var mindex = _thisindex - index;
        if (mindex == 0) {
            return;
        } else if (mindex > 0) {
            var newarr = arr.splice(0, mindex);
            arr = $.merge(arr, newarr);
            $('.lunbo-box li').each(function(i, e) {
                $(e).removeClass().addClass(arr[i]);
            })
            index = _thisindex;
            show();
        } else if (mindex < 0) {
            arr.reverse();
            var oldarr = arr.splice(0, -mindex);
            arr = $.merge(arr, oldarr);
            arr.reverse();
            $('.lunbo-box li').each(function(i, e) {
                $(e).removeClass().addClass(arr[i]);
            })
            index = _thisindex;
            show();
        }
    });
    //底部按钮高亮
    function show() {
        $('.button a').eq(index).addClass('color').siblings().removeClass('color');
    }
})