$(function() {
    setTimeout(function() {
        $('.inner-right .box').slide();
        // console.log($('.box'))
        // console.log($('.txtScroll-top .box'))
        $(window).scroll(function() {
            var h = $('.right-fixed').offset().top;
            if (h > 200) {
                $('#ul').addClass('fixed');
                $('#ul .lilast').addClass('hide');

                $('#ul .ulhide').removeClass('hide');

                $('#last').removeClass('hide')

            } else {
                $('#ul').removeClass('fixed');
                $('#ul .lilast').removeClass('hide');

                $('#ul .ulhide').addClass('hide');

                $('#last').addClass('hide')
            }
        });
        //
        $('.ulbox>ul').on('click', 'li', function() {
            $(this).addClass('chenge').siblings().removeClass('chenge');
            console.log(this)
        });
        //搜索功能
        $('#search').on('click', function() {
            var keyword;
            //如果没有输入，则根据placeholder进行搜索
            if ($('.inp > input ').val() == '') {
                keyword = {
                    "key": $('.inp>input').attr('placeholder')
                };
            } else {
                keyword = {
                    "key": $('.inp > input ').val()
                };
            };

            $.ajax({
                type: 'get',
                url: '../php/foods.php',
                data: keyword,
                // dataType: "json",
                success: function(data) {
                    data = JSON.parse(data);
                    var elems = {};
                    //如果拿到的数据不为空
                    if (data.length) {
                        // console.log(data);
                        var elems = {};
                        $('.content').empty();
                        elems.outbox = $('<div >');
                        elems.outbox.addClass('living-c-btm clear'); //创建外部盒子
                        $('.content').append(elems.outbox);
                        for (var i = 0; i < data.length; i++) {
                            console.log(data[i].f_price);
                            elems.innerbox = $('<div/>').addClass('living-box f'); //创建内部盒子；
                            elems.Tdiv = $('<div/>').addClass('living-box-top clear') //内部盒子顶部DIV
                            elems.a = $('<a/>').attr('href', data[i].f_href).append($('<img/>').attr('src', data[i].f_img));
                            elems.Tdiv.append(elems.a);
                            // elems.img = $('<img/>').attr('src', data[i].f_img);//创建img添加图片地址，并放入创建的a中


                            elems.Bdiv = $('<div/>').addClass('living-box-btm') //内部盒子底部DIV
                            elems.span = $(' <span/> ').html(data[i].f_tips);
                            elems.h4 = $('<h4/>').append($('<a/>').attr('href', data[i].f_href).html(data[i].f_title));
                            elems.small = $('<small/>').html('￥' + data[i].f_price);
                            elems.Bdiv.append(elems.span).append(elems.h4).append(elems.small);
                            elems.innerbox.append(elems.Tdiv).append(elems.Bdiv);

                            elems.outbox.append(elems.innerbox);
                        }

                    } else {
                        alert('您搜索的东西不存在')
                    } //搜索的东西不存在
                }
            });
        });


        //购物车图标显示添加的商品
        var str = shopCart.getCookie('yanxuan_shop_cart');
        if (str) { //如果cookie中存有数据
            var arr = str.split('&');
            var inarr, newarr = [];
            var G = {},
                elems = {},
                conutprice = 0;
            for (var i = 0; i < arr.length; i++) {
                var inarr = arr[i].split('|');
                newarr.push(inarr);
            }
            // console.log(newarr);
            for (var i = 0; i < newarr.length; i++) { //有几个商品
                // 在购物车中动态显示
                var addprice = 0;
                G.price = parseFloat(newarr[i][newarr[i].length - 2]); //商品价格
                G.sum = Number(newarr[i][newarr[i].length - 1]); //商品数量
                addprice = G.sum * G.price;
                conutprice += addprice;
                elems.a = $('<a/>').attr('href', 'http://you.163.com/item/detail?id=3385008').append($('<img/>').attr('src', newarr[i][2]));

                elems.mdiv = $('<div/>').addClass('C-mid-box').append($('<a>').attr('href', 'http://you.163.com/item/detail?id=3385008').html(newarr[i][1]));
                elems.p = $('<p/>').append($('<span/>').html(newarr[i][0])).append($('<i/>').html('×' + G.sum));
                elems.mdiv.append(elems.p);

                elems.rdiv = $('<div/>').addClass('C-right-box').append($('<span/>').html('￥' + G.price)).append($('<i/>').html('×'));

                elems.Cul = $('<li/>').append(elems.a).append(elems.mdiv).append(elems.rdiv)

                $('#H-cart .box-inner .box-inner-in>ul').append(elems.Cul);

            };
            $('.icon-gouwuche1>i').html(newarr.length);
            $('.J-left>span').html('￥' + conutprice.toFixed(2));

        };
        $('.jisuan .J-right').on('click', function() {
            location.href = 'http://10.31.157.65:8080/OurProject/src/html/cart.html';
        });
        $('#land,#H-zhuce').on('click', function() {
            $('body').append($('<div/>').attr('style', 'z-index:10000').load('login.html '));
        });
        if (window.sessionStorage.getItem('name')) {
            var data = sessionStorage.getItem('name');
            $('#land').html("hi !   " + data);
            $('#H-zhuce').empty();
        }
    }, 1000);
});