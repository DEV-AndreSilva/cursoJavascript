/*$(function(){  //executar o script depois da pagina carregada
    alert("Ola mundo");
});

$(document).ready(function(){
    alert('ola Mundo');
});

$(window).on('load', function(){
    alert('Ola mundo');
});*/


//Função chamada no termino de execução da pagina
$(function(){

    //atraso para chamada do evento    
    setTimeout(function () {

        //Manipulando css dos elementos 
        //Alterando cor de fundo do elemento de classe artigo1 
        $(".artigo1").css("background-color", "#0AB");

        //Alterando a fonte do paragrafo e cor de fundo dentro do elemento de classe artigo2
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
