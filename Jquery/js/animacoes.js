$(function(){

    $('.box1').fadeOut(2000,function(){
        $('.box2').fadeIn(3000, function(){
            console.log('Animação terminada');
        })
    });

    $('input[type=button]').click(function(){
        $('.box2').slideToggle(1000, function(){
            alert('Terminou');
        });
    });

})