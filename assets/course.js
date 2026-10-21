/* course.js — interações de aula UC9; adaptação da separação de responsabilidades UC15. */
(()=>{
'use strict';
document.documentElement.classList.add('js');
document.addEventListener('click',event=>{
  const link=event.target.closest('a[data-download-content]');
  if(!link||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
  event.preventDefault();
  const url=URL.createObjectURL(new Blob([link.dataset.downloadContent],{type:'text/plain;charset=utf-8'}));
  const anchor=document.createElement('a');anchor.href=url;
  anchor.download=link.getAttribute('href').split('/').pop();
  document.body.append(anchor);anchor.click();anchor.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
});
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const teacherNotes=$('#teacher-notes');
const teacherNotesStatus=$('#teacher-notes-status');
const teacherToggle=$('#teacher-toggle');
const isEditing=target=>target.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="textbox"]');
function setTeacherNotes(open){
  if(!teacherNotes) return;
  if(open && document.body.classList.contains('present')) open=false;
  if(!open && teacherNotes.contains(document.activeElement)) $('#presentation').focus();
  teacherNotes.hidden=!open;
  teacherNotes.open=open;
  $$('.teacher-guidance').forEach(note=>{
    if(!open && note.contains(document.activeElement)) teacherToggle.focus();
    note.hidden=!open;
  });
  if(teacherToggle){
    teacherToggle.setAttribute('aria-expanded',String(open));
    teacherToggle.textContent=(open?'Ocultar':'Mostrar')+' orientações · N';
  }
  if(teacherNotesStatus) teacherNotesStatus.textContent=open?'Roteiro docente visível. Pressione N para ocultar.':'Roteiro docente oculto. Pressione N para mostrar.';
}
setTeacherNotes(false);
if(teacherToggle) teacherToggle.addEventListener('click',()=>setTeacherNotes(teacherNotes.hidden));
document.addEventListener('keydown',event=>{
 if(event.repeat||event.ctrlKey||event.metaKey||event.altKey||event.isComposing||isEditing(event.target))return;
 if(event.key.toLowerCase()==='n'&&teacherNotes){event.preventDefault();setTeacherNotes(teacherNotes.hidden);}
});
window.UC9=window.UC9||{};window.UC9.hideNotes=()=>setTeacherNotes(false);
function clearState(){
  $$('input').forEach(x => x.checked=false);
  $('#student-name').value='';
  $('#student-class').value='';
  const today=new Date();
  $('#lesson-date').value=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
  $$('#practice-notes,#reflection').forEach(x => x.value='');
  document.dispatchEvent(new Event('uc9:clear'));
  $$('.selected-text').forEach(x => x.textContent='');
  $('#count').textContent='0 itens marcados para discussão';
  $('#registered').textContent='Nenhuma discussão registrada nesta sessão.';
  $('#export-status').textContent='';
}
clearState();
window.addEventListener('pageshow', e => {if(e.persisted) clearState();});
document.addEventListener('change', e => {
  if(e.target.type==='radio'){
    e.target.closest('[data-question]').querySelector('.selected-text').textContent='✓ Resposta registrada';
  }
  if(e.target.classList.contains('discussion')){
    $('#count').textContent=$$('.discussion:checked').length+' itens marcados para discussão';
  }
});
$('#register').addEventListener('click',()=>{
  const selected=$$('.discussion:checked').map(x=>x.closest('.audit-item').querySelector('legend').textContent.trim());
  $('#registered').textContent=selected.length?'Situações registradas nesta sessão: '+selected.join(' • '):'Nenhum item selecionado para registrar.';
});
$('#reset').addEventListener('click',()=>{if(confirm('Limpar todas as escolhas e anotações desta página?'))clearState();});
function shuffle(items){
  for(let i=items.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [items[i],items[j]]=[items[j],items[i]];
  }
  return items;
}
const audit=$('#audit-list');
shuffle([...audit.children]).forEach(item=>audit.append(item));
$$('.question-options').forEach(group=>shuffle([...group.children]).forEach(option=>group.append(option)));
const steps=$$('.pipeline li');
let index=0;
const control=document.createElement('div');control.className='step-controls';
control.innerHTML='<button type="button" id="previous">← Anterior</button><span id="step-count" aria-live="polite"></span><button type="button" id="next">Próxima →</button><button type="button" id="all-steps">Ver todas</button>';
$('.pipeline').after(control);
function showStep(){steps.forEach((x,i)=>x.hidden=i!==index);$('#step-count').textContent=`Etapa ${index+1} de ${steps.length}`;$('#previous').disabled=index===0;$('#next').disabled=index===steps.length-1;}
$('#previous').onclick=()=>{index=Math.max(0,index-1);showStep();};
$('#next').onclick=()=>{index=Math.min(steps.length-1,index+1);showStep();};
$('#all-steps').onclick=()=>{steps.forEach(x=>x.hidden=false);$('#step-count').textContent='Todas as etapas';};showStep();
$$('[data-copy]').forEach(b=>b.addEventListener('click',async()=>{
  const text=document.getElementById(b.dataset.copy).textContent;
  try{await navigator.clipboard.writeText(text);b.nextElementSibling.textContent='Código copiado.';}
  catch{b.nextElementSibling.textContent='Cópia automática indisponível. Selecione o código ou use o download.';}
}));
$$('[data-export]').forEach(button=>button.addEventListener('click',()=>{
  const lesson=document.body.dataset.lesson;
  const questions=$$('[data-question]');
  const answered=questions.filter(x=>x.querySelector('input[type=radio]:checked')).length;
  const respostas=questions.map((question,i)=>{
    const selected=question.querySelector('input[type=radio]:checked');
    return `${i+1}. ${question.querySelector('legend').textContent.trim()}\n   Resposta do aluno: ${selected?selected.value:'Não respondida'}`;
  });
  const discussoes=$$('.discussion:checked').map(x=>x.closest('.audit-item').querySelector('legend').textContent.trim());
  const date=$('#lesson-date').value;
  const lines=[`# Registro ${lesson} — ${$('h1').textContent.trim()}`,'',
    'Aluno: '+($('#student-name').value.trim()||'Não informado'),
    'Turma: '+($('#student-class').value.trim()||'Não informada'),
    'Data da aula: '+(date||'Não informada'),
    'Exportado em: '+new Date().toLocaleString('pt-BR'),'',
    `## Respostas (${answered} de ${questions.length} registradas)`,'',...respostas,'',
    '## Situações marcadas para discussão','',...(discussoes.length?discussoes.map(x=>'- '+x):['Nenhuma situação marcada.']),'',
    '## Registros da prática','',$('#practice-notes').value.trim()||'Não preenchidos.','',
    '## Minha reflexão','',$('#reflection').value.trim()||'Não preenchida.'];
  const drafts=window.UC9?.getDrafts?.()||[];
  if(drafts.length)lines.push('','## Rascunhos editados no Atelier',...drafts.map(x=>'\n### '+x.filename+'\n\n'+x.code+(x.observed?'\n\nSaída observada informada pelo usuário:\n'+x.observed:'')));
  const url=URL.createObjectURL(new Blob([lines.join('\n')],{type:'text/markdown;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download=`registro-${lesson.toLowerCase()}-${date||'sem-data'}.md`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  $('#export-status').textContent='Registro exportado. Anexe o arquivo baixado e os arquivos solicitados nesta aula no canal indicado pelo professor. O envio não é automático.';
}));
})();
