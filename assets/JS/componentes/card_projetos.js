
export function card_projetos() {
    const container_projetos = document.getElementById("cards-projeto")
    const projetos_lista = [
        {
            titulo: "Reforma da Biblioteca Municipal - Av. Brasil, 1020",
            descricao: "Projeto de revitalização da Biblioteca Municipal com melhorias na estrutura, acessibilidade e iluminação para melhor atender a comunidade.",
            alt_imagem: "Projeto 1",
            imagem: "assets/img/biblioteca.jpg",
        },
        {
            titulo: "Modernização do Salão de Beleza Estilo Vip - Rua das Rosas, 58",
            descricao: "Reforma completa do salão de beleza, com troca de revestimentos, instalação de mobiliário planejado e renovação da fachada para valorizar o ambiente.",
            alt_imagem: "Projeto 2",
            imagem: "assets/img/salaodebeleza.jpg",
        },
        {
            titulo: "Transformação da Loja de Roupas Bella Moda - Rua das Acácias, 240",
            descricao: "Obra de reforma e decoração da loja Bella Moda, com instalação de vitrines modernas, araras personalizadas e iluminação decorativa para destacar os produtos femininos.",
            alt_imagem: "Transformação da Loja de Roupas Bella Moda - Rua das Acácias, 240",
            imagem: "assets/img/lojaderoupas.jpg",
        },
        {
            titulo: "Implantação do Consultório Odontológico Sorriso+ - Av. João Paulo, 765",
            descricao: "Projeto de implantação de consultório odontológico com ambientes climatizados, divisórias de vidro, recepção moderna e estrutura adaptada para atender pacientes com conforto e segurança.",
            alt_imagem: "Implantação do Consultório Odontológico Sorriso+ - Av. João Paulo, 765",
            imagem: "assets/img/dentista.jpg",
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