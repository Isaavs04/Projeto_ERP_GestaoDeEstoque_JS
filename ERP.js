$(document).ready(function(){
    let listaProdutos = document.getElementById('produtos');
    let id = 0;
    $('#btnCadastrar').click(function(){
        // Pegando os valores dos inputs
        let nmProduto = $('#nmProduto').val();
        let nrEstoque = $('#nrEstoque').val();
        let preco = $('#precoProduto').val();
        
        // Criando minha div
        let divProd = document.createElement('div');
        divProd.classList.add('divCard-estilo');
        
        // Criação dos objetos do card
        let nmProd = document.createElement('p');
        nmProd.textContent = nmProduto;
        nmProd.classList.add('ttCard');
        let qtdProd = document.createElement('p');
        qtdProd.textContent = "Quantidade em estoque: " + nrEstoque;
        qtdProd.classList.add('elementsCard'); 
        let pcProd = document.createElement('p');
        pcProd.textContent = "Preço: R$ " + parseFloat(preco).toFixed(2);
        pcProd.classList.add('elementsCard');
        let vlEstoque = document.createElement('p');
        vlEstoque.textContent = "Valor do estoque: R$ " + (parseFloat(nrEstoque) * parseFloat(preco)).toFixed(2);
        vlEstoque.classList.add('elementsCard');
        let IDPROD = document.createElement('p');
        let idComZeros = String(id).padStart(3, '0');
        IDPROD.textContent = 'IDPROD' + idComZeros;
        IDPROD.classList.add('elementsCard');
        let btnRemover = document.createElement('button');
        btnRemover.classList.add('button');
        
        btnRemover.innerHTML = `
          <svg viewBox="0 0 448 512" class="svgIcon">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
          </svg>
        `;

        id++;
        // Colocando os novos objetos na div
        divProd.appendChild(nmProd);
        divProd.appendChild(qtdProd);
        divProd.appendChild(pcProd);
        divProd.appendChild(vlEstoque);
        divProd.appendChild(IDPROD);
        divProd.appendChild(btnRemover);
        listaProdutos.appendChild(divProd);

        // Evento de clique para remover o card ao clicar no botão
        $(btnRemover).click(function(){
            $(this).parent().remove();
        });
    });
});