/* atelier.js — reconstrução dos controles do Atelier UC15 para Python/Markdown/CSS.
   Edição local; sem execução Python, rede, telemetria ou restauração automática. */
(()=>{
'use strict';
const drafts=[];
const el=(tag,cls,text)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;};
function mount(host){
 const source=document.getElementById(host.dataset.source);if(!source)return;
 const initial=source.textContent;let own=initial,referenceVisible=false,observed='';
 const lang=host.dataset.edita||'python',filename=host.dataset.filename||'rascunho.txt';
 const region=host.closest('.workbench')||host.closest('.exercise');
 const details=region?.nextElementSibling;
 const answerCode=details?.matches('.exercise-answer')?details.querySelector('code'):host.closest('fieldset')?.querySelector('.teacher-answer code');
 let reference=answerCode?.textContent||null;
 if(lang==='css'&&reference?.includes('<style>'))reference=reference.match(/<style>([\s\S]*?)<\/style>/i)?.[1]?.trim()||null;
 const readOnly=host.dataset.modo==='demo';
 const entry={filename,code:own,observed:'',dirty:false};drafts.push(entry);
 host.classList.add('atelier--pronto');
 const head=el('div','at-cabeca');head.append(el('span','at-selo',lang==='css'?'bancada CSS':readOnly?'demonstração':'exercício'),el('p','at-titulo',filename));
 host.append(head);
 const explanation=lang==='python'?'Edite e baixe o arquivo para executar na IDE ou CLI. Este editor não executa Python.':lang==='markdown'?'Rascunho editável. Baixe o documento preenchido; a leitura ao lado não é execução de software.':'Prévia HTML/CSS isolada da página. Altere uma regra por vez e compare larguras.';
 host.append(el('p','at-enunciado',explanation));
 const body=el('div','at-corpo'),editor=el('div','at-editor'),preview=el('div','at-preview');
 const tabs=el('div','at-abas');const tab=el('span','at-aba',lang.toUpperCase()+' · editor local');tabs.append(tab);editor.append(tabs);
 const editrow=el('div','at-local-editor'),numbers=el('pre','at-linhas'),field=el('textarea','at-campo');
 field.value=initial;field.spellcheck=false;field.autocomplete='off';field.wrap='off';field.readOnly=readOnly;
 field.setAttribute('aria-label','Código ou documento de '+filename);
 numbers.setAttribute('aria-hidden','true');editrow.append(numbers,field);editor.append(editrow);
 const state=el('p','at-state');state.setAttribute('role','status');state.setAttribute('aria-live','polite');
 function lines(){numbers.textContent=field.value.split('\n').map((_,i)=>i+1).join('\n');numbers.scrollTop=field.scrollTop;}
 field.addEventListener('scroll',()=>numbers.scrollTop=field.scrollTop);
 let frame=null,mold=null,stage=null,slider=null,output=null;
 const reading=el('pre','at-leitura-texto');
 if(lang==='css'){
  const bar=el('div','at-barra');slider=el('input','at-slider');slider.type='range';slider.min='320';slider.max='1280';slider.value='390';
  slider.setAttribute('aria-label','Largura da prévia CSS em pixels');output=el('output','at-leitura');bar.append(slider,output);
  stage=el('div','at-palco');mold=el('div','at-moldura');frame=el('iframe','at-frame');frame.title='Prévia isolada de '+filename;frame.setAttribute('sandbox','');
  mold.append(frame);stage.append(mold);preview.append(bar,stage);
  function scale(){
   const width=Number(slider.value),outer=width+2,ratio=Math.min(1,(stage.clientWidth||outer)/outer);
   mold.style.width=outer+'px';mold.style.height='422px';frame.style.width=width+'px';
   mold.style.transform='scale('+ratio+')';stage.style.height=(422*ratio)+'px';
   output.textContent=width+' px';
  }
  slider.addEventListener('input',scale);new ResizeObserver(scale).observe(stage);requestAnimationFrame(scale);
 }else{
  preview.append(el('h4','at-texto',lang==='python'?'Execução fora do navegador':'Leitura do documento'),reading);
  if(lang==='python'){
   const label=el('label','at-texto','Saída real observada na IDE/CLI (preenchimento manual)');
   const terminal=el('textarea','at-observacao');terminal.setAttribute('aria-label','Saída observada de '+filename);
   terminal.placeholder='Cole a saída real, sem dados pessoais. Nenhum programa é executado aqui.';
   terminal.addEventListener('input',()=>{observed=terminal.value;entry.observed=observed;entry.dirty=own!==initial||!!observed;});
   label.append(terminal);preview.append(label);host._terminal=terminal;
  }
 }
 function update(){
  lines();
  if(frame){
   const fixture=host.querySelector('.at-fixture')?.textContent||'<a href="#destino">Ir ao trecho final</a><button class="acao controle-necessario">Ação de exemplo</button><div class="instrucoes">Primeira instrução.<br>Segunda instrução.<br>Terceira instrução.</div><label class="option selected"><input type="radio" name="escolha"> Opção de exemplo</label><div class="cards"><article>Cartão 1</article><article>Cartão 2</article></div><pre tabindex="0">linha_de_codigo_com_texto_extenso_para_investigar_acesso_ao_conteudo_em_telas_estreitas_sem_alterar_o_tamanho_real_da_previa</pre><div class="texto">Texto de exemplo para investigar quebras de linha em telas estreitas.</div><p id="destino">Trecho final da bancada.</p>';
   const safe=field.value.replace(/<\/style/gi,'<\\/style');
   frame.srcdoc='<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font:16px/1.6 system-ui;margin:16px}button,input{font:inherit}.cards{display:grid;gap:12px}article{padding:12px;border:1px solid #bbb}</style><style>'+safe+'</style>'+fixture+'</html>';
  }else reading.textContent=lang==='python'?'Arquivo: '+filename+'\n\n1. Baixe seu código.\n2. Execute com o interpretador e comando indicados nesta seção.\n3. Compare a saída com sua previsão.\n4. Registre a execução real abaixo.':field.value;
 }
 function restore(){
  if(referenceVisible){field.value=own;referenceVisible=false;if(solution){solution.textContent='Ver solução';solution.setAttribute('aria-pressed','false');}field.readOnly=readOnly;update();}
 }
 field.addEventListener('input',()=>{
  if(referenceVisible)return;
  own=field.value;entry.code=own;entry.dirty=own!==initial||!!observed;state.textContent='Rascunho nesta sessão — baixe ou exporte antes de recarregar.';update();
 });
 field.addEventListener('keydown',e=>{
  if(field.readOnly)return;
  if(e.key==='Tab'){e.preventDefault();const start=field.selectionStart,end=field.selectionEnd;field.setRangeText('    ',start,end,'end');field.dispatchEvent(new Event('input',{bubbles:true}));}
  else if(e.key==='Enter'){const start=field.selectionStart;const prefix=field.value.slice(0,start).split('\n').pop();const spaces=prefix.match(/^\s*/)[0]+(lang==='python'&&prefix.trimEnd().endsWith(':')?'    ':'');if(spaces){e.preventDefault();field.setRangeText('\n'+spaces,start,field.selectionEnd,'end');field.dispatchEvent(new Event('input',{bubbles:true}));}}
 });
 body.append(editor,preview);host.append(body);
 const actions=el('div','at-acoes');
 function button(text,action){const b=el('button','at-btn',text);b.type='button';b.addEventListener('click',action);actions.append(b);return b;}
 let solution=null;
 if(reference&&!readOnly){
  solution=button('Ver solução',()=>{
   if(referenceVisible){restore();state.textContent='Seu rascunho restaurado.';}
   else{own=field.value;field.value=reference;referenceVisible=true;field.readOnly=true;solution.textContent='Voltar ao meu';solution.setAttribute('aria-pressed','true');state.textContent='Referência docente — seu rascunho está preservado.';update();}
  });solution.setAttribute('aria-pressed','false');
 }
 function reset(){restore();own=initial;field.value=initial;entry.code=initial;entry.dirty=false;entry.observed='';observed='';if(host._terminal)host._terminal.value='';state.textContent='Código inicial restaurado.';update();}
 if(!readOnly)button('Reiniciar',reset);
 button('Copiar meu código',async()=>{
  try{await navigator.clipboard.writeText(own);state.textContent='Rascunho copiado.';}
  catch{restore();field.focus();field.select();state.textContent='Use Ctrl+C para copiar a seleção ou baixe o arquivo.';}
 });
 button('Baixar meu arquivo',()=>{
  const url=URL.createObjectURL(new Blob([own],{type:'text/plain;charset=utf-8'}));const a=el('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);state.textContent='Arquivo baixado; envio ao professor não é automático.';
 });
 const expand=button(lang==='css'?'Expandir prévia':'Expandir painel',()=>{
  const active=host.classList.toggle('atelier--expandido');expand.setAttribute('aria-pressed',String(active));expand.textContent=active?'Voltar ao editor':lang==='css'?'Expandir prévia':'Expandir painel';
 });expand.setAttribute('aria-pressed','false');
 host.append(actions,state);
 source.closest('pre').hidden=true;
 document.addEventListener('uc9:presentation',e=>{if(e.detail.on)restore();});
 document.addEventListener('uc9:clear',reset);
 update();state.textContent='Sem salvamento automático — baixe ou exporte antes de sair.';
}
document.querySelectorAll('.atelier[data-source]').forEach(mount);
window.UC9=window.UC9||{};window.UC9.getDrafts=()=>drafts.filter(x=>x.dirty).map(x=>({...x}));
})();
