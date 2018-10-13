$(function() {
    // if (window.XMLHttpRequest) {
    $.ajax({
        type: 'get',
        url: '../php/goods.php',
        success: function(data) {
            data = JSON.parse(data);
            var elems = {};
            // console.log(data);
            //如果拿到的数据不为空
            if (data.length) {
                //动态创建轮播图
                for (var i = 0; i < data.length; i++) {
                    //动态创建li
                    elems.li = $('<li/>').addClass('p' + i);
                    elems.a = $('<a/>').attr('href', data[i].goods_href).append($('<img/>').attr('src', data[i].goods_img));
                    elems.li.append(elems.a);
                    $('.lunbo-box>ul').append(elems.li);
                    $('.button').append($('<a/>').attr('href', 'javascrpt:;'));
                }
                $('.button>a').eq(0).addClass('color');
            } else {
                alert('加载失败')
            }
        }

    });

    // };

})