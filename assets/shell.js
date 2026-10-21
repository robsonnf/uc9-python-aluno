/* shell.js — casca de curso, grade e apresentação. Sem persistência automática. */
(()=>{
'use strict';
const $=s=>document.querySelector(s);
const sidebar=$('#course-sidebar'),toggle=$('#grade-toggle');
if(!sidebar||!toggle)return;
const editing=target=>target.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="textbox"]');
function setGrade(open,focus=false){
 if(!open&&sidebar.contains(document.activeElement))toggle.focus();
 sidebar.hidden=!open;document.body.classList.toggle('grade-open',open);
 toggle.setAttribute('aria-expanded',String(open));toggle.textContent=(open?'Ocultar grade':'Mostrar grade')+' · P';
 if(open&&focus)$('#grade-close').focus();
}
setGrade(matchMedia('(min-width: 1000px)').matches);
toggle.addEventListener('click',()=>setGrade(sidebar.hidden,true));
$('#grade-close').addEventListener('click',()=>setGrade(false));
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'&&!sidebar.hidden){setGrade(false);return;}
 if(e.repeat||e.ctrlKey||e.metaKey||e.altKey||e.isComposing||editing(e.target))return;
 if(e.key.toLowerCase()==='p'){e.preventDefault();setGrade(sidebar.hidden);}
});
sidebar.addEventListener('click',e=>{
 const link=e.target.closest('a[href^="#"]');
 if(link&&matchMedia('(max-width: 999px)').matches){
  setGrade(false);const target=document.querySelector(link.getAttribute('href'));
  target?.setAttribute('tabindex','-1');target?.focus({preventScroll:true});
 }
});
$('#presentation')?.addEventListener('click',e=>{
 const on=document.body.classList.toggle('present');document.body.classList.toggle('modo-apresentacao',on);
 e.target.setAttribute('aria-pressed',String(on));
 if(on){window.UC9?.hideNotes?.();document.querySelectorAll('.exercise-answer,.teacher-answer').forEach(x=>x.open=false);}
 document.dispatchEvent(new CustomEvent('uc9:presentation',{detail:{on}}));
});
const links=[...sidebar.querySelectorAll('.grade-sections a')];
if('IntersectionObserver' in window){
 const observer=new IntersectionObserver(items=>{
  items.forEach(item=>{
   if(!item.isIntersecting)return;
   links.forEach(a=>a.removeAttribute('aria-current'));
   links.find(a=>a.getAttribute('href')==='#'+item.target.id)?.setAttribute('aria-current','location');
  });
 },{rootMargin:'-10% 0px -65% 0px'});
 links.forEach(a=>{const node=document.querySelector(a.getAttribute('href'));if(node)observer.observe(node);});
}
const current=window.AULAS?.find(x=>x.arquivo===decodeURIComponent(location.pathname.split('/').pop()));
if(current)document.body.dataset.courseLesson=String(current.n);
})();
