const filters=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('.art-card')];
function applyFilter(value){
  filters.forEach(b=>b.classList.toggle('active',b.dataset.filter===value));
  cards.forEach(card=>{const show=value==='all'||card.dataset.character===value;card.style.display=show?'':'none';});
}
filters.forEach(btn=>btn.addEventListener('click',()=>applyFilter(btn.dataset.filter)));
document.querySelectorAll('[data-jump-filter]').forEach(btn=>btn.addEventListener('click',()=>{applyFilter(btn.dataset.jumpFilter);document.querySelector('#gallery').scrollIntoView({behavior:'smooth'});}));
