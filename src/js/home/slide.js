//信息滚动，上下滚动
(function($) {
    $.fn.extend({
        slide: function(options) {
            var _that = this,
                main = null,
                start = null,
                init = null,
                timeout = null,
                elems = {
                    imgWidth: this.children('ul').children("li").height(), //li高度
                    num: this.children('ul').children("li").length //记录li个数
                },
                defaults = {
                    speed: 500,
                    delay: 3000,
                    dir: 1
                };
            options = $.extend(defaults, options);
            //初始化函数
            init = function() {
                elems._index = 1;
                elems.innerUl = _that.children('ul');
                elems.innerUl.append(elems.innerUl.children('li').first().clone());
                _that.hover(function() {
                    stop();
                }, function() {
                    timeout = setInterval(function() {
                        start();
                    }, options.delay + options.speed);
                });
            };
            //开始函数
            start = function() {
                var hig = elems.imgWidth,
                    t = '-=' + hig;
                if (elems.num + 1 == elems._index) {
                    var divtop = _that.offset().top,
                        litop = elems.innerUl.children('li').last().offset().top;
                    elems._index = 1;
                    elems.innerUl.css('top', '-' + (litop - divtop) + "px");
                };
                elems.innerUl.animate({
                    top: t
                }, function() {
                    elems._index++;
                });
            };
            stop = function() {
                elems.innerUl.stop(true, true);
                clearInterval(timeout);
            };
            main = function() {
                init();
                timeout = setInterval(function() {
                    start(); //默认向右轮播参数为0；
                }, options.delay + options.speed);
            }
            main();
        }
    });
})(jQuery)