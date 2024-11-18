const modal = document.getElementById('modalAvaliacao')

function adicionarAvaliacao(){

    modal.style.display = "block";

}

function fecharModal() {
 // pega o modal e fecha ele

    modal.style.display = "none";

}

window.onclick = function(event) {
     // função para se clicar fora do modal ele fecha
    if (event.target === modal) {
        fecharModal();
    }
}
function Avaliar() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('estrela').value;
    const descricao = document.getElementById('depoimento').value;
    const urlImage = document.getElementById('urlImage').value;

    const avaliacoes = {
        nome,
        estrela,
        depoimento,
        urlImage
    };

    if (avaliacoes.nome && avaliacoes.estrela && avaliacoes.depoimento) {
        let avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
        avaliacoes.push(avaliacoes);
        localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));

        limparFormulario();
        exibirAvaliacao();

    } else {
        alert('Preencha todos os campos para cadastrar o produto!');
    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('estrela').value = '';
    document.getElementById('depoimento').value = '';
    document.getElementById('urlImage').value = '';
}

function exibirAvaliacao() {
    const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
    const listaAvaliacoes = document.getElementById('listaAvaliacoes');
    listaAvaliacoes.innerHTML = '';
  
    for (let i in avaliacoes) {
        const avaliacoes = avaliacoes[i];
        const li = document.createElement('li');
        li.classList.add('avaliacoes-item');
  
        const img = document.createElement('img');
        img.classList.add('avaliacoes-img'); 
        img.src = produto.urlImage;
        img.style.margin = '10px'; 
        img.style.width = '100px'; 
        img.style.height = 'auto';

        const nome = document.createElement('p');
        nome.textContent = produ.nome; 

        const preco = document.createElement('p');
        preco.innerHTML = `<span>Preço:</span> R$${produto.preco}`; 

        const descricao = document.createElement('p');
        descricao.innerHTML = `<span>Descrição:</span> ${produto.descricao}`; 
                
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deletarProduto(i);
        
        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);
        li.appendChild(deleteBtn);
        
        listaProdutos.appendChild(li);
    }
  }
  
  function deletarProduto(index) {
      let produtos = JSON.parse(localStorage.getItem('produtos'));
      produtos.splice(index, 1);
      localStorage.setItem('produtos', JSON.stringify(produtos));
      exibirProdutos();
  }
  
  function limparProdutos() {
      localStorage.removeItem('produtos');
      exibirProdutos();
  }
  
  window.onload = exibirProdutos;