export function testemunho_slides() {
    const container_testemunhos = document.getElementById("testemunho_comentario");

    const comentarios = [
        {
            avaliacao: 4,
            autor: "Maria de Fátima",
            comentario: "Bom trabalho",
        },
        {
            avaliacao: 5,
            autor: "João Pedro",
            comentario: "Serviço excelente e rápido!",
        },
        {
            avaliacao: 3,
            autor: "Ana Luíza",
            comentario: "Bom, mas pode melhorar em detalhes.",
        },
        {
            avaliacao: 5,
            autor: "Carlos Henrique",
            comentario: "Super recomendo, equipe ótima!",
        },
        {
            avaliacao: 4,
            autor: "Fernanda Alves",
            comentario: "Trabalho muito profissional.",
        },
    ];

    let indexAtual = 0;

    const boxConteudo = document.createElement("div");
    boxConteudo.classList.add("box-testemunho");
    container_testemunhos.insertBefore(boxConteudo, container_testemunhos.querySelector(".testemunho-controles"));

    function renderizarTestemunho(i) {
        const item = comentarios[i];
        const estrelas = "★".repeat(item.avaliacao) + "☆".repeat(5 - item.avaliacao);
        boxConteudo.innerHTML = `
            <div class="testemunho-comentarios">
                <article>
                    <p class="comentario">"${item.comentario}"</p>
                    <p class="autor">- ${item.autor}</p>
                    <p class="avaliacao">${estrelas}</p>
                </article>
            </div>`;
    }

    renderizarTestemunho(indexAtual);

    document.getElementById("prev-testemunho").addEventListener("click", () => {
        indexAtual = (indexAtual - 1 + comentarios.length) % comentarios.length;
        renderizarTestemunho(indexAtual);
    });

    document.getElementById("next-testemunho").addEventListener("click", () => {
        indexAtual = (indexAtual + 1) % comentarios.length;
        renderizarTestemunho(indexAtual);
    });
}
