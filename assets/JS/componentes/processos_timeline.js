
  const eventosTimeline = [
        {
          ano: "1º Passo",
          descricao: "Solicitação de orçamento: o cliente entra em contato e descreve sua necessidade."
        },
        {
          ano: "2º Passo",
          descricao: "Contato inicial: nossa equipe retorna rapidamente para entender melhor a demanda."
        },
        {
          ano: "3º Passo",
          descricao: "Visita técnica: realizamos uma visita ao local para avaliação e levantamento técnico."
        },
        {
          ano: "4º Passo",
          descricao: "Estudo de viabilidade: analisamos o projeto, normas técnicas e possibilidades do terreno."
        },
        {
          ano: "5º Passo",
          descricao: "Apresentação da proposta: enviamos um orçamento detalhado com prazos e materiais."
        },
        {
          ano: "6º Passo",
          descricao: "Assinatura do contrato: formalizamos o acordo com todos os detalhes definidos."
        },
        {
          ano: "7º Passo",
          descricao: "Planejamento da obra: montamos o cronograma de execução com etapas definidas."
        },
        {
          ano: "8º Passo",
          descricao: "Início da obra: iniciamos a execução conforme planejado, com equipe qualificada."
        },
        {
          ano: "9º Passo",
          descricao: "Acompanhamento e relatórios: o cliente recebe atualizações periódicas do andamento."
        },
        {
          ano: "10º Passo",
          descricao: "Finalização e entrega: entregamos a obra concluída com checklist e aprovação do cliente."
        },
        {
          ano: "11º Passo",
          descricao: "Pós-obra e garantia: oferecemos suporte técnico e garantia conforme o contrato."
        },
  ]

  const timelineContainer = document.getElementById("timeline");

  timelineContainer.innerHTML = eventosTimeline.map((evento, index) => `
    <div class="container ${index % 2 === 0 ? "left" : "right"}">
      <div class="content">
        <h2>${evento.ano}</h2>
        <p>${evento.descricao}</p>
      </div>
    </div>
  `).join('');
