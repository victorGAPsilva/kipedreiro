export function card_servico() {
    const container_servico = document.getElementById("container_cards_servico");
    const servico_lista = [
        {
            titulo: "Serviços elétricos",
            descricao: "Serviços completos de elétrica para sua residência.",
            alt_imagem: "Serviço 1",
            imagem: "assets/img/eletrica.jpg",
        },
        {
            titulo: "Serviços de construção",
            descricao: "Serviços completos de construção de forma rápida e segura.",
            alt_imagem: "Serviço 2",
            imagem: "assets/img/construçao.jpg",
        },
        {
            titulo: "Serviços de pintura",
            descricao: "O melhor serviço de pintura para sua residência.",
            alt_imagem: "Serviço 3",
            imagem: "assets/img/pintura.jpg",
        },
        {
            titulo: "Serviço de gestão",
            descricao: "A melhor organização sobre a construção do seu negócio e da sua residência.",
            alt_imagem: "Serviço 4",
            imagem: "assets/img/gestao.jpg",
        }
    ];
    for (const item of servico_lista) {
        const card_servico = document.createElement("div");
        card_servico.className = "card-servico"
        card_servico.innerHTML = `
        <article>
        <figure>
            <img src="${item.imagem}" alt="${item.alt_imagem}" class="servico-imagem" />
            <figcaption class="figcaption-servico">
                <h3 class="titulo-interno">${item.titulo}</h3>
                <p>${item.descricao}</p>
            </figcaption>
        </figure>
        </article>
        `;
        container_servico.appendChild(card_servico);
    }
}