$(function(){
    $('.home').click(function(){
        location.href = 'http://localhost:8080/nbe/home';
    });

    $('.post').click(function(){
        location.href = 'http://localhost:8080/post/list';
    });

    $('.cart').click(function(){
        location.href = `http://localhost:8080/cart?userId=1`;
    });

    $('.recent').click(function(){
        location.href = 'http://localhost:8080/nbe/recent';
    });

    $('.user').click(function(){
        location.href = 'http://localhost:8080/mypage/detail';
    });

    $('.accButton').click(function (){

    });
});

function category(){
    $('.category1').toggleClass('hidden');
}