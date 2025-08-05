export function card_processos() {
    const container_processos = document.getElementById("cards_processos")
    const processos_lista = [
        {
            titulo: "Levantamento e Planejamento",
            descricao: "Análise inicial do terreno e planejamento detalhado do projeto de construção.",
            alt_imagem: "Levantamento e Planejamento",
            imagem: "assets/img/icon/005-task.png",
        },
        {
            titulo: "Projeto Executivo",
            descricao: "Desenvolvimento dos projetos arquitetônico, estrutural e complementares.",
            alt_imagem: "Projeto Executivo",
            imagem: "assets/img/icon/009-civil-engineering.png",
        },
        {
            titulo: "Execução da Obra",
            descricao: "Construção conforme os projetos, com acompanhamento e controle de qualidade.",
            alt_imagem: "Execução da Obra",
            imagem: "assets/img/icon/006-blueprint.png",
        },
        {
            titulo: "Entrega e Pós-Obra",
            descricao: "Finalização, entrega da obra e acompanhamento de possíveis ajustes pós-entrega.",
            alt_imagem: "Entrega e Pós-Obra",
            imagem: "assets/img/icon/008-hook.png",
        }
    ]
    for (const item_processos of processos_lista) {
        const card_processos = document.createElement("div")
        card_processos.className = "card-processo"
        card_processos.innerHTML = `
        <article>
         <figure>
                            <img src="${item_processos.imagem}" alt="${item_processos.alt_imagem}" class="processo-imagem">
                            <figcaption class="figcaption-processo">
                                <h3>${item_processos.titulo}</h3>
                                <p>${item_processos.descricao}</p>
                            </figcaption>
        </figure>
        </article> 
        ` 
        container_processos.appendChild(card_processos);
    }

}