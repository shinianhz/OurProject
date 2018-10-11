 //懒加载
 $(function() {
     var n = 0,
         img = $('img');

     // 页面刷新时首先调用一次加载函数 
     lazyload();
     // 注册滚动监听函数
     $(window).scroll(lazyload);

     function lazyload() {
         for (var i = n; i < img.length; i++) {
             /*
              * offset() 方法返回或设置匹配元素相对于文档的偏移（位置）。
              * offset().top 方法返回元素距离页面顶部的距离
              * scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置。
              * */
             if (img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop()) - 250) {
                 // 如果每个img的src为空的话，给每个img的src赋值为data-src的值
                 if (img.eq(i).attr("src") == " ") {
                     var src = img.eq(i).attr("data-src");
                     img.eq(i).attr("src", src);
                     n = i + 1;
                 }
             }
         }
     }


 });