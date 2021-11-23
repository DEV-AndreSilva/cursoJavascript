$(function(){

    var boxwd = $('.box');
   

   // $('.box').width('900');

   $('.box').css('width','900px');

   //width não pega o espaçamento do padding
   console.log("Width: "+boxwd.width());

   //innerWidth pega toda a largura incluindo padding
   console.log("innerWidth: "+boxwd.innerWidth());

   //outer width pega toda a largura incluindo padding e border
   console.log("outerWidth: "+boxwd.outerWidth());

   //outer width pega toda a largura incluindo padding, margim e border
   console.log("outerWidth(true): "+boxwd.outerWidth(true));

   
   //width não pega o espaçamento do padding
   console.log("Height: "+boxwd.height());

   //innerHeight pega toda a largura incluindo padding
   console.log("innerHeight: "+boxwd.innerHeight());

   //outer Height pega toda a largura incluindo padding e border
   console.log("outerHeight: "+boxwd.outerHeight());

   //outer Height pega toda a largura incluindo padding, margim e border
   console.log("outerHeight(true): "+boxwd.outerHeight(true));


   //resumo
   //width/height - Dimensão calculada total com base no padding
   //innerWidth/innerHeight - Dimensão calculada incluindo o padding
   //outerWidth/outerHeight - Dimensão calculada total incluindo padding e margim
   //se o parametro True for passado
});