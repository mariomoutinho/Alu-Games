function alterarStatus(id) {
  // Evita o comportamento padrão do <a href="#"> (voltar pro topo da página)
  if (window.event) window.event.preventDefault();

  const jogo = document.getElementById(`game-${id}`);
  const imagem = jogo.querySelector(".dashboard__item__img");
  const botao = jogo.querySelector(".dashboard__item__button");

  const estaAlugado = imagem.classList.contains("dashboard__item__img--rented");

  if (estaAlugado) {
    // Devolver
    imagem.classList.remove("dashboard__item__img--rented");
    botao.classList.remove("dashboard__item__button--return");
    botao.textContent = "Alugar";
  } else {
    // Alugar
    imagem.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";
  }
}