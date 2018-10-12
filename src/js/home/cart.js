//1.获取cookie，根据cookie的值，创建购物车商品列表
//商品列表的结构提前写好，隐藏在结构中
//对隐藏的结构进行不同赋值。

// if (getcookie('cartsid') && getcookie('cartnum')) {
//     var s = getcookie('cartsid').split(','); //存放sid数组
//     var n = getcookie('cartnum').split(','); //存放num数组
//     $.each(s, function(index, value) {
//         createcart(value, n[index]);
//     });
// }


// //2.拼接商品列表
// function createcart(sid, num) { //sid：图片的编号  num:商品的数量
//     $.ajax({
//         url: 'json/cart.json',
//         dataType: 'json'
//     }).done(function(data) {
//         $.each(data, function(index, value) {
//             if (sid == data[index].sid) { //图片的sid和数据里面的sid匹配
//                 var $clone = $('.goods-item:hidden').clone(true); //对隐藏的模块进行克隆
//                 //都是赋值
//                 $clone.find('.goods-pic').find('img').attr('src', data[index].img);
//                 $clone.find('.goods-pic').find('img').attr('sid', data[index].sid);
//                 $clone.find('.goods-d-info').find('a').html(data[index].title);
//                 $clone.find('.b-price').find('strong').html(data[index].price);
//                 $clone.find('.quantity-form').find('input').val(num);
//                 //计算价格,每个商品的价格
//                 var $dj1 = parseFloat($clone.find('.b-price strong').html()); //获取单价
//                 $clone.find('.b-sum strong').html(($dj1 * num).toFixed(2)); //num：数量
//                 $clone.css('display', 'block'); //克隆的模块是隐藏，显示出来。
//                 $('.item-list').append($clone); //追加
//                 /* kong();//购物车是否为空
//                  totalprice();//总价和总数*/
//             }
//         });
//     });
// }

// //3.商品列表(cookie)不存在，购物车为空
// function kong() {
//     if (getcookie('cartsid')) { //cookie存在，有商品，购物车不再为空
//         $('.empty-cart').hide();
//     } else {
//         $('.empty-cart').show();
//     }
// }
// kong();

// //4.拼接推荐商品列表
// $.ajax({
//     url: 'json/cart.json', //推荐商品数据的接口
//     dataType: 'json' //数据的类型
// }).done(function(data) { //data:接口的返回的数据
//     var $html = '';
//     $.each(data, function(index, value) {
//         if (index < 4) {
//             $html += '<li>' +
//                 '<div class="goodsinfo">' +
//                 '<div class="p-img">' +
//                 '<a href="##"><img class="loadimg" src="' + data[index].img + '" alt="" sid="' + data[index].sid + '" /></a>' +
//                 '</div>' +
//                 '<div class="p-name">' +
//                 '<a class="loadt" href="##">' + data[index].title + '</a>' +
//                 '</div>' +
//                 '<div class="p-price"><strong><em>￥</em><i class="loadpcp">' + data[index].price + '</i></strong></div>' +
//                 '<div class="p-btn"><a href="javascript:void(0)"><b></b>加入购物车</a></div>' +
//                 '</div>' +
//                 '</li>';
//             $('.goods-list ul').html($html); //将数据追加到商品列表
//         }

//     });
//     $('.goods-list ul').html($html); //将数据追加到商品列表
// });


// //5.点击推荐商品列表的加入购物车按钮，添加商品到购物。
// //思路：第一次点击创建商品列表，后面点击数量累加。
// //事件委托。
// var sidarr = []; //将取得cookie的编号存放到此数组
// var numarr = []; //将取得cookie的数量存放到此数组
// //获取cookie,值变成数组
// function getcookievalue() {
//     if (getcookie('cartsid') && getcookie('cartnum')) {
//         sidarr = getcookie('cartsid').split(','); //[1,2,3,4]
//         numarr = getcookie('cartnum').split(','); //[50,60,70,80]
//     }
// }

// $('.goods-list ul').on('click', '.p-btn a', function() {
//     var sid=$(this).parents('.goodsinfo').find('.loadimg').attr('sid');//当前加入购物车按钮对应的图片的sid
//     getcookievalue();
//     if($.inArray(sid,sidarr)!=-1){//存在，数量+1，添加cookie
//         $('.goods-item:visible').each(function(index,value) {//遍历可视的商品列表
//             if (sid == $(this).find('img').attr('sid')) {//添加购物车按钮的索引和购物车中商品列表的索引一致
//                 var $num = $(this).find('.quantity-form input').val();//获取数量的值
//                 $num++;//数量累加
//                 $(this).find('.quantity-form input').val($num);//将数量赋值回去
//                 //计算价格
//                 var $dj = parseFloat($(this).find('.b-price strong').html());//获取当前的单价
//                 $(this).find('.b-sum strong').html(($dj * $num).toFixed(2));//计算商品总价
//                 //存储数量到cookie里面。通过编号找数量
//                 numarr[$.inArray(sid, sidarr)] = $num;//将数量存储到对应的cookie存放数量的数组中
//                 addcookie('cartnum', numarr.toString(), 7);//添加购物车
//                 //totalprice();
//             }
//         });
//     }else{//不存在，存数量1和sid,添加cookie
//         sidarr.push(sid);//将当前id添加到数组里面。
//         addcookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
//         numarr.push(1);//走这里数量都是1.
//         addcookie('cartnum', numarr.toString(), 7);
//         createcart(sid, 1);
//     }
// });

