$(function() {
    if (window.XMLHttpRequest) {
        //动态加载内容
        $.ajax({
            type: "post",
            dataType: "json",
            url: "../php/ele.php",
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
                        elem.img = $('<img/>').attr('src', " ").attr('data-src', data[i].l_url);
                        // src=" " data-src="../images/image_shoes/pic_090.png" alt=""
                        elem.a1.append(elem.img)
                            //创建颜色可选
                        if (data[i].l_colNum) {
                            elem.div_colorNum = $("<div/>").addClass("colorNum");
                            elem.div_colorNum1 = $("<span/>").html(data[i].l_colNum);
                            elem.div_colorNum2 = $("<span/>").html("色可选");
                            elem.div_colorNum.append(elem.div_colorNum1);
                            elem.div_colorNum.append(elem.div_colorNum2);
                            elem.a1.append(elem.div_colorNum);
                        }
                        //bd
                        elem.div_bd = $("<div/>").addClass("bd");
                        elem.div_product.append(elem.div_bd);
                        //判断商品售卖情况
                        elem.div_prdTags = $('<div/>').addClass("prdTags");
                        elem.div_bd.append(elem.div_prdTags);
                        switch (Number(data[i].l_part)) {
                            case 1:
                                elem.span_prd = $('<span/>').html('新品').addClass("itemTag");
                                elem.div_prdTags.append(elem.span_prd);
                                break;
                            case 2:
                                elem.span_prd = $('<span/>').html('限时购').addClass("itemTag1");
                                elem.div_prdTags.append(elem.span_prd);
                                break;
                            case 0:
                                elem.span_prd = $('<span/>').html('爆品').addClass("itemTag2");
                                elem.div_prdTags.append(elem.span_prd);
                                break;
                        }
                        // 商品名称
                        elem.divname = $("<div/>").addClass("name");
                        elem.a2 = $('<a/>');
                        elem.divspan = $("<span/>").html(data[i].l_name);
                        elem.a2.append(elem.divspan);
                        elem.divname.append(elem.a2);
                        elem.div_bd.append(elem.divname);
                        // 价格
                        elem.p_price = $("<p/>").addClass("price");
                        elem.span_newp = $('<span/>');
                        elem.p_price.append(elem.span_newp);
                        elem.span_rmb = $('<span/>').html("¥");
                        elem.span_n = $('<span/>').html(data[i].l_price);
                        elem.span_newp.append(elem.span_rmb);
                        elem.span_newp.append(elem.span_n);
                        elem.div_bd.append(elem.p_price);
                        //判断是否有折扣
                        if (data[i].l_oprice) {
                            elem.span_oldp = $('<del/>').html('¥' + data[i].l_oprice);
                            elem.p_price.append(elem.span_oldp);
                        }
                        //描述
                        elem.div_desc = $('<div/>').addClass("introu");
                        elem.hr = $('<hr/>');
                        elem.p_desc = $('<p/>').html(data[i].l_tips);
                        elem.div_desc.append(elem.hr);
                        elem.div_desc.append(elem.p_desc);
                        elem.div_bd.append(elem.div_desc);
                        //
                        $('.sh>ul').append(elem.li);
                    }
                }
            },
            error: function(err) {
                console.log("失败");
            }
        });
        $.ajax({
            type: "post",
            dataType: "json",
            url: "../php/eles.php",
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
                        elem.img = $('<img/>').attr('src', " ").attr('data-src', data[i].k_url);
                        elem.a1.append(elem.img)
                            //创建颜色可选
                        if (data[i].k_colNum) {
                            elem.div_colorNum = $("<div/>").addClass("colorNum");
                            elem.div_colorNum1 = $("<span/>").html(data[i].k_colNum);
                            elem.div_colorNum2 = $("<span/>").html("色可选");
                            elem.div_colorNum.append(elem.div_colorNum1);
                            elem.div_colorNum.append(elem.div_colorNum2);
                            elem.a1.append(elem.div_colorNum);
                        }
                        //bd
                        elem.div_bd = $("<div/>").addClass("bd");
                        elem.div_product.append(elem.div_bd);
                        //判断商品售卖情况
                        elem.div_prdTags = $('<div/>').addClass("prdTags");
                        elem.div_bd.append(elem.div_prdTags);
                        switch (Number(data[i].k_part)) {
                            case 1:
                                elem.span_prd = $('<span/>').html('新品').addClass("itemTag");
                                elem.div_prdTags.append(elem.span_prd);
                                break;
                            case 2:
                                elem.span_prd = $('<span/>').html('限时购').addClass("itemTag1");
                                elem.div_prdTags.append(elem.span_prd);
                                break;
                            case 0:
                                elem.span_prd = $('<span/>').html('爆品').addClass("itemTag2");
                                elem.div_prdTags.append(elem.span_prd);
                                break;
                        }
                        // 商品名称
                        elem.divname = $("<div/>").addClass("name");
                        elem.a2 = $('<a/>');
                        elem.divspan = $("<span/>").html(data[i].k_name);
                        elem.a2.append(elem.divspan);
                        elem.divname.append(elem.a2);
                        elem.div_bd.append(elem.divnamedivname);
                        // 价格
                        elem.p_price = $("<p/>").addClass("price");
                        elem.span_newp = $('<span/>');
                        elem.p_price.append(elem.span_newp);
                        elem.span_rmb = $('<span/>').html("¥");
                        elem.span_n = $('<span/>').html(data[i].k_price);
                        elem.span_newp.append(elem.span_rmb);
                        elem.span_newp.append(elem.span_n);
                        elem.div_bd.append(elem.p_price);
                        //判断是否有折扣
                        if (data[i].k_oprice) {
                            elem.span_oldp = $('<del/>').html('¥' + data[i].k_oprice);
                            elem.p_price.append(elem.span_oldp);
                        }
                        //描述
                        elem.div_desc = $('<div/>').addClass("introu");
                        elem.hr = $('<hr/>');
                        elem.p_desc = $('<p/>').html(data[i].k_tips);
                        elem.div_desc.append(elem.hr);
                        elem.div_desc.append(elem.p_desc);
                        elem.div_bd.append(elem.div_desc);
                        //
                        $('.m>ul').append(elem.li);
                    }

                }
            },
            error: function(err) {
                console.log("失败");
            }
        });
        //按价格排序
        $('.sorts .c').on('click', "i", function() {
            var url = "";
            if ($(this).index()) {
                url = "../php/ele2.php"; //index为1时选择下箭头  从大到小
            } else {
                url = "../php/ele1.php"; //index为0时选择上箭头  从小到大
            }
            $.ajax({
                type: "get",
                dataType: "json",
                url: url,
                success: function(data) {
                    $('.sh>ul').empty();

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
                            elem.img = $('<img/>').attr('src', data[i].l_url);
                            // src=" " data-src="../images/image_shoes/pic_090.png" alt=""
                            elem.a1.append(elem.img)
                                //创建颜色可选
                            if (data[i].l_colNum) {
                                elem.div_colorNum = $("<div/>").addClass("colorNum");
                                elem.div_colorNum1 = $("<span/>").html(data[i].l_colNum);
                                elem.div_colorNum2 = $("<span/>").html("色可选");
                                elem.div_colorNum.append(elem.div_colorNum1);
                                elem.div_colorNum.append(elem.div_colorNum2);
                                elem.a1.append(elem.div_colorNum);
                            }

                            //bd
                            elem.div_bd = $("<div/>").addClass("bd");
                            elem.div_product.append(elem.div_bd);
                            //判断商品售卖情况
                            elem.div_prdTags = $('<div/>').addClass("prdTags");
                            elem.div_bd.append(elem.div_prdTags);
                            switch (Number(data[i].l_part)) {
                                case 1:
                                    elem.span_prd = $('<span/>').html('新品').addClass("itemTag");
                                    elem.div_prdTags.append(elem.span_prd);
                                    break;
                                case 2:
                                    elem.span_prd = $('<span/>').html('限时购').addClass("itemTag1");
                                    elem.div_prdTags.append(elem.span_prd);
                                    break;
                                case 0:
                                    elem.span_prd = $('<span/>').html('爆品').addClass("itemTag2");
                                    elem.div_prdTags.append(elem.span_prd);
                                    break;
                            }

                            // 商品名称
                            elem.divname = $("<div/>").addClass("name");
                            elem.a2 = $('<a/>');
                            elem.divspan = $("<span/>").html(data[i].l_name);
                            elem.a2.append(elem.divspan);
                            elem.divname.append(elem.a2);
                            elem.div_bd.append(elem.divname);
                            // 价格
                            elem.p_price = $("<p/>").addClass("price");
                            elem.span_newp = $('<span/>');
                            elem.p_price.append(elem.span_newp);
                            elem.span_rmb = $('<span/>').html("¥");
                            elem.span_n = $('<span/>').html(data[i].l_price);
                            elem.span_newp.append(elem.span_rmb);
                            elem.span_newp.append(elem.span_n);
                            elem.div_bd.append(elem.p_price);
                            //判断是否有折扣
                            if (data[i].l_oprice) {
                                elem.span_oldp = $('<del/>').html('¥' + data[i].l_oprice);
                                elem.p_price.append(elem.span_oldp);
                            }
                            //描述
                            elem.div_desc = $('<div/>').addClass("introu");
                            elem.hr = $('<hr/>');
                            elem.p_desc = $('<p/>').html(data[i].l_tips);
                            elem.div_desc.append(elem.hr);
                            elem.div_desc.append(elem.p_desc);
                            elem.div_bd.append(elem.div_desc);
                            //
                            $('.sh>ul').append(elem.li);

                        }
                    }
                },
                error: function(err) {
                    console.log("失败");
                }
            });
        });
    }

});