$(function() {
    setTimeout(function() {
        $('.txtScroll-top .box').slide();
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
        $('#search').on('click', function() {
<<<<<<< HEAD
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
            }


            // var keyword = {
            //     "key": $('.inp > input ').val()
            // };
=======
            // console.log($('.inp>input').val());
            //如果没有输入，则根据placeholder进行搜索
            var keyword = {
                "key": $('.inp > input ').val()
            };
>>>>>>> b18b43ed9ef2c00a3b1120ae67b09380b3c4bb4d

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
        })
    }, 1000)
})