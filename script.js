const grid = document.getElementById('productsGrid');
const tpl = document.getElementById('cardTemplate');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

function bannerGradient(hex){
  return `linear-gradient(120deg, ${hex}, transparent 60%), radial-gradient(1000px 120px at -10% 100%, rgba(255,255,255,.08), transparent)`;
}
function moneyBRL(v){ return v.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}); }

function render(products){
  grid.innerHTML = '';
  products.forEach(p => {
    const node = tpl.content.cloneNode(true);
    node.querySelector('.card__title').textContent = p.title;
    node.querySelector('.card__subtitle').textContent = p.subtitle;
    node.querySelector('.price').textContent = moneyBRL(p.price);
    node.querySelector('.card__banner').style.background = bannerGradient(p.brandColor);
    node.querySelector('.card').dataset.title = p.title.toLowerCase();
    grid.appendChild(node);
  });
}

render(PRODUCTS);

const input = document.getElementById('searchInput');
input.addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = PRODUCTS.filter(p => p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q));
  render(filtered);
});
