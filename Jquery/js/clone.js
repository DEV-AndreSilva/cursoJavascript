$(() =>{
    var el = $('#source').find('.texto').clone();

    console.log(el.text());

    //clonando elemento
    setTimeout(() => {
        $('#container').html(el.html());    
    }, 2000);
    

    //mudando o elemento de local
    setTimeout(() => {
        $('#source .texto').appendTo('#container');
    }, 4000);
});