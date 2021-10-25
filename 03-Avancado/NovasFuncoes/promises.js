function TestePromise()
{
    return new Promise(function(resolve, reject)
    {
        setTimeout(function()
        {
            const erro = true;
            if(erro)
            {
                reject('A promise foi rejeitada');
            }
            else
            {
                resolve('A promise foi resolvida com sucesso');
            }
        },2000)
        
    });
}

/* 
// then = Se der tudo certo
// var res = Retorno da promise (resolve)
// catch =  Se der erro
// var error = retorno da promise (reject)

TestePromise().then(function(res)
{
    alert(res);
}).catch(function(error){
    alert(error);
});
*/

async function testes02()
{
    //Espera o término da promise para executar o restante da função depois do await
    await TestePromise().then(function(res)
    {
        alert(res);
    }).catch(function(error){
        alert(error);
    });

    alert('A promise terminou');
}

testes02();
