
export function card_projetos() {
    const container_projetos = document.getElementById("cards-projeto")
    const projetos_lista = [
        {
            titulo: "Projeto 1",
            descricao: "Descrição do projeto 1.",
            alt_imagem: "Projeto 1",
            imagem: "assets/img/a-d.jpg",
        },
        {
            titulo: "Projeto 2",
            descricao: "Descrição do projeto 2.",
            alt_imagem: "Projeto 2",
            imagem: "assets/img/a-d2.jpg",
        },
        {
            titulo: "Projeto 3",
            descricao: "Descrição do projeto 3.",
            alt_imagem: "Projeto 3",
            imagem: "assets/img/a-d3.jpg",
        },
        {
            titulo: "Projeto 4",
            descricao: "Descrição do projeto 4.",
            alt_imagem: "Projeto 4",
            imagem: "assets/img/a-d4.jpg",
        }
    ]
    for (const item_projetos of projetos_lista) {
        const card_projetos = document.createElement("div")
        card_projetos.className = "card-projeto"
        card_projetos.innerHTML = `
        <article>
         <figure>
                            <img src="${item_projetos.imagem}" alt="${item_projetos.alt_imagem}" class="projeto-imagem">
                            <figcaption class="figcaption-projeto">
                                <h3 class="titulo-interno">${item_projetos.titulo}</h3>
                                <p>${item_projetos.descricao}</p>
                            </figcaption>
        </figure>
        </article> 
        `
        container_projetos.appendChild(card_projetos)
    }
}