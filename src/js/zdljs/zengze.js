$(function() {
    //手机号正则
    var regPho = /^1(3|4|5|7|8)\d{9}$/;
    $('.inpPho').focus(function() {
        $('.ferrorPho').html('');
        $('.inpPho').change(function() {
            if (regPho.test(this.value)) {
                $('.ferrorPho').html('');
            } else {
                $('.ferrorPho').html('手机格式错误');
            }
        })
    });
    //登录密码
    var regPwd = /^[0-9A-Za-z_]{6,16}$/;
    $('.inpPwd').focus(function() {
        $('.ferrorhead').html('');
        $('.inpPwd').change(function() {
            if (regPwd.test(this.value)) {
                $('.ferrorhead').html('');
            } else {
                $('.ferrorhead').html('密码须由6-16个字符组成，区分大小写');
            }
        })
    });
    //邮箱格式
    var regMail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    $('.inpMail').focus(function() {
        $('.ferrorPho').html('');
        $('.inpMail').change(function() {
            if (regMail.test(this.value)) {
                $('.ferrorPho').html('');
            } else {
                $('.ferrorPho').html('邮箱格式错误');
            }
        })
    });
    //设置页面跳转时错误提示为空
    $('.clk').on('click', function(e) {
        $('.ferrorhead').html('');
        $('.ferrorPho').html('');
    })
})