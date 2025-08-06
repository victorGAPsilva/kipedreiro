const eventosTimeline = [
  {
    ano: "1º Passo",
    descricao: "Solicitação de orçamento: o cliente entra em contato e descreve sua necessidade.",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#e4e41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet" viewBox="0 0 24 24"><path d="M20 12h.01"/><path d="M2 7a2 2 0 0 1 2-2h16a1 1 0 0 1 1 1v2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h17V7"/></svg>`
  },
  {
    ano: "2º Passo",
    descricao: "Contato inicial: nossa equipe retorna rapidamente para entender melhor a demanda.",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#e4e41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call" viewBox="0 0 24 24"><path d="M14.05 2A10 10 0 0 1 22 9.95"/><path d="M14.05 6A6 6 0 0 1 18 9.95"/><path d="m2 2 3 1.36a2 2 0 0 1 1.1 2.65l-1.1 2.49a2 2 0 0 0 .45 2.21l3.27 3.27a2 2 0 0 0 2.21.45l2.49-1.1a2 2 0 0 1 2.65 1.1L22 22"/></svg>`
  },
  {
    ano: "3º Passo",
    descricao: "Visita técnica: realizamos uma visita ao local para avaliação e levantamento técnico.",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#e4e41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" viewBox="0 0 24 24"><path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10Z"/><circle cx="12" cy="11" r="2"/></svg>`
  },
  {
    ano: "4º Passo",
    descricao: "Estudo de viabilidade: analisamos o projeto, normas técnicas e possibilidades do terreno.",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#e4e41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-search" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M3 17v2a2 2 0 0 0 2 2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M17 21h2a2 2 0 0 0 2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/></svg>`
  },
  {
    ano: "5º Passo",
    descricao: "Apresentação da proposta: enviamos um orçamento detalhado com prazos e materiais.",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#e4e41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>`
  },
  {
    ano: "6º Passo",
    descricao: "Assinatura do contrato: formalizamos o acordo com todos os detalhes definidos.",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#e4e41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake" viewBox="0 0 24 24"><path d="M12 12L8 8a2.828 2.828 0 0 1 4-4l8 8a2.828 2.828 0 0 1-4 4l-4-4"/><path d="m20 16-2 2"/><path d="m18 20-2-2"/><path d="M2 12l4 4"/><path d="m6 20-2-2"/></svg>`
  },
  {
    ano: "7º Passo",
    descricao: "Planejamento da obra: montamos o cronograma de execução com etapas definidas.",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#e4e41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock" viewBox="0 0 24 24"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 16h-4v-4"/></svg>`
  },
  {
    ano: "8º Passo",
    descricao: "Início da obra: iniciamos a execução conforme planejado, com equipe qualificada.",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#e4e41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hammer" viewBox="0 0 24 24"><path d="m15 12-3 3"/><path d="M12 15v6"/><path d="m18 13-3-3 1.5-1.5a2.121 2.121 0 0 0 0-3L14 4l-2 2-1-1-5 5 1 1-2 2 2 2 2-2 1 1 5-5"/></svg>`
  },
  {
    ano: "9º Passo",
    descricao: "Acompanhamento e relatórios: o cliente recebe atualizações periódicas do andamento.",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#e4e41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bar-chart-3" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>`
  },
  {
    ano: "10º Passo",
    descricao: "Finalização e entrega: entregamos a obra concluída com checklist e aprovação do cliente.",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#e4e41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle" viewBox="0 0 24 24"><path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10Z"/><path d="m9 12 2 2 4-4"/></svg>`
  },
  {
    ano: "11º Passo",
    descricao: "Pós-obra e garantia: oferecemos suporte técnico e garantia conforme o contrato.",
    icone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#e4e41a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`
  }
];
const timelineContainer = document.getElementById("timeline");
let html = "";

for (let i = 0; i < eventosTimeline.length; i++) {
  const evento = eventosTimeline[i];
  const lado = i % 2 === 0 ? "left" : "right";

  html += `
    <div class="container ${lado}">
      <div class="content">
        <div class="icone">${evento.icone}</div>
        <div>
          <h2>${evento.ano}</h2>
          <p>${evento.descricao}</p>
        </div>
      </div>
    </div>
  `;
}

timelineContainer.innerHTML = html;