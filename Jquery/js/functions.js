/*$(function(){  //executar o script depois da pagina carregada
    alert("Ola mundo");
});

$(document).ready(function(){
    alert('ola Mundo');
});

$(window).on('load', function(){
    alert('Ola mundo');
});*/

$(function(){

    
    
    setTimeout(function () {
        $(".artigo1").css("background-color", "#0AB");
        $(".artigo2 p").css("font-size", "20px").css("background-color", 'orange');
    }, 2000);

        setTimeout(function(){
            $(".artigo1").css("background-color","purple");
            $(".artigo2 p").css("font-size","20px").css("background-color",'green');

            //exibir no console a cor do fundo do elemento cuja classe é artigo1
            console.log($(".artigo1").css("background-color"));
        },4000);

    
    ''
    
});
