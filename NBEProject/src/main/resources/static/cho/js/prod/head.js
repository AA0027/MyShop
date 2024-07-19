$(function(){
    $('.home').click(function(){
        location.href = '/nbe/home';
    });

    $('.post').click(function(){
        location.href = '/post/list';
    });

    $('.cart').click(function(){
        location.href = '/cart';
    });

    $('.user').click(function(){
        location.href = '/mypage/detail';
    });

    $('.login-btn').click(function(){
       location.href = '/user/login'
    })

});

function category(){
    $('.category1').toggleClass('hidden');
}

function goCart(){
    location.href = `/cart`;
}