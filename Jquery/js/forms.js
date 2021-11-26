$(function(){

    $('.form_contato').submit(function(){
        var inputName = $('.form_contato input[type=text]');
        var inputEmail = $('.form_contato input[type=email]');
        var container = $('.container');

        var content = `<b>Nome:</b> ${inputName.val()}<br> 
        <b>Email:</b> ${inputEmail.val()} <hr>
        `
        container.append(content);
        return false;
    })
})