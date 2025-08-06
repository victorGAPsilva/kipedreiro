export function nav_bar() {
  const header = document.getElementById("header");

  header.innerHTML = `
   <div class="menu-secundario">
  <a href="tel:+5511921524829">
    <span>
      <img src="assets/img/icon/001-phone-receiver-silhouette.png" alt="telefone de contato" class="icon_nav_bar">
      (11) 92152-4829
    </span>
  </a>
  <a href="mailto:contato@kipedreiro.com">
    <span>
      <img src="assets/img/icon/019-email-1.png" alt="email de contato" class="icon_nav_bar">
      contato@kipedreiro.com
    </span>
  </a>
</div>

    <nav class="menu-primario">
      <a href="index.html"><img src="assets/img/logo/KiPedreiro.png" alt="Kipedreiro logo" class="logo"></a>
      <ul class="menu-navegacao">
        <li><a href="index.html">Início</a></li>
        <li><a href="servicos.html">Serviços</a></li>
        <li><a href="projetos.html">Projetos</a></li>
        <li><a href="processos.html">Processos</a></li>
        <li><a href="contato.html">Contato</a></li>
      </ul>
    </nav>
  `;

  const currentPage = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll(".menu-navegacao a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.parentElement.style.display = "none";
    }
  });
}
