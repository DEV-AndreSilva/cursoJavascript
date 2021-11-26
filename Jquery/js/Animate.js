$(function()
{
    var timer, intervalTimer;
    var timeout = ()=>
    {
        $('.box2').animate({
            'width':'40%',
            'height':'200px',
            'marginTop':'10%',
            'marginLeft':'60%',
            'float':'right'
        },2000, function(){
            console.log("Terminamos nossa animação");
        });
    }

    $('body').click(()=>{
        alert("Cancelando timeout e interval");
        clearTimeout(timer);
        clearInterval(intervalTimer)
    })



    $('.box1').animate({
        'width':'40%',
        'height':'200px',
        'marginTop':'10%',
        'marginLeft':'10%'
    },2000, function(){
        //3 segundos depois vai iniciar a 2 animação
       timer =  setTimeout(timeout,3000);
    });

    intervalTimer = setInterval(() => {
            console.log("Ola amigo");
    },2000 );



});