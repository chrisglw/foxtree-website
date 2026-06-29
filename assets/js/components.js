window.onbeforeunload = () => window.scrollTo(0, 0);

function getActivePage() {
  const path = window.location.pathname;
  if (path.includes('products')) return 'products';
  if (path.includes('gallery')) return 'gallery';
  if (path.includes('free-bid')) return 'free-bid';
  return 'home';
}

function renderNav() {
  const active = getActivePage();
  const links = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'products.html', label: 'Products', id: 'products' },
    { href: 'gallery.html', label: 'Gallery', id: 'gallery' },
    { href: 'free-bid.html', label: 'Free Bid', id: 'free-bid' },
  ];

  const navLinks = links.map(({ href, label, id }) =>
    `<a href="${href}"${id === active ? ' class="active"' : ''}>${label}</a>`
  ).join('');

  document.getElementById('site-nav').innerHTML = `
    <header class="main-header">
      <h1 class="logo">FOXTREE</h1>
      <nav>${navLinks}</nav>
      <a href="tel:+12082411858" class="btn-number">(208) 241-1858</a>
    </header>
  `;
}

function renderFooter() {
  document.getElementById('site-footer').innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="footer-logo">FOXTREE</span>
          <p class="footer-tagline">Custom countertops built to last.</p>
        </div>
        <div class="footer-social">
          <a href="https://www.facebook.com/foxtreecountertops/" target="_blank" aria-label="Facebook">
            <img src="assets/Facebook_Logo_Primary.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/foxtree_countertops" target="_blank" aria-label="Instagram">
            <img src="assets/instagram_icon.png" alt="Instagram" />
          </a>
        </div>
        <div class="footer-contact">
          <h4>Contact</h4>
          <a href="tel:+12082411858">(208) 241-1858</a>
          <a href="mailto:mfoxtree@gmail.com">mfoxtree@gmail.com</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} Foxtree LLC. All Rights Reserved.</span>
        <span class="dev-credit">Developed by <a href="https://www.christianguevaraportfolio.com/">Christian Guevara</a></span>
      </div>
    </footer>
  `;
}

renderNav();
renderFooter();

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
  document.querySelectorAll('.fade-down, .fade-zoom').forEach(el => {
    setTimeout(() => el.classList.add('visible'), parseInt(el.getAttribute('data-delay')) || 0);
  });
});
