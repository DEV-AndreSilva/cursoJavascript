$(function(){
    var timer;

    //Evento disparado com a interação na barra de rolagem
    $(window).scroll(function(){
        console.log("Scroll Ativo");
    });

    //Impede o evento padrão de acontecer, o link não redireciona o usuário
    $('a').click(function(e){
        e.preventDefault();
        //return false - tambem evita que o evento ocorra
    });

    //Evento disparado quando a tela é redimensionada
    $(window).resize(function(){
        console.log('Minha tela esta sendo redimensionada');

        clearTimeout(timer);
        timer =  setTimeout(function(){
            location.href="C:/UwAmp/www/DankiCode/Curso_Javascript/Jquery/eventos02.html";
        },1000)
    });

    //Para a propagação do evento
    $('.box').click(function(e){
        e.stopPropagation();
    });

    $('body').click(function(){
        $('body').css('background-color', 'green');
    });
})