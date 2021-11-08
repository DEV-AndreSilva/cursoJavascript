var itens = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');
    var total = document.querySelector(".soma-produto h1");

    
    if(nomeProduto.value =="" || precoProduto.value=="" )
    {
        console.log('erro');
    }
    else
    {    
        itens.push({
            nome: nomeProduto.value,
            valor: precoProduto.value
        });

        let listaProdutos = document.querySelector('.lista-produto');
        listaProdutos.innerHTML="";

        let soma = 0;

        itens.map(function(val){

            soma+=parseFloat(val.valor);
            
        
            listaProdutos.innerHTML +=`

                <div class="lista-produto-single">
                    <h3> `+val.nome+`</h3>
                    <h3 class="price-produto"> <span> R$ `+val.valor+`</span></h3>
                </div>
            
            `;

        })

        soma = soma.toFixed(2);
        nomeProduto.value="";
        precoProduto.value="";
        total.innerHTML = "Total: R$ "+soma; 
        }
})

document.querySelector('input[name=limpar]').addEventListener('click',()=>{
    itens=[];

    let listaProdutos = document.querySelector('.lista-produto');
    listaProdutos.innerHTML="";

    var total = document.querySelector(".soma-produto h1").innerHTML = "Total: R$ 00.00";
})