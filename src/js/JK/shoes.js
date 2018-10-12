$(function() {
    if (window.XMLHttpRequest) {
        $.ajax({
            type: "get",
            dataType: "json",
            url: "../php/shoes.php",
            async: false, //为了让懒加载在ajax请求之后执行
            success: function(data) {
                var elem = {};
                if (data.length) {
                    for (var i = 0; i < data.length; i++) {
                        elem.li = $('<li/>').addClass("item");
                        elem.div_product = $('<div/>').addClass("product");
                        elem.li.append(elem.div_product);
                        //hd
                        elem.div_hd = $('<div/>').addClass("hd");
                        elem.div_product.append(elem.div_hd);
                        //创建img src=" "
                        elem.a1 = $('<a/>');
                        elem.div_hd.append(elem.a1);
                        elem.img = $('<img/>').attr('src', " ").attr('data-src', data[i].b_url);
                        // src=" " data-src="../images/image_shoes/pic_090.png" alt=""
                        elem.a1.append(elem.img)
                            //创建颜色可选
                        elem.div_colorNum = $("<div/>").addClass("colorNum");
                        elem.div_colorNum1 = $("<span/>").html(data[i].b_colNum);
                        elem.div_colorNum2 = $("<span/>").html("色可选");
                        elem.div_colorNum.append(elem.div_colorNum1);
                        elem.div_colorNum.append(elem.div_colorNum2);
                        elem.a1.append(elem.div_colorNum);
                        //bd
                        elem.div_bd = $("<div/>").addClass("bd");
                        elem.div_product.append(elem.div_bd);
                        //判断商品售卖情况
                        elem.div_prdTags = $('<div/>').addClass("prdTags");
                        elem.div_bd.append(elem.div_prdTags);
                        switch (Number(data[i].b_part)) {
                            case 3:
                                break;
                            case 1:
                                elem.span_prd = $('<span/>').html('爆品').addClass("itemTag1");
                                elem.div_prdTags.append(elem.span_prd);
                                break;
                            case 2:
                                elem.span_prd = $('<span/>').html('限时购').addClass("itemTag1");
                                elem.div_prdTags.append(elem.span_prd);
                                break;
                            case 0:
                                elem.span_prd = $('<span/>').html('新品').addClass("itemTag");
                                elem.div_prdTags.append(elem.span_prd);
                                break;
                        }
                        // 商品名称
                        elem.divname = $("<div/>").addClass("name");
                        elem.a2 = $('<a/>');
                        elem.divspan = $("<span/>").html(data[i].b_name);
                        elem.a2.append(elem.divspan);
                        elem.divname.append(elem.a2);
                        elem.div_bd.append(elem.divname);
                        // 价格
                        elem.p_price = $("<p/>").addClass("price");
                        elem.span_newp = $('<span/>');
                        elem.p_price.append(elem.span_newp);
                        elem.span_rmb = $('<span/>').html("¥");
                        elem.span_n = $('<span/>').html(data[i].b_price);
                        elem.span_newp.append(elem.span_rmb);
                        elem.span_newp.append(elem.span_n);
                        elem.div_bd.append(elem.p_price);
                        //判断是否有折扣
                        if (data[i].b_oprice > data[i].b_price) {
                            elem.span_oldp = $('<del/>').html('¥' + data[i].b_oprice);
                            // elem.span_oldp.addClass('counterPrice');
                            elem.p_price.append(elem.span_oldp);
                        }
                        //描述
                        elem.div_desc = $('<div/>').addClass("introu");
                        elem.hr = $('<hr/>');
                        elem.p_desc = $('<p/>').html(data[i].b_tips);
                        elem.div_desc.append(elem.hr);
                        elem.div_desc.append(elem.p_desc);
                        elem.div_bd.append(elem.div_desc);
                        //
                        $('.xl>ul').append(elem.li);
                    }
                    var a = $('.xl>ul').clone();
                    $('.mm').append(a);

                }

            },
            error: function(err) {
                console.log("失败");
            }
        });
    }

});