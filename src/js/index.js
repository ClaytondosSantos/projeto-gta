/* 
Objetivo 1- Quando o usuário clicar no botão de seleção de plataforma deve abrir uma caixa com os botões de seleção de plataforma

    Passo 1- pegar o botão de seleção de plataformas 
no js para poder verificar quando o usuário clicar em cima dele

Passo 2- Pegar o elemento do conteúdo que precisar ser mostrado

Passo 3- Pegar o clique do usuário no js

Passo 4- Quando o ususario clicar,dicionar a classe ativo na listagem de plataforma dentro do botão pra que o conteúdo apareça 


Objetivo 2- Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteudo deve ser escondido

Passo 1- Verificar se o botão já está aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector('.btn-plataforma .plataformas');

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});