//添加cookie的函数
        function addCookie(key,value,day){
            var date=new Date();//创建日期对象
            date.setDate(date.getDate()+day);//过期时间：获取当前的日期+天数，设置给date
            document.cookie=key+'='+encodeURI(value)+';expires='+date;//添加cookie，设置过期时间
        }
//得到cookie
        function getCookie(key){
            var str=decodeURI(document.cookie);
            var arr=str.split('; ');
            for(var i=0;i<arr.length;i++){
                var arr1=arr[i].split('=');
                if(arr1[0]==key){
                    return arr1[1];
                }
            }
        }
//删除cookie
        
        function delCookie(key){
            addCookie(key,'',-1);//添加的函数,将时间设置为过去时间
        }

//1.将推荐商品的数据渲染出来。
$.ajax({
    url: 'json/cart.json',//推荐商品数据的接口
    dataType: 'json'//数据的类型
}).done(function(data){//data:接口的返回的数据
    var $html = '';
    for (var i = 0; i < 4; i++) {
        $html += '<li>' +
            '<div class="goodsinfo">' +
            '<div class="p-img">' +
            '<a href="##"><img class="loadimg" src="' + data[i].img + '" alt="" sid="' + data[i].sid + '" /></a>' +
            '</div>' +
            '<div class="p-name">' +
            '<a class="loadt" href="##">' + data[i].title + '</a>' +
            '</div>' +
            '<div class="p-price"><strong><em>￥</em><i class="loadpcp">' + data[i].price + '</i></strong></div>' +
            '<div class="p-btn"><a href="javascript:void(0)"><b></b>加入购物车</a></div>' +
            '</div>' +
            '</li>';
    }
    $('.goods-list ul').html($html);//将数据追加到商品列表
});

//2.根据cookie值，创建一个商品列表的函数
function createcart(sid, num) {//sid：图片的编号  num:商品的数量
    $.ajax({
        url: 'json/cart.json',
        dataType: 'json'
    }).done(function(data) {
        for (var i = 0; i < data.length; i++) {
            if (sid == data[i].sid) {//图片的sid和数据里面的sid匹配
                var $clone = $('.goods-item:hidden').clone(true);//对隐藏的模块进行克隆
                //都是赋值
                $clone.find('.goods-pic').find('img').attr('src', data[i].img);
                $clone.find('.goods-pic').find('img').attr('sid', data[i].sid);
                $clone.find('.goods-d-info').find('a').html(data[i].title);
                $clone.find('.b-price').find('strong').html(data[i].price);
                $clone.find('.quantity-form').find('input').val(num);
                //计算价格,每个商品的价格
                var $dj1 = parseFloat($clone.find('.b-price strong').html());//获取单价
                $clone.find('.b-sum strong').html(($dj1 * num).toFixed(2));//num：数量
                $clone.css('display', 'block');//克隆的模块是隐藏，显示出来。
                $('.item-list').append($clone);//追加
                kong();//购物车是否为空
                totalprice();//总价和总数
            }
        }
    });
}

var sidarr = [];
var numarr = [];
function cookieToArray(){
    if(getCookie('cartsid')){
        sidarr=getCookie('cartsid').split(',');
    }
    
    if(getCookie('cartnum')){
        numarr=getCookie('cartnum').split(',');
    }
}


$('.goods-list ul').on('click', '.p-btn a', function() {//委托，点击购物车按钮
    var sid = $(this).parents('.goodsinfo').find('.loadimg').attr('sid');//当前按钮对应图片的sid
    cookieToArray();//获取cookie值，放到对应的数组中
    if ($.inArray(sid, sidarr) != -1) {//存在，数量加1
        $('.goods-item:visible').each(function() {//遍历可视的商品列表
            if (sid == $(this).find('img').attr('sid')) {//添加购物车按钮的索引和购物车中商品列表的索引一致
                var $num = $(this).find('.quantity-form input').val();//获取数量的值
                $num++;//数量累加
                $(this).find('.quantity-form input').val($num);//将数量赋值回去
                //计算价格
                var $dj = parseFloat($(this).find('.b-price strong').html());//获取当前的单价
                $(this).find('.b-sum strong').html(($dj * $num).toFixed(2));//计算商品总价

                //存储数量到cookie里面。通过编号找数量
                numarr[$.inArray(sid, sidarr)] = $num;//将数量存储到对应的cookie存放数量的数组中
                addCookie('cartnum', numarr.toString(), 7);//添加购物车
                totalprice();
            }
        });
    }else{//当前商品列表没有进入购物车，创建商品列表
        sidarr.push(sid);//将当前id添加到数组里面。
        addCookie('cartsid', sidarr.toString(), 7);//将整个数组添加到cookie
        numarr.push(1);//走这里数量都是1.
        addCookie('cartnum', numarr.toString(), 7);
        createcart(sid, 1);
        totalprice();
    }
});

