$(function(){

    function verificarCliqueMenu(){
        $('a').click(function(){
            var href = $(this).attr("href");

            $.ajax({
               // 'method': "POST",
               // 'data':{ nome: "Andre", idade: 20},
               
                'beforeSend': function(){
                    console.log("Estamos utilizando o before send");
                },
                'url':href,
                'error': function( jqXHR,  textStatus,  errorThrown){
                    console.log('ocorreu um erro: '+jqXHR.statusText);
                },
                'success': function(data)
                {
                    console.log(data);
                    var container = $('#container');
                    container.html(data);
                }
                //timeout: 10000, isso define o tempo em milisegundos de uma requisição
                
            })

            return false;
        })
    }


    verificarCliqueMenu();
})