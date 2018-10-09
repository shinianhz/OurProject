$(function() {
    // var view = document.querySelector('.view');
    // var list = document.querySelector('.list');
    // var ul = document.querySelector('.ul');
    // var img = document.querySelector('li>img');
    var images = ['../images/wentichild/040.png', '../images/wentichild/041.jpg', '../images/wentichild/042.jpg', '../images/wentichild/043.jpg', '../images/wentichild/044.jpg'];
    $('.ul img').on('click', function() {
        var i = $('.ul img').index(this);
        $('#view').css({
            'background': 'url(' + img[i] + ')',
            'background-size': '430px 430px'
        })
    })
})