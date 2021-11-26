$(function(){

    //prepend e prependTo adiciona o elemento novo dentro do elemento especificado no começo
    //append e appendTo adiciona o elemento novo dentro do elemento especificado no final

    //eq especifica o elemento quando há mais de um elemento

    $('.box').eq(1).append('<h3> Meu elemento adicionado dinamicamente com append </h3>');
    
    var elemento = $('<h3> Meu conteudo Dinamico com appendTo </h3>').appendTo($('.box').eq(1));

    //personalização de um elemento criado dinamicamente
    elemento.css('color','red');

    $('.box').eq(0).prepend("<h3>Elemento adicionado dinamicamente com prepend </h3>")

    var segElemento = $('<h3> Meu conteudo Dinamico com prependTo </h3>').prependTo($('.box').eq(0));
    segElemento.css('color','blue')

    /*------------------------*/
    //after e insertAfter adiciona o elemento fora do elemento selecionado e depois dele
    //before e insertBefore adiciona o elemento fora do elemneto selecionado e antes dele

    var afterText = "<h3>conteudo adicionado a box com after</h3>";
    $('.box').eq(0).after(afterText);

    var beforeText = "<h3>conteudo adicionado a box com before</h3>"
    $('.box').eq(0).before(beforeText);

    var insertAfter = "<h3>conteudo adicionado a box com insertAfter</h3>"
    var insertBefore = "<h3>conteudo adicionado a box com insertBefore</h3>"

    $(insertAfter).insertAfter('.box').css('color','red');
    $(insertBefore).insertBefore('.box').css('color','red');


    /*--------------------------*/
    //remove serve para remover um elemento especificado

    setTimeout(function(){
        $('h3').remove();
    },2000)
    

})