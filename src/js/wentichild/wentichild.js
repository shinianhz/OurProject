// $(function() {
//     var img = ['../images/wentichild/001.jpg', '../images/wentichild/002.jpg', '../images/wentichild/003.jpg', '../images/wentichild/004.jpg', '../images/wentichild/005.jpg'];
//     $('.ul img').hover(function() {
//         $('#view img').css('display', 'none');
//         var i = $('.ul img').index(this);
//         $('#view').css({
//             'background': 'url(' + img[i] + ')',
//             'background-size': '430px 430px'
//         })
//     })
// })

$(function() {
    $.ajax({
        url: '../php/xihu.php/detail.php',
        type: 'get',
        data: {
            gid: location.search.substring(1).split('=')[1]
        },
        dataType: 'json'
    }).done(function(data) {
        var img = [data[0].g_imgb, data[0].g_imgb1, data[0].g_imgb2, data[0].g_imgb3, data[0].g_imgb4];
        $('.ul').on('mouseover', 'img', function() {
            $('#view img').css('display', 'none');
            var i = $('.ul img').index(this);
            $('#view').css({
                'background': 'url(' + img[i] + ')',
                'background-size': '430px 430px'
            })
        })
    })
})

// <!-- 服务政策的详细信息 -->

$(function() {
    $('.close').on('click', function() {
        $('.service').css('display', 'none');
    })
    $('.policyBtn').on('click', function() {
        $('.service').css('display', 'none');
    })
    $('.policyBox').on('click', function() {
        $('.service').css('display', 'block');
    })
})

// <!-- 购买商品，添加数量 -->

$.extend({
    min: 1,
    reg: function(x) {
        $('#J_Tip').html("");
        $('#J_Tip').hide();
        return new RegExp("^[1-9]\\d*$").test(x);
    },
    amount: function(obj, mode) {
        var x = $(obj).val();
        if (this.reg(parseInt(x))) {
            if (mode) {
                x++;
            } else {
                x--;
            }
        }
        return x;
    },
    reduce: function(obj) {
        var x = this.amount(obj, false);
        if (parseInt(x) >= this.min) {
            $(obj).val(x);
        } else {
            $('#J_Tip').html("<i class=\"ico\"></i>本商品" + this.min + "件起售");
            $('#J_Tip').show();
            $(obj).val(1);
            $(obj).focus();
        }
    },
    add: function(obj) {
        var x = this.amount(obj, true);
        var max = $('#nAmount').val();
        if (parseInt(x) <= parseInt(max)) {
            $(obj).val(x);
        }
    },
    modify: function(obj) {
        var x = $(obj).val();
        var max = $('#nAmount').val();
        var intx = parseInt(x);
        var intmax = parseInt(max);
        if (intx < this.min) {
            $('#J_Tip').html("<i class=\"ico\"></i>本商品" + this.min + "件起售");
            $('#J_Tip').show();
            $(obj).val(this.min);
            $(obj).focus();
        }
    }
});



// <!-- 商品数量少于1时，点击提示 -->

$(function() {
    setInterval(function() { //定时器 
        $("#J_Tip").css("display", "none"); //将图片的display属性设置为none
    }, 3000);
    $('.tabs').on('click', function() {
        if ($("input[name=tab-sel]").hasClass("tab-sel")) {
            $('a').attr('class', 'tab');
        } else {
            $('.tab-sel').css('border', '2px solid #b4a078');
        }
    })
})

// <!-- 详情 评论  常见问题选项卡-->

$.fn.extend({
    tabs: function(options) {
        var _that = this,
            init = null,
            defaults = {
                event: 'click',
                active: 'active',
                show: 'show'
            };
        options = $.extend(defaults, options);
        init = function() {
            var tabsBtn = _that.children('.topTab').children('.topTabnav').children('.topTabitem').children('.Tabitem').children('.Tablist').children('.list'),
                tabsDiv = _that.children('.contentTab');
            tabsBtn.eq(0).addClass(options.active);
            tabsDiv.eq(0).addClass(options.show);

            tabsBtn.on(options.event, function() {
                var _index = tabsBtn.index($(this));
                $(this).addClass(options.active).siblings().removeClass(options.active);
                tabsDiv.eq(_index).addClass(options.show).siblings().removeClass(options.show);
            })
        }
        init();
    }
});



$(function() {
    $('.b-left').tabs()
});

// <!-- 评论 图片展示选项卡 -->

