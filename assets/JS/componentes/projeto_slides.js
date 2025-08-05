const container_projetos = document.getElementById("cards_projetos");

const cards_projetos = [
  {
    imagens: [
      "assets/img/biblioteca.jpg",
      "assets/img/Projetos/Blibioteca/dowload1.jpg",
      "assets/img/Projetos/Blibioteca/dowload2.jpg",
      "assets/img/Projetos/Blibioteca/dowload3.jpg",
      "assets/img/Projetos/Blibioteca/dowload4.jpg",
      "assets/img/Projetos/Blibioteca/dowload5.jpg",
      "assets/img/Projetos/Blibioteca/dowload6.jpg",
      "assets/img/Projetos/Blibioteca/dowload7.jpg",
      "assets/img/Projetos/Blibioteca/dowload8.jpg",
      "assets/img/Projetos/Blibioteca/dowload9.jpg",
      "assets/img/Projetos/Blibioteca/dowload10.jpg"
    ],
    img_alt: "Imagens da Biblioteca Municipal",
    subtitulo: "Reforma da Biblioteca Municipal - Av. Brasil, 1020",
    paragrafo: "Projeto de revitalização da Biblioteca Municipal com melhorias na estrutura, acessibilidade e iluminação para melhor atender a comunidade."
  },
  {
    imagens: [
      "assets/img/salaodebeleza.jpg",
      "assets/img/Projetos/salao_de_beleza/dowload1.jpg",
      "assets/img/Projetos/salao_de_beleza/dowload2.jpg",
      "assets/img/Projetos/salao_de_beleza/dowload3.jpg",
      "assets/img/Projetos/salao_de_beleza/dowload4.jpg",
      "assets/img/Projetos/salao_de_beleza/dowload5.jpg",
      "assets/img/Projetos/salao_de_beleza/dowload6.jpg",
      "assets/img/Projetos/salao_de_beleza/dowload7.jpg",
      "assets/img/Projetos/salao_de_beleza/dowload8.jpg",
    ],
    img_alt: "Imagens do Salão Estilo Vip",
    subtitulo: "Modernização do Salão de Beleza Estilo Vip - Rua das Rosas, 58",
    paragrafo: "Reforma completa do salão de beleza, com troca de revestimentos, instalação de mobiliário planejado e renovação da fachada para valorizar o ambiente."
  },
  {
    imagens: [
      "assets/img/lojaderoupas.jpg",
      "assets/img/Projetos/lojaderoupas/dowload1.jpg",
      "assets/img/Projetos/lojaderoupas/dowload2.jpg",
      "assets/img/Projetos/lojaderoupas/dowload3.jpg",
      "assets/img/Projetos/lojaderoupas/dowload4.jpg",
      "assets/img/Projetos/lojaderoupas/dowload5.jpg",
      "assets/img/Projetos/lojaderoupas/dowload6.jpg",
    ],
    img_alt: "Imagens da Loja Feminina Bella Moda",
    subtitulo: "Transformação da Loja de Roupas Bella Moda - Rua das Acácias, 240",
    paragrafo: "Obra de reforma e decoração da loja Bella Moda, com instalação de vitrines modernas, araras personalizadas e iluminação decorativa para destacar os produtos femininos."
  },
  {
    imagens: [
      
      "assets/img/dentista.jpg",
      "assets/img/Projetos/odontologico/dowload1.jpg",
      "assets/img/Projetos/odontologico/dowload2.jpg",
      "assets/img/Projetos/odontologico/dowload3.jpg",
      "assets/img/Projetos/odontologico/dowload4.jpg",
      "assets/img/Projetos/odontologico/dowload5.jpg",
      "assets/img/Projetos/odontologico/dowload6.jpg",
      
    ],
    img_alt: "Imagens do Consultório Odontológico",
    subtitulo: "Implantação do Consultório Odontológico Sorriso+ - Av. João Paulo, 765",
    paragrafo: "Projeto de implantação de consultório odontológico com ambientes climatizados, divisórias de vidro, recepção moderna e estrutura adaptada para atender pacientes com conforto e segurança."
  }
];

function criarCarrossel(imagens, altBase, idUnico) {
  let slidesHTML = imagens.map((src, idx) => `
    <div class="slide slide-${idUnico}" style="${idx === 0 ? "display:block;" : "display:none;"}">
      <img src="${src}" alt="${altBase}" class="imagem_projeto" />
    </div>
  `).join("");

  return `
    <div class="carrossel">
      ${slidesHTML}
      <button class="prev" onclick="mudaSlide(-1, '${idUnico}')">❮</button>
      <button class="next" onclick="mudaSlide(1, '${idUnico}')">❯</button>
    </div>
  `;
}

let contadorId = 0;

for (const item of cards_projetos) {
  const idSlide = `carrossel-${contadorId++}`;

  const card = document.createElement("div");
  card.className = "card_projetos";
  card.innerHTML = `
    <article>
      <figure>
        ${criarCarrossel(item.imagens, item.img_alt, idSlide)}
      </figure>
      <div class="container_texto_projeto">
        <h4>${item.subtitulo}</h4>
        <p>${item.paragrafo}</p>
      </div>
    </article>`;
  
  container_projetos.appendChild(card);
}

function mudaSlide(n, idGrupo) {
  const slides = document.querySelectorAll(`.slide-${idGrupo}`);
  let currentIndex = [...slides].findIndex(s => s.style.display === "block");

  slides[currentIndex].style.display = "none";

  let nextIndex = (currentIndex + n + slides.length) % slides.length;
  slides[nextIndex].style.display = "block";
}
