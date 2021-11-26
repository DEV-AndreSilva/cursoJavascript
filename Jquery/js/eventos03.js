$(function(){

    /*
    $('a').click(function(e){
        alert('ola');
        $('.box').css('display','block');
        return false;        
    })

    //É possivel corrigir esse problema descrevendo com o evento on para os elementos dinamicos
    $('body').on('click','a', function(){
        alert('Ola mundo');
        return false;
    })

    //A ordem posicional do elemento não deixa o evento de click descrito no 1º evento acontecer
    $('body').append('<br><a href="#"> Meu Outro Link</a>'); 

    */

    var func = function()
    {
        //this faz referencia ao elemento que dispara o evento no caso o input com
        //name nome_pessoa
        $(this).css('background-color','lightblue');
        console.log($(this).index());
    }

    //keyup e keydown, eventos que ocorrem quando a tecla estiver sendo pressionada
    $('input[name=nome_pessoa]').click(func);

});
