$(() =>{

    var indiceAtual = 0;
    var indiceMaximo = $('.slider img').length;

    function alternarSlide()
    {
        //a imagem que esta na tela some
        $('.slider img').eq(indiceAtual).stop().fadeOut(2000);

        if(indiceAtual < (indiceMaximo - 1) )
        {
            //aumenta o indice em 1
            indiceAtual +=1;    
        }
        else{
            //se o indice atual chegar no fim ele volta para o começo
            indiceAtual = 0;
        }

        //a próxima imagem aparece
        $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
        $('.bullets-nav span').css("background-color", "#ccc");
        $('.bullets-nav span').eq(indiceAtual).css("background-color", "goldenrod");

    }

    function initSlider(){

        for(var i =0; i < indiceMaximo; i++)
        {
            if(i==0)
            {
                $(".slider .bullets-nav").append(`<span style="background-color: goldenrod"> </span>`);
            }
            else
            {
                $(".slider .bullets-nav").append(`<span> </span>`);
            }
        }

        //percorre cada imagem
        $('.slider img').each(function(i){
            if(i == 0) //se o indice for igual 0, mostrar a imagem 
            {
                $(this).fadeIn();
                setInterval(alternarSlide, 5000);
            }
        
        });
    }

    function cliqueSlider(){
        $('.bullets-nav span').click(function(){
            $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
            indiceAtual =  $(this).index();
            $('.slider img').eq(indiceAtual).stop().fadeIn(2000);

            $('.bullets-nav span').css("background-color", "#ccc");
            $('.bullets-nav span').eq(indiceAtual).css("background-color", "goldenrod");
            // O mesmo que = $(this).css("background-color", "goldenrod");
        });
    }


    initSlider();
    cliqueSlider();
})