//3.页面加载检测购物车(cookie里面)是否有数据，有的话创建商品列表
if (getCookie('cartsid') && getCookie('cartnum')) {
    var s = getCookie('cartsid').split(',');//存放sid数组
    var n = getCookie('cartnum').split(',');//存放数量数组
    for (var i = 0; i < s.length; i++) {
        createcart(s[i], n[i]);//遍历创建商品列表
    }
}
//4.商品列表(cookie)不存在，购物车为空
kong();
function kong() {
    if (getCookie('cartsid')) {//cookie存在，有商品，购物车不再为空
        $('.empty-cart').hide();
    } else {
        $('.empty-cart').show();
    }
}

//5.每个商品的总价已经通过创建时求得了。求所有商品的总价和总的商品的个数
function totalprice() {//计算总价
    var total = 0;//总的价格
    var countnum = 0;//总的数量
    $('.goods-item:visible').each(function() {//可视的商品列表进行遍历，循环叠加
        if ($(this).find('input:checkbox').is(':checked')) {//商品的复选框是选中的
            total += parseFloat($(this).find('.b-sum strong').html());
            countnum += parseInt($(this).find('.quantity-form').find('input').val());
        }
    });
    //赋值
    $('.totalprice').html('￥' + total.toFixed(2));
    $('.amount-sum em').html(countnum);
}

//6.修改数量的操作
//改变商品数量++
$('.quantity-add').on('click', function() {
    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
    $count++;
    if ($count >= 99) {
        $count = 99;
    }
    $(this).parents('.goods-item').find('.quantity-form input').val($count);
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));

});


//改变商品数量--
$('.quantity-down').on('click', function() {
    var $count = $(this).parents('.goods-item').find('.quantity-form input').val();
    $count--;
    if ($count <= 1) {
        $count = 1;
    }
    $(this).parents('.goods-item').find('.quantity-form input').val($count);
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});


//直接输入改变数量
$('.quantity-form input').on('input', function() {
    var $reg = /^\d+$/g; //只能输入数字
    var $value = parseInt($(this).val());
    if ($reg.test($value)) {
        if ($value >= 99) {//限定范围
            $(this).val(99);
        } else if ($value <= 0) {
            $(this).val(1);
        } else {
            $(this).val($value);
        }
    } else {
        $(this).val(1);
    }
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(singlegoodsprice($(this)));//改变后的价格
    totalprice();
    setcookie($(this));
});

//7.计算数量改变后单个商品的价格
function singlegoodsprice(row) { //row:当前元素
    var $dj = parseFloat(row.parents('.goods-item').find('.b-price').find('strong').html());
    var $cnum = parseInt(row.parents('.goods-item').find('.quantity-form input').val());
    return ($dj * $cnum).toFixed(2);
}

//9.将改变后的数量的值存放到cookie
function setcookie(obj) { //obj:当前操作的对象
    cookieToArray();
    var $index = obj.parents('.goods-item').find('img').attr('sid');
    numarr[sidarr.indexOf($index)] = obj.parents('.goods-item').find('.quantity-form input').val();
    addCookie('cartnum', numarr.toString(), 7);
}


//8.全选
$('.allsel').on('change', function() {
    $('.goods-item:visible').find('input:checkbox').prop('checked', $(this).prop('checked'));
    $('.allsel').prop('checked', $(this).prop('checked'));
    totalprice();//求和
});

var $inputchecked = $('.goods-item:visible').find('input:checkbox');//获取委托元素
$('.item-list').on('change', $inputchecked, function() {
    var $inputs = $('.goods-item:visible').find('input:checkbox'); //放内部
    if ($('.goods-item:visible').find('input:checked').length == $inputs.size()) {
        $('.allsel').prop('checked', true);
    } else {
        $('.allsel').prop('checked', false);
    }
    totalprice();
});


//10.删除
//删除cookie的函数
function delgoodslist(sid, sidarr) {//sid：当前的sid，sidarr:cookie的sid的值
    var index = -1;
    for (var i = 0; i < sidarr.length; i++) {
        if (sid == sidarr[i]) {
            index = i;
        }
    }
    sidarr.splice(index, 1);//删除数组对应的值
    numarr.splice(index, 1);//删除数组对应的值
    addCookie('cartsid', sidarr.toString(), 7);//添加cookie
    addCookie('cartnum', numarr.toString(), 7);
}

//删除单个商品的函数(委托)
$('.item-list').on('click', '.b-action a', function(ev) {
    cookieToArray(); //转数组
   if(confirm('你确定要删除吗？')){
     $(this).first().parents('.goods-info').remove();
   }
    delgoodslist($(this).first().parents('.goods-info').find('img').attr('sid'), sidarr);
    totalprice();
});


//删除全部商品的函数
$('.operation a:first').on('click', function() {
    $('.goods-item:visible').each(function() {
        if ($(this).find('input:checkbox').is(':checked')) {
            $(this).remove();
            delgoodslist($(this).find('img').attr('sid'), sidarr);
        }
    });
    totalprice();
});



