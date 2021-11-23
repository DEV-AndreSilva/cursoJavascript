var cores = true;

$(function(){

    //Executa a função quando o elemento é clicado
    $('.artigo').click(function(){
        var cor = $('.artigo2').css('background-color');
     
        console.log(cores);

        if(cores ==true){
            $('.artigo2').css('background-color','green');
        }
        else{
            $('.artigo2').css('background-color','red');
        }

        cores = !cores;
    })

    function clickHover()
    {
        //dispara a função quando passar o mouse pelo elemento
        $('.artigo').hover(function(){
            $('.artigo3').css('background-color', 'green');
        },function(){
            //execuaa  função quando o mouse sai do elemento
            $('.artigo3').css('background-color', 'purple');
        })    
    }

    function focusBlur()
    {
        //executa a função quando o elemento é focado
        $('textarea').focus(function(){
            console.log('estou dentro do text area');
        }).blur(function(){
            //executa a função quando o foco muda do elemento
            console.log('estou fora do text area');
        })
    }

   

    function validarForm()
    {
        //executa a função quando a opção do select é trocada
        $('select').change(function(){
            console.log('A opção do select foi alterada');
        })
    }

    clickHover();
    focusBlur();
    validarForm();
});