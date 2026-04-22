// ============================================
// COMPENDIO DE THORN — sidebar.js
// Inyecta la barra lateral común en cada página
// Detecta subcarpetas para ajustar rutas relativas
// ============================================

function getPathPrefix() {
  const path = window.location.pathname;
  if (path.includes('/misiones/') || path.includes('/onepage/')) {
    return '../';
  }
  return '';
}

function buildSidebarHTML(prefix) {
  return `
<aside class="sidebar">
  <div class="brand">
    <a href="${prefix}index.html">
      <div class="brand-mark">Thorn</div>
      <div class="brand-ornament">✦ ✦ ✦</div>
      <div class="brand-sub">Compendio del DM</div>
    </a>
  </div>

  <nav>
    <div class="nav-section">El Mundo</div>
    <ul class="nav">
      <li><a href="${prefix}index.html" data-page="inicio"><span class="nav-icon">✦</span>Inicio</a></li>
      <li><a href="${prefix}mundo.html" data-page="mundo"><span class="nav-icon">⛰</span>El Mundo</a></li>
      <li><a href="${prefix}razas.html" data-page="razas"><span class="nav-icon">⚔</span>Razas Libres</a></li>
      <li><a href="${prefix}dioses.html" data-page="dioses"><span class="nav-icon">☼</span>Panteón</a></li>
      <li><a href="${prefix}eras.html" data-page="eras"><span class="nav-icon">✧</span>Las Eras</a></li>
      <li><a href="${prefix}gremios.html" data-page="gremios"><span class="nav-icon">◈</span>Gremios</a></li>
    </ul>

    <div class="nav-section">La Campaña</div>
    <ul class="nav">
      <li><a href="${prefix}principal.html" data-page="principal"><span class="nav-icon">✦</span>Aventura Principal</a></li>
      <li><a href="${prefix}secundarias.html" data-page="secundarias"><span class="nav-icon">◆</span>Misiones Secundarias</a></li>
      <li><a href="${prefix}onepage.html" data-page="onepage"><span class="nav-icon">◇</span>One-Page Adventures</a></li>
      <li><a href="${prefix}bestiario.html" data-page="bestiario"><span class="nav-icon">✧</span>Bestiario</a></li>
    </ul>

    <div class="nav-section">Herramientas</div>
    <ul class="nav">
      <li><a href="${prefix}consejos.html" data-page="consejos"><span class="nav-icon">◉</span>Consejos de DM</a></li>
      <li><a href="${prefix}objetos.html" data-page="objetos"><span class="nav-icon">✦</span>Objetos Mágicos</a></li>
      <li><a href="${prefix}maga-blanca.html" data-page="maga-blanca"><span class="nav-icon">✧</span>La Maga Blanca</a></li>
    </ul>
  </nav>
</aside>
`;
}

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('.app');
  if (app) {
    const prefix = getPathPrefix();
    app.insertAdjacentHTML('afterbegin', buildSidebarHTML(prefix));

    const currentPage = document.body.dataset.page;
    if (currentPage) {
      const activeLink = document.querySelector(`.sidebar a[data-page="${currentPage}"]`);
      if (activeLink) activeLink.classList.add('active');
    }

    const toggle = document.querySelector('.menu-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('open');
      });
    }

    document.querySelectorAll('.sidebar a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.remove('open');
      });
    });
  }
});
