$(function(){
    var box = $('.box');
    var meuTexto = "ola amigo";

    box.html('<div> <h1 class="texto1">meu texto inserido por html</h1> </div>');
    box.html(box.html()+"<div class=\"teste\">"+ meuTexto+"</div>");


    var box2 = $('.box2');

    box2.text( '<div class="teste"> andre </div>');

    console.log(box.html());
    console.log(box.text());

    
    console.log(box2.html());
    console.log(box2.text());

   // $('input[type=text]').val("olá mundo");

    $('textarea').text("olá André");


    $('input[type=button]').click(function(){

        var texto = $('input[type=text]').val();
        console.log(texto);

        var var2 = texto.split("@");
        console.log(var2);

        console.log(texto.substr(0,4));
    });
});