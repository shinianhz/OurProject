function item(color, name, img, price, quantity) {
    this.color = color;
    this.name = name;
    this.img = img;
    this.price = price;
    this.quantity = quantity;
}
var shopCart = function(window) {


    // if (getCookie('yanxuan_shop_cart')) {
    //     items = this.findItem();
    // } else {}
    var items = [],
        cartName = 'yanxuan_shop_cart',
        // expires = new Date(new Date().getTime() + 86400000 * 30), //设置cookie的失效时间
        debug = false,
        decimal = 2;
    var options = {
        'cartName': cartName, //cookie的名字
        // 'expires': expires, //cookie失效的时间
        'debug': debug, //是否打印调试信息
        'decimal': decimal, //价格的精确到小数点后的位数
        'callback': undefined
    };



    //暴露给外部的接口方法
    return {
        inited: false,
        init: function(option) {
            //判断用户是否禁用cookie
            if (!window.navigator.cookieEnabled) {
                alert('您的浏览器不支持cookie无法使用购物车！,请设置允许设置cookie。');
                return false;
            }
            //从cookie中获取购物车中的数据
            this.inited = true;
            if (option) {
                extend(options, option);
            }
            var cookie = getCookie(options.cartName);
            if (typeof cookie === 'undefined') {
                setCookie(options.cartName, '', options.expires);
            } else {
                //每个item之间用&分开，item的属性之间用|分割
                var cookie = getCookie(options.cartName);
                if (cookie) {
                    var cItems = cookie.split('&');
                    for (var i = 0, l = cItems.length; i < l; i++) {
                        var cItem = cItems[i].split('|');
                        var item = {};
                        item.color = cItem[0] || '';
                        item.name = cItem[1] || '';
                        item.img = cItem[2] || '';
                        item.price = cItem[3] || '';
                        item.quantity = cItem[4] || '';
                        items.push(item);
                    };
                };

            };
        },
        findItem: function(name) { //根据name标示查找商品
            //如果没有name,则返回所有的item
            if (name) {
                for (var i = 0, l = items.length; i < l; i++) {
                    var item = items[i];
                    if (item.name === name) {
                        return item;
                    }
                }
                return undefined;
            } else {
                return items;
            }

        },
        getItemIndex: function(name) { //获取item在items的数组下标
            for (var i = 0, l = items.length; i < l; i++) {
                var item = items[i];
                if (item.name == name) {
                    return i;
                }
            }
            //没有找到到返回-1
            return -1;
        },

        //增加一个新商品到购物车
        addItem: function(item) {
            //添加一个商品
            items.push(item);
            saveCookie();
            return true;
        },

        //从购物车中删除一个商品
        delItem: function(name) {
            var index = this.getItemIndex(name);
            if (index > -1) {
                items.splice(index, 1);
                saveCookie();
            } else {
                if (options.debug) {
                    console.log('商品不存在');
                    return false;
                }
            }
        },

        //////////////////////////////////////
        //更新购物车中的商品
        //////////////////////////////////
        updatecart: function(item) {
            //更新一个商品
            var index = this.getItemIndex(item.name);
            if (index > -1) {
                items[index].quantity += Number(item.quantity); //如果购物车中存在则，加数量
                saveCookie();
            } else {
                this.addItem(item);
            }
        },
        emptyCart: function() {
            //清空数组
            items.length = 0;
            saveCookie();
        },
        checkout: function() {
            //点击结算后的回调函数
            if (options.callback) {
                options.callback();
            }
        },
        getTotalCount: function(name) {
            //获取购物车商品的数量，如果传某个商品的id，那么就返回该商品的数量
            var totalCount = 0;
            if (name) {
                totalCount = (typeof this.findItem(name) === 'undefined' ? 0 : this.findItem(name).quantity);
            } else {
                for (var i = 0, l = items.length; i < l; i++) {
                    totalCount += (parseInt(items[i].quantity) === 'NaN' ? 0 : parseInt(items[i].quantity));
                }
            }
            return totalCount;
        },
        getTotalPrice: function(name) {
            //获取购物车商品的总价格 ,如果传某个商品的id，那么就返回该商品的总价格
            var totalPrice = 0.0;
            if (name) {
                var num = parseInt((typeof this.findItem(name) === 'undefined' ? 0 : this.findItem(name).quantity)),
                    price = parseFloat((typeof this.findItem(name) === 'undefined' ? 0 : this.findItem(name).price));
                num = num === 'NaN' ? 0 : num;
                price = price === 'NaN' ? 0 : price;
                totalPrice = price * num;
            } else {
                for (var i = 0, l = items.length; i < l; i++) {
                    totalPrice += (parseFloat(items[i].price) * parseInt(items[i].quantity));
                }
            }
            return totalPrice.toFixed(options.decimal); //将价格位数固定为设置的位数
        },

        getCookie: getCookie,
        setCookie: setCookie
    };

    function getCookie(name) {
        var arr = document.cookie.match(new RegExp("(^| )" + name +
            "=([^;]*)(;|$)"));
        if (arr != null) {
            return decodeURIComponent(arr[2]);
        }
        return undefined;
    };

    function setCookie(name, value, options) {
        options = options || {};
        var expires = options.expires || null;
        var path = options.path || "/";
        var domain = options.domain || document.domain;
        var secure = options.secure || null;
        var str = name + "=" + encodeURIComponent(value) +
            ((expires) ? "; expires=" + expires.toGMTString() : "") +
            "; path=/";
        document.cookie = str;
    };



    //***********************私有方法********************/
    function saveCookie() {
        var i = 0,
            l = items.length;
        if (l > 0) {
            var tItems = [];
            for (; i < l; i++) {
                var item = items[i];
                tItems[i] = item.color + '|' + item.name + '|' + item.img + '|' + item.price + '|' + item.quantity;
            };
            var str = tItems.join('&');
            setCookie(options.cartName, str);
        } else {
            setCookie(options.cartName, '');
        }

    };
    //***********************工具方法********************/
    // //继承属性
    function extend(destination, source) {
        for (var property in source) {
            destination[property] = source[property];
        }
    };
}(typeof window === 'undifined' ? this : window);