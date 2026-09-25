const toggle=document.getElementById('menuToggle');
const nav=document.getElementById('siteNav');
const header=document.getElementById('siteHeader');

function closeMenu(){
  if(!nav||!toggle)return;
  nav.classList.remove('open');
  header?.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded','false');
}
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    header?.classList.toggle('menu-open',open);
    toggle.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
}
function syncHeader(){header?.classList.toggle('scrolled',window.scrollY>24)}
window.addEventListener('scroll',syncHeader,{passive:true});syncHeader();

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

const utmKeys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
const incoming=new URLSearchParams(location.search);
document.querySelectorAll('a.go-link').forEach(a=>{
  const target=new URL(a.href);
  let hasIncoming=false;
  utmKeys.forEach(key=>{
    const value=incoming.get(key);
    if(value){target.searchParams.set(key,value);hasIncoming=true}
  });
  if(!hasIncoming){
    target.searchParams.set('utm_source','cumbresalvaje.mx');
    target.searchParams.set('utm_medium','website');
    target.searchParams.set('utm_campaign','site_launch_2026');
  }
  const cta=a.dataset.cta;
  if(cta&&!target.searchParams.get('utm_content'))target.searchParams.set('utm_content',cta);
  a.href=target.toString();
  a.addEventListener('click',()=>{
    try{window.fbq&&fbq('trackCustom','OpenCumbreGO',{cta:cta||'unknown'})}catch(_){}
  });
});