$(function() {
    //注册
    $('#sign').click(function() {
        var regPho = /^1(3|4|5|7|8)\d{9}$/;
        //判断是否手机号密码是否为空 手机号是否满足正则
        if (($('#tel_zc').val()) && ($('#pwd_zc').val()) && (regPho.test($(tel_zc).val()))) {
            $.ajax({
                type: "post",
                url: "../php/login.php",
                data: {
                    "tel": $('#tel_zc').val(),
                    "password": $('#pwd_zc').val()
                },
                success: function(response) {
                    var data = JSON.parse(response);
                    $('.ferrorPho').html(data.msg);
                    if ($('.ferrorPho').html() === '注册成功') {
                        window.sessionStorage.setItem("name", $('#tel_zc').val())
                        location.href = 'http://10.31.157.65:8080/OurProject/src/html/home-content.html';

                    }
                }
            })
        } else {
            $('.ferrorPho').html('请将信息填写完整');
        }
    })

    //登录
    $('#log').click(function() {
        if (($('#tel_dl').val()) && ($('#pwd_dl').val())) {
            console.log($('#tel_dl').val())
            $.ajax({
                type: "post",
                url: "../php/land.php",
                data: {
                    "tel": $('#tel_dl').val(),
                    "password": $('#pwd_dl').val()
                },
                success: function(response) {
                    // console.log(response);
                    var data = JSON.parse(response);
                    $('.ferrorPho').html(data.msg);
                    if ($('.ferrorPho').html() === '登录成功') {
                        //关闭登录界面
                        if ($('.log-bg')) {
                            $('.log-bg').addClass('log-none');
                        }
                        //登陆成功后跳转
                        if ($('#order')) {
                            console.log(data.tel);
                            window.sessionStorage.setItem("name", $('#tel_dl').val())
                            location.href = 'http://10.31.157.65:8080/OurProject/src/html/home-content.html';
                        }
                    }
                }
            })
        } else {
            $('.ferrorPho').html('请将信息填写完整');
            ``
        }
    })
})