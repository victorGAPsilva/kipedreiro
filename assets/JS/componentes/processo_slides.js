
    const container_processos_AntesDepois = document.getElementById("cards_processos");
  
    const cards_processos = [
      {
        tempo1: "Antes",
        tempo2:"Depois",
        img: "assets/img/construction-site.jpg",
        img_alt: "Imagem do processo antes",
        subtitulo: "Processo 1",
        paragrafo: "Descrição do processo antes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, velit voluptas."
      },
      {
        tempo1: "Antes",
        tempo2:"Depois",
        img: "assets/img/construction-site.jpg",
        img_alt: "Imagem do processo depois",
        subtitulo: "Processo 1",
        paragrafo: "Descrição do processo depois. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, velit voluptas."
      }
    ];

    const testemunho_slides = [
        {
            src:"",
            alt:"",
            texto:"",
        }
    ]

    




    for (const item_processos of cards_processos){
        const card_AntesDepois = document.createElement("div")
        card_AntesDepois.className = "card_processos"
        card_AntesDepois.innerHTML = `
      <h3>${item_processos.tempo1}</h3>
      <article>
        <figure>
          <img src="${item_processos.img}" alt="${cards_processos.img_alt}" class="imagem_processo">
        </figure>
        <div class="container_texto_processo">
          <h4>${item_processos.subtitulo}</h4>
          <p>${item_processos.paragrafo}</p>
        </div>
      </article>

      <h3>${item_processos.tempo2}</h3>
      <article>
        <div class="container_texto_processo">
          <h4>${item_processos.subtitulo}</h4>
          <p>${item_processos.paragrafo}</p>
        </div>
        <figure>
          <img src="${item_processos.img}" alt="${item_processos.img_alt}" class="imagem_processo">
        </figure>
      </article>`
    container_processos_AntesDepois.appendChild(card_AntesDepois)
}