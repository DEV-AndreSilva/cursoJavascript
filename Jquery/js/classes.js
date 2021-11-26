/*
$(()=>{

    function ola(e)
    {
        alert("ola mundo");
        //e.preventDefault();
        return false;
    }
    

    function alerta(Event)
    {
        console.log(`O ${Event.data.name} que possui ${Event.data.age} anos de idade Clicou no corpo da pagina`);
    }

    $(".box").on("click", ola);
    $("body").on("click", {name: "Andre", age: 20}, alerta);


})
*/

$(()=>{

    setTimeout(() => {
        //esperando 2 segundos e adicionando a classe ao objeto de classe box
        $('.box').addClass('bodyPurple');    
    }, 2000), setTimeout(() => {
        
        //esperando mais dois segundos e removendo a classe adicionada
        $('.box').removeClass('bodyPurple');
    }, 4000);;
  
    
    //encontrar os elementos internos de um elemento
   let filho2 =  $('.box').find('.child1').find('.child2');
   filho2.css('color','red');

   //função attr server para manipular atributos
    alert($('andre').attr('nome'));

    $('andre').attr('idade','21');

    alert($('andre').attr('idade'));

})