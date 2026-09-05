const filters=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('.art-card')];

function applyFilter(value){
  filters.forEach(b=>b.classList.toggle('active',b.dataset.filter===value));
  cards.forEach(card=>{
    const show=value==='all'||card.dataset.character===value;
    card.style.display=show?'':'none';
  });
}

filters.forEach(btn=>btn.addEventListener('click',()=>applyFilter(btn.dataset.filter)));

document.querySelectorAll('[data-jump-filter]').forEach(btn=>btn.addEventListener('click',()=>{
  applyFilter(btn.dataset.jumpFilter);
  document.querySelector('#gallery').scrollIntoView({behavior:'smooth'});
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const glow=document.querySelector('.cursor-glow');
if(glow){
  window.addEventListener('pointermove',e=>{
    glow.style.left=`${e.clientX}px`;
    glow.style.top=`${e.clientY}px`;
  });
}
