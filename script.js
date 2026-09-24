document.addEventListener('DOMContentLoaded',()=>{const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links'),theme=document.querySelector('.theme-toggle');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));const savedTheme=localStorage.getItem('dhanush-theme');if(savedTheme==='light')document.body.classList.add('light');const updateTheme=()=>{if(theme){const light=document.body.classList.contains('light');theme.textContent=light?'☾':'☼';theme.setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme');}};updateTheme();theme?.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('dhanush-theme',document.body.classList.contains('light')?'light':'dark');updateTheme();});const links=[...document.querySelectorAll('.nav-link')],sections=[...document.querySelectorAll('main section[id]')];const obs=new IntersectionObserver(es=>{const e=es.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!e)return;links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))},{rootMargin:'-35% 0px -55% 0px',threshold:[.1,.3,.6]});sections.forEach(s=>obs.observe(s));});


// Project screenshot gallery
document.querySelectorAll('[data-gallery]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const modal=document.getElementById(btn.dataset.gallery);
    if(!modal)return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  });
});
document.querySelectorAll('[data-close-gallery]').forEach(el=>{
  el.addEventListener('click',()=>{
    const modal=el.closest('.project-modal');
    if(!modal)return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  });
});
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  const modal=document.querySelector('.project-modal.open');
  if(modal){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
});
