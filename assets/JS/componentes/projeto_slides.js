const container_projetos_AntesDepois = document.getElementById("cards_projetos");
    const cards_projetos = [
      {
        tempo1: "Antes",
        tempo2: "Depois",
        img: [
          "assets/img/eletrica.jpg",
          "assets/img/pintura.jpg"
        ],
        img_alt: "Imagem do projeto de reforma elétrica e pintura",
        subtitulo: "Reforma Residencial",
        paragrafo: `Projeto realizado em São Paulo, SP. 
          Nesta obra, realizamos a modernização da rede elétrica para maior segurança e eficiência. 
          Também executamos pintura completa das paredes internas com tintas de alta durabilidade. 
          Trabalho finalizado em 3 meses, garantindo qualidade e satisfação do cliente.`
      },
      {
        tempo1: "Antes",
        tempo2: "Depois",
        img: [
          "assets/img/eletrica.jpg",
          "assets/img/pintura.jpg"
        ],
        img_alt: "Imagem do projeto de reforma elétrica e pintura",
        subtitulo: "Reforma Comercial",
        paragrafo: `Localizado em Belo Horizonte, MG, este projeto envolveu a atualização do sistema elétrico 
          para suportar equipamentos modernos e a renovação da pintura externa, 
          aumentando a vida útil da fachada e a atratividade do local. 
          Projeto concluído em 2 meses com todos os padrões de segurança atendidos.`
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
        ${criarCarrossel(item.img, item.img_alt, idSlide + "-antes")}
      </figure>
      <div class="container_texto_projeto">
        <h4>${item.subtitulo}</h4>
        <p>${item.paragrafo}</p>
      </div>
    </article>
    <article>
      <div class="container_texto_projeto">
        <h4>${item.subtitulo}</h4>
        <p>${item.paragrafo}</p>
      </div>
      <figure>
        ${criarCarrossel(item.img, item.img_alt, idSlide + "-depois")}
      </figure>
    </article>
  `;
  container_projetos_AntesDepois.appendChild(card);
}

function mudaSlide(n, idGrupo) {
  const slides = document.querySelectorAll(`.slide-${idGrupo}`);
  let currentIndex = [...slides].findIndex(s => s.style.display === "block");

  slides[currentIndex].style.display = "none";

  let nextIndex = (currentIndex + n + slides.length) % slides.length;
  slides[nextIndex].style.display = "block";
}
