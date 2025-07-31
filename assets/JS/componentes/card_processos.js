export function card_processos() {
    const container_processos = document.getElementById("cards_processos")
    const processos_lista = [
        {
            titulo: "Processos 1",
            descricao: "Descrição do processos 1.",
            alt_imagem: "Processo 1",
            imagem: "assets/img/icon/005-task.png",
        },
        {
            titulo: "Processos 2",
            descricao: "Descrição do processo 2.",
            alt_imagem: "Processo 2",
            imagem: "assets/img/icon/009-civil-engineering.png",
        },
        {
            titulo: "Processo 3",
            descricao: "Descrição do processo 3.",
            alt_imagem: "Processo 3",
            imagem: "assets/img/icon/006-blueprint.png",
        },
        {
            titulo: "Processo 4",
            descricao: "Descrição do processo 4.",
            alt_imagem: "Processo 4",
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