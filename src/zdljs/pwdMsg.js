//密码登录与短信验证的切换
$(function() {
        $('.tab0').html('使用密码验证登录');
        $('.msga').addClass('log-show');
        $('.tab0').on('click', function() {
            if ($('.tab0').html() === '使用密码验证登录') {
                $('.tab0').html('使用短信验证登录');
                $('.msga').removeClass('log-show');
                $('.pwda').addClass('log-show');
            } else if ($('.tab0').html('使用短信验证登录')) {
                $('.tab0').html('使用密码验证登录');
                $('.pwda').removeClass('log-show');
                $('.msga').addClass('log-show');
            }
        })
    })
    //登录与注册的切换
$(function() {
        $('.denglu-now').click(function() {
            $('.zhuce').addClass('log-none');
            $('.denglu').addClass('log-show');
        })
    })
    //关闭
$(function() {
    $('.close').click(function() {
        $('.log-bg').addClass('log-none');
    })
})