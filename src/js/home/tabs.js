$('.tabs>span').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    console.log()
    var _index = $('.tabs>span').index($(this));
    $('.recom-box>div').eq(_index).addClass('show').siblings().removeClass('show');
});