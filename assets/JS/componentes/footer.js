export function footer() {
  const footer = document.getElementById("footer");

  footer.innerHTML = `
    <div class="container">
      <div class="coluna-footer">
        <h3>Sobre nós</h3>
        <p>A Ki-Pedreiro é uma construtora de São Paulo que realiza reformas e obras com qualidade, agilidade e preço justo. Contamos com uma equipe experiente para transformar seu projeto em realidade.</p>
      </div>

      <div class="coluna-footer">
        <h3>Links úteis</h3>
        <ul class="links-footer">
          <li><a href="index.html">Início</a></li>
          <li><a href="servicos.html">Serviços</a></li>
          <li><a href="projetos.html">Projetos</a></li>
          <li><a href="processos.html">Processos</a></li>
          <li><a href="contato.html">Contato</a></li>
        </ul>
      </div>

      <div class="coluna-footer">
        <h3>Siga nas redes sociais</h3>
        <div class="redes">
          <a href="https://instagram.com/kipedreiro" target="_blank">
            <img src="assets/img/icon/instagram.svg" alt="Instagram" class="redes-sociais">
          </a>
          <a href="https://linkedin.com/in/kipedreiro" target="_blank">
            <img src="assets/img/icon/linkedin.svg" alt="LinkedIn" class="redes-sociais">
          </a>
        </div>
      </div>
    </div>
  `;

  const currentPage = window.location.pathname.split("/").pop(); 
  const footerLinks = footer.querySelectorAll(".links-footer a");

  footerLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.parentElement.style.display = "none";
    }
  });
}
