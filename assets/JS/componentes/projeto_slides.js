const container_projetos_AntesDepois = document.getElementById("cards_projetos");

const cards_projetos = [
  {
    tempo1: "Antes",
    tempo2: "Depois",
    imgAntes: [
      "assets/img/eletrica.jpg",
      "assets/img/pintura.jpg"
    ],
    imgDepois: [
      "assets/img/eletrica.jpg",
      "assets/img/pintura.jpg"
    ],
    img_alt: "Imagem do projeto",
    subtitulo: "Projeto 1",
    paragrafo: "Descrição do projeto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, velit voluptas."
  },
  {
    tempo1: "Antes",
    tempo2: "Depois",
    imgAntes: [
      "assets/img/eletrica.jpg",
      "assets/img/pintura.jpg"
    ],
    imgDepois: [
      "assets/img/eletrica.jpg",
      "assets/img/pintura.jpg"
    ],
    img_alt: "Imagem do projeto",
    subtitulo: "Projeto 2",
    paragrafo: "Outra descrição do projeto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, velit voluptas."
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
    <h3>${item.tempo1}</h3>
    <article>
      <figure>
        ${criarCarrossel(item.imgAntes, item.img_alt, idSlide + "-antes")}
      </figure>
      <div class="container_texto_projeto">
        <h4>${item.subtitulo}</h4>
        <p>${item.paragrafo}</p>
      </div>
    </article>

    <h3>${item.tempo2}</h3>
    <article>
      <div class="container_texto_projeto">
        <h4>${item.subtitulo}</h4>
        <p>${item.paragrafo}</p>
      </div>
      <figure>
        ${criarCarrossel(item.imgDepois, item.img_alt, idSlide + "-depois")}
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