$(function() {
    var img = ['../images/wentichild/135.jpg', '../images/wentichild/136.jpg', '../images/wentichild/137.jpg', '../images/wentichild/138.jpg'];
    $('.picList .pic-item').on('click', function() {
        $('.lightBox').css('display', 'block');
        $('.slick').css('display', 'block');
        var i = $('.picList .pic-item').index(this);
        $('.slick').css({
            'background': 'url(' + img[i] + ')',
            'background-size': '584px 438px'
        })
    })
})


// <!-- 评论图片展示关闭按钮 -->

$(function() {
    $('.close-x').on('click', function() {
        $('.lightBox').css('display', 'none');
    })
})

// <!-- 点击收藏 -->

$(function() {
    $('.bottom').on('click', function() {
        if ($('.bottom-1').html() == '收藏') {
            $('.bottom-1').html("已收藏");
            $('.top').animate('sliderUp', 500);
        } else if ($('.bottom-1').html() == '已收藏') {
            $('.bottom-1').html("收藏");
        }
    })
})

// <!-- 点击勾选 -->

$(function() {
    $('.tab-txt').on('click', function() {
        if ($('.tab-txt').hasClass('tab-sel')) {
            $('.tab-con a').removeClass("tab-sel");
            $('.tab-con a').attr('style', '');
        } else {
            $('.tab-con a').addClass("tab-sel");
        };
        if ($('.icon-in_gouxuan').hasClass('sel')) {
            $('.tab-txt i').removeClass('sel');
        } else {
            $('.tab-txt i').addClass("sel");
        };
    })
})

// <!-- 点击好评锚点跳转 -->

$(function() {
    $('.goodcomment').on('click', function() {
        $('.Tablist li:eq(0)').removeClass('active');
        $('.Tablist li:eq(1)').addClass('active');
        $('.good-cont').removeClass('show');
        $('.good-cont1').addClass('show');
    })

})

// <!--  -->
// <!-- 点击收藏星星 -->

$(function() {
    $('.bottom-1').click(function() {
        $('.icon-xingxing').toggle(1000);
    })
})

// <!-- 中间的轮播 -->

$(function() {
    //初始化
    var count = 0;
    var $li = $(".slider>.s-wrap>.slider_list>ul");
    $li.eq(0).addClass("show");

    //向右按钮
    $(".next").click(function() {
        count++;
        if (count == $li.length) {
            count = 0;
        }
        $li.eq(count).addClass("show").siblings().removeClass("show");
        console.log(count);
    });
    //向左按钮
    $(".prve").click(function() {
        count--;
        if (count == -1) {
            count = $li.length - 1;
        }
        console.log(count);
        $li.eq(count).addClass("show").siblings().removeClass("show");
    });
});

// <!-- 地址 -->
// { /* <script type="text/javascript"> */ }
$(function() {
    var html = "<option value=''>== 请选择 ==</option>";
    $("#input_city").append(html);
    $("#input_area").append(html);
    $.each(pdata, function(idx, item) {
        if (parseInt(item.level) == 0) {
            html += "<option value='" + item.names + "' exid='" + item.code + "'>" + item.names + "</option>";
        }
    });
    $("#input_province").append(html);

    $("#input_province").change(function() {
        if ($(this).val() == "") return;
        $("#input_city option").remove();
        $("#input_area option").remove();
        var code = $(this).find("option:selected").attr("exid");
        code = code.substring(0, 2);
        var html = "<option value=''>== 请选择 ==</option>";
        $("#input_area").append(html);
        $.each(pdata, function(idx, item) {
            if (parseInt(item.level) == 1 && code == item.code.substring(0, 2)) {
                html += "<option value='" + item.names + "' exid='" + item.code + "'>" + item.names + "</option>";
            }
        });
        $("#input_city").append(html);
    });

    $("#input_city").change(function() {
        if ($(this).val() == "") return;
        $("#input_area option").remove();
        var code = $(this).find("option:selected").attr("exid");
        if (code) code = code.substring(0, 4);
        var html = "<option value=''>== 请选择 ==</option>";
        $.each(pdata, function(idx, item) {
            if (parseInt(item.level) == 2 && code == item.code.substring(0, 4)) {
                html += "<option value='" + item.names + "' exid='" + item.code + "'>" + item.names + "</option>";
            }
        });
        $("#input_area").append(html);
    });
    //绑定
    $("#input_province").val("北京市");
    $("#input_province").change();
    $("#input_city").val("请选择");
    $("#input_city").change();
    $("#input_area").val("请选择");

});