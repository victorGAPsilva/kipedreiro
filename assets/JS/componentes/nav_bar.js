export function nav_bar() {
    const header = document.getElementById("header");
    header.innerHTML = `  <div class="menu-secundario">
            <span><img src="assets/img/icon/001-phone-receiver-silhouette.png" alt="telefone de contato"
                    class="icon">(11) 92152-4829</span>
            <span> <img src="assets/img/icon/019-email-1.png" alt="email de contato"
                    class="icon">contato@kipedreiro.com</span>
        </div>

        <nav class="menu-primario">
            <img src="assets/img/logo/KiPedreiro.png" alt="Kipedreiro logo" class="logo">
            <ul class="menu-navegacao">
                <li><a href="index.html">Início</a></li>
                <li><a href="servicos.html">Serviços</a></li>
                <li><a href="projetos.html">Projetos</a></li>
                <li><a href="processos.html">Processos</a></li>
                <li><a href="#testemunhos">Testemunhos</a></li>
                <li><a href="contato.html">Contato</a></li>
            </ul>
        </nav>`
}

