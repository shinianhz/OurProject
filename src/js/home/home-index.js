$(function() {
    if (window.XMLHttpRequest) {
        $.ajax({
            type: 'get',
            url: '../php/goods.php',
            success: function(data) {
                data = JSON.parse(data);
                var elems = {};
                // console.log(data);
                //如果拿到的数据不为空
                if (data.length) {
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
        // if (data.length) {
        //     var elems = {};
        //     $('.content').empty();
        //     elems.outbox = $('<div >');
        //     elems.outbox.addClass('living-c-btm clear'); //创建外部盒子

        //     for (var i = 0; i < data[i].length; i++) {

        //         elems.innerbox = $('<div/>').addClass('living-box f'); //创建内部盒子；
        //         elems.Tdiv = $('<div/>').addClass('living-box-top clear') //内部盒子顶部DIV
        //         elems.a = $('<a/>').attr('href', data[i].f_href).append($('<img/>').attr('src', data[i].f_img));
        //         elems.Tdiv.append(elems.a);
        //         // elems.img = $('<img/>').attr('src', data[i].f_img);//创建img添加图片地址，并放入创建的a中


        //         elems.Bdiv = $('<div/>').addClass('living-box-btm') //内部盒子底部DIV
        //         elems.span = $( < span / > ).val(data[i].f_tips);
        //         elems.h4 = $( < h4 / > ).append($('<a/>').attr('href', data[i].f_href).val(data[i].f_title));
        //         elems.small = $('<small/>').val('￥' + data[i].f_price);
        //         elems.Bdiv.append(elems.span).append(elems.h4).append(elems.small);
        //         elems.innerbox.append(elems.Tdiv).append(elems.Bdiv);





        //     }
        // } else {
        //     alert('您搜索的东西不存在')
        // } //搜索的东西不存在
        // $.ajax({
        //     type: 'get',
        //     url: '../php/foods.php',
        //     success: function(data) {
        //         data = JSON.parse(data);
        //         var elems = {};
        //         console.log(data);
        //         //如果拿到的数据不为空
        //     }
        // });
    }
})