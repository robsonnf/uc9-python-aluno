# Assets da UC9 — estrutura compartilhada

Os arquivos course.css, atelier.css, aulas.js, shell.js, course.js e atelier.js recuperam a organização do template UC15 recebido, com identidade Senac e adaptação aos exercícios Python. index.css cuida da página inicial. No professor há ainda teacher.css; ele não integra o pacote do aluno.

- course.css: base tipográfica, casca de curso, lateral, leitura, apresentação e controles; derivado da folha recebida e adaptado aos conteúdos UC9.
- atelier.css: editor/prévia, ações e viewport; derivado da folha recebida. Seletores reservados de correção foram separados em teacher.css. Em telas pequenas, linhas quebram e o gutter de numeração é omitido para não desalinhá-lo.
- aulas.js: gerado da grade canônica, com disponibilidade específica do pacote. Não editar à mão.
- shell.js: grade, P, Escape, apresentação e seção ativa; não guarda preferências entre aberturas.
- course.js: N, perguntas, discussão, dicas, passos, cópia, downloads offline e exportação.
- atelier.js: edição de Python/Markdown/CSS, linhas, Tab/auto-indentação, reinício, cópia/download, expansão, comparação docente e rascunhos na exportação.

Python não é executado no navegador: o painel identifica a execução externa na IDE/CLI e a saída registrada manualmente. CSS tem iframe sandbox sem permissão de scripts, slider de largura real e escala para caber na tela. Markdown é texto editável, não HTML executado. Nenhuma solução é incluída no aluno para ser ocultada com CSS.

O editor local funciona sem internet, CDN ou dependências instaladas. Bootstrap, jQuery e SVGs de exemplos específicos da UC15 não são usados na UC9 e não foram copiados. O aprimoramento remoto CodeMirror da referência não foi incluído; a edição offline com textarea permanece. A estrutura e os controles foram adaptados, não há promessa de identidade binária dos scripts de duas disciplinas diferentes.

Rascunhos valem só nesta sessão. Baixar salva o seu arquivo; Exportar registros inclui rascunhos modificados e a saída manual, mesmo na versão docente sem exportar a referência em exibição. Recarregar limpa o estado. Sem JavaScript, enunciados, código inicial e links continuam disponíveis, mas não há montagem de editores.

Extraia sempre a pasta inteira e preserve assets/, lessons/ e atividades/. Para abrir, use index.html ou npm start na raiz do material. A geração da autoria é feita por python scripts/build.py; não editar os HTMLs de saída.
