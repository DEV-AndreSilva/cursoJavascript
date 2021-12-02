$(()=>{

    var frase = "andre@gmail.com";
  //var verifica = frase.match(/[a-z]{3,6}/);
  /*var verifica = frase.match(/^(.*?)@(.*?)$/);

    if(typeof(verifica) == 'object' && verifica != null)
    {
        console.log("encontramos algo");
        console.log(verifica);
        console.log(verifica[0]);
        console.log(verifica[1]);
        console.log(verifica[2]);
    }
    else 
    {
        console.log('Não encontramos nada');
    }
    */
    
    //Funções para controle do Modal
    function abrirModal()
    {
        $('.btn').click((e)=>{
            e.stopPropagation();
            $('.bg').fadeIn();
        })
    }

    function verificarCliqueFechar()
    {
        var body = $("body");
        var close = $(".closeBtn");

        body.click(function(){

            $('.bg').fadeOut();
        });

        close.click(function(){
            $('.bg').fadeOut();
        });

        $(".form").click(function(e){
            e.stopPropagation();
        })
    }

    //Funções de verificação de campos
    function erroMessage(el)
    {
        el.css('border','2px solid red');
        el.data("invalido","true");
        alert(el.attr("name")+" não bate com a condição "+el.attr("name")+ ' completo');

        setTimeout(function(){
            el.css('border','1px solid #ccc');
        },2000);
    }

    function verificarNome(nome)
    {
        if(nome=="")
        {
            return false;
        }
            //contando a quantidade de espaços
            var splitstr = nome.val().split(" ");
            var amount = splitstr.length;
    
            if(amount >= 2)
            {
                for(var i = 0; i < amount; i++)
                {
                    if(splitstr[i].length <3)
                    {
                        return true;
                    }
                    if(splitstr[i].match(/^[A-Z]{1}[a-z]{1,}$/))
                    {
                        

                        return true;
                    }
                }
            }

            return false;
    }

    function verificarTelefone(telefone)
    {
        if(telefone=="")
        {
            return false;
        }

        if(telefone.val().match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null)
        {
            return false
        }
    }

    function verificarEmail(email)
    {
        if(email == "")
        {
            return false;
        }
        if(email.val().match(/^([a-z0-9-_]{1,})+@+([a-z]{1,})+\.+([a-z]{1,3})$/) == null)
        {
            return false
        }
    }

    abrirModal();
    verificarCliqueFechar();

    $('form').submit(function(e)
    {
        e.preventDefault();
        var nome = $('input[name=nome]');
        var telefone = $('input[name=telefone]');
        var email  =$('input[name=email]');

        if((verificarNome(nome) == false))
        {
            erroMessage(nome);
        }
        else if((verificarTelefone(telefone) == false))
        {
            erroMessage(telefone);
        }
        else if((verificarEmail(email)== false))
        {
            erroMessage(email);
        }
        else
        {
            alert('Formulário enviado com sucesso');
            $('.bg').fadeOut();
        }

    });
})