export function footer() {
    const footer = document.getElementById("footer");
    footer.innerHTML = ` <div class="container">
            <div class="coluna-footer">
                <h3>sobre nos</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing eli</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing eli</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing eli</p>
            </div>
            <div class="coluna-footer">
                <h3>links uteis</h3>
                <ul>
                    <li><a href="#hero">Início</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#processos">Processos</a></li>
                    <li><a href="#testemunhos">Testemunhos</a></li>
                    <li><a href="contato">contato</a></li>
                </ul>
            </div>
            <div class="coluna-footer">
                <h3>Siga nas redes sociais</h3>
                <div class="redes">
                    <a href="https://instagram.com/kipedreiro" target="_blank"> <img src="assets/img/icon/instagram.svg"
                            alt="instagram" class="redes-sociais"></a>

                    <a href="https://linkedin.com/in/kipedreiro" target="_blank"> <img
                            src="assets/img/icon/linkedin.svg" alt="linkedin" class="redes-sociais"></a>
                </div>

            </div>
        </div>`
}