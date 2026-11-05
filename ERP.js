$(document).ready(function(){
    let listaProdutos = document.getElementById('produtos');
    let id = 0;
    $('#btnCadastrar').click(function(){
        //Pegando os valores dos inputs
        let nmProduto = $('#nmProduto').val();
        let nrEstoque = $('#nrEstoque').val();
        let preco = $('#precoProduto').val();
        //Criando minha div
        let divProd = document.createElement('div');
        divProd.classList.add('divCard-estilo');
        //Criação dos objetos do card
        let nmProd = document.createElement('p');
        nmProd.textContent = nmProduto;
        let qtdProd = document.createElement('p');
        qtdProd.textContent = nrEstoque; 
        let pcProd = document.createElement('p');
        pcProd.textContent = "R$ " + parseFloat(preco).toFixed(2);
        let vlEstoque = document.createElement('p');
        vlEstoque.textContent = (parseFloat(nrEstoque) * parseFloat(preco)).toFixed(2);
        let IDPROD = document.createElement('p');
        IDPROD.textContent = 'IDPROD' + id.toFixed(2);
        let btnRemover = document.createElement('button');
        let idComZeros = String(id).padStart(3, '0');
        IDPROD.textContent = 'IDPROD' + idComZeros;
        btnRemover.textContent = 'Remover';
        btnRemover.classList.add('btnRemove-estilo');
        id++
        //Colocando os novos objetos na div
        divProd.appendChild(nmProd);
        divProd.appendChild(qtdProd);
        divProd.appendChild(pcProd);
        divProd.appendChild(vlEstoque);
        divProd.appendChild(IDPROD);
        divProd.appendChild(btnRemover)
        listaProdutos.appendChild(divProd);
        $(btnRemover).click(function(){
            $(this).parent().remove();
        })
    })
})
