/* ============================================================
   SCRIPT.JS — controla a troca de abas do CARDÁPIO
   (seção <section class="cardapio" id="cardapio"> no index.html)

   Existem 4 botões de aba no HTML:
     <button class="tab" data-panel="comecar">Para começar</button>
     <button class="tab" data-panel="comer">Para comer</button>
     <button class="tab" data-panel="beber">Para beber</button>
     <button class="tab" data-panel="drinks">Drinks</button>

   E 4 blocos de conteúdo correspondentes, cada um com um id igual
   ao "data-panel" do botão:
     <div class="menu-panel" id="comecar">...</div>
     <div class="menu-panel" id="comer">...</div>
     <div class="menu-panel" id="beber">...</div>
     <div class="menu-panel" id="drinks">...</div>

   O CSS (style.css) esconde todo mundo com ".menu-panel{display:none;}"
   e só mostra quem tem a classe "active" (".menu-panel.active{display:block;}").
   Este script é o responsável por trocar essa classe "active" quando o
   usuário clica em uma aba.
   ============================================================ */

// Pega TODOS os botões que têm a classe "tab" (as 4 abas do cardápio)
// e repete o código abaixo para cada um deles.
document.querySelectorAll('.tab').forEach(tab => {

  // Para cada botão de aba, registra um "ouvinte de clique":
  // toda vez que o usuário clicar nesse botão específico, a função
  // dentro do addEventListener é executada.
  tab.addEventListener('click', () => {

    // 1) Remove a classe "active" de TODOS os botões de aba.
    //    Isso "desliga" visualmente a aba que estava selecionada antes
    //    (no CSS, .tab.active tem fundo verde escuro).
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    // 2) Remove a classe "active" de TODOS os painéis de cardápio
    //    (comecar / comer / beber / drinks), escondendo todos eles.
    document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));

    // 3) Adiciona a classe "active" APENAS no botão que acabou de ser
    //    clicado, deixando ele com o visual de "selecionado".
    tab.classList.add('active');

    // 4) Usa o atributo "data-panel" do botão clicado (ex: data-panel="comer")
    //    para encontrar o <div id="comer"> correspondente no HTML,
    //    e adiciona "active" nele — isso faz esse painel aparecer
    //    (graças à regra .menu-panel.active{display:block;} do CSS).
    document.getElementById(tab.dataset.panel).classList.add('active');
  });
});
