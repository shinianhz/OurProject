$.fn.extend({
    tabs: function(options) {
        var _that = this,
            init = null,
            defaults = {
                event: 'click',
                active: 'log-active',
                show: 'log-show'
            };
        options = $.extend(defaults, options);
        init = function() {
            var tabsBtn = _that.children('.log-h').children('li');
            var tabsDiv = _that.children('.login').children('#login-form').children('.tab1').children('div');
            // console.log(tabsBtn);
            // console.log(tabsDiv);
            tabsBtn.eq(0).addClass(options.active);
            tabsDiv.eq(0).addClass(options.show);
            tabsBtn.on(options.event, function() {
                var _index = tabsBtn.index($(this));
                $(this).addClass(options.active).siblings().removeClass(options.active);
                tabsDiv.eq(_index).addClass(options.show).siblings().removeClass(options.show);
            });

        }
        init();
    }
});