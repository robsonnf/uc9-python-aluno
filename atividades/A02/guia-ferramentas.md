# A02 — Preparar, preencher e entregar os documentos

## O que será feito

Nesta aula você usa o VS Code como editor de texto e registra o planejamento de um sistema de empréstimos de equipamentos. Não há aplicação Python para executar, biblioteca para instalar ou conta GitHub para criar. Você precisa do material extraído, Explorador de Arquivos e editor; Git será inspecionado com acompanhamento quando disponível.

## 1. Preparar antes de escrever

1. No Explorador de Arquivos do Windows, abra a pasta de atividades indicada pelo professor.
2. Crie uc9-a02 e, dentro dela, docs. Se o nome já estiver em uso, escolha uc9-a02_revisao ou outro nome livre; não sobrescreva trabalhos existentes.
3. Na abertura da página A02, use os seis links de preparação: briefing.md, requisitos.md, backlog.md, evidencias.md, dados-sinteticos.csv e guia-ferramentas.md.
4. Salve todos em uc9-a02/docs. Se caírem em Downloads, mova-os para docs. Se o navegador abrir o texto, use Ctrl+S, preserve o nome/extensão e não salve como HTML nem acrescente .txt. Como alternativa, copie esses seis arquivos da pasta atividades/A02 do pacote extraído para docs, sem baixar novamente.
5. Abra o VS Code → Arquivo → Abrir Pasta → uc9-a02. Expanda docs no Explorador lateral e confira os seis nomes. Se não enxergar as extensões, ative Exibir → Mostrar → Extensões de nomes de arquivos no Explorador do Windows.
6. Abra docs/briefing.md, preencha o primeiro campo com base no pedido da aula e salve com Ctrl+S. Feche/reabra o arquivo para confirmar a gravação. Se não conseguir, registre a etapa/mensagem e peça apoio; não é necessário reinstalar nada.

Estrutura esperada:

```text
uc9-a02/
  docs/
    briefing.md
    requisitos.md
    backlog.md
    evidencias.md
    dados-sinteticos.csv
    guia-ferramentas.md
```

Trabalhar em cópias mantém os modelos recebidos disponíveis para consulta. Ainda não é preciso criar pastas de código/testes ou arquivos de dependências.

## 2. Preencher na ordem da atividade

- briefing.md: problema, usuário, escopo e dúvidas do pedido fictício. “A confirmar” é diferente de uma resposta inventada.
- requisitos.md: três requisitos funcionais, duas regras propostas, um requisito de qualidade, critérios e simulações no papel. O exemplo de reserva de sala da página ensina a estrutura; o desafio permanece no cenário de equipamentos.
- backlog.md: pelo menos cinco tarefas pequenas com vínculo ao requisito, prioridade, dependência, papéis e evidência.
- evidencias.md: simulação, revisão antes/depois, ferramentas usadas e pendências reais.
- dados-sinteticos.csv: consultar no editor para ver códigos, descrições e quantidades; não há importação para banco nesta aula.

Abra um arquivo por vez, edite e salve. Na revisão por pares, use uma cópia ou o canal indicado pelo professor e não inclua dados reais. Markdown é texto: não precisa instalar extensão de visualização para preencher os campos.

## 3. Conferir Git com o professor

Esta etapa não substitui os documentos. Se Git não estiver instalado, registre a pendência e continue o planejamento; não crie conta ou instale ferramentas sem autorização do laboratório.

No VS Code, abra Terminal → Novo Terminal e selecione PowerShell, não o prompt Python >>>. Execute um comando por vez na pasta uc9-a02:

```powershell
Get-Location
Get-ChildItem -Force
git --version
git rev-parse --show-toplevel
```

Compare a pasta atual com o local que você abriu. Se o último comando mostrar uma raiz existente, PARE e apresente o resultado ao professor: não inicialize um repositório aninhado, não apague .git e não mova arquivos de outros projetos. Você pode continuar preenchendo os documentos enquanto o professor avalia a organização.

Se informar “not a git repository”, isso é esperado antes da inicialização. O professor deve confirmar que o destino é a pasta de trabalho correta. Antes de inicializar, use Arquivo → Novo Arquivo e salve .gitignore na raiz uc9-a02, com:

```text
.venv/
__pycache__/
.env
dados-reais/
```

Esses padrões orientam a exclusão de arquivos não rastreados; não protegem acesso nem removem versões já registradas. Nunca coloque dados reais nessa pasta como forma de protegê-los.

Só depois da conferência do destino:

```powershell
git init
git status --short
git rev-parse --show-toplevel
git remote -v
```

Esperado: repositório local inicializado; docs/ e .gitignore podem aparecer com ??; a raiz corresponde a uc9-a02; remote -v sem saída é normal, pois não há remoto configurado. O nome inicial da branch depende da estação, não é critério de erro. Não há commit, push, autenticação ou configuração global nesta aula. O primeiro commit revisado será trabalhado na A04; não adicionar tudo com git add . para “completar” esta etapa.

## 4. Entregar e conferir

1. Salve os quatro documentos de trabalho: briefing.md, requisitos.md, backlog.md e evidencias.md.
2. Na página, preencha identificação e registros e clique em Exportar registros da aula. Confira o arquivo registro-a02-data.md baixado.
3. Anexe esses cinco arquivos (quatro documentos e uma exportação) no canal indicado pelo professor. O CSV e este guia são materiais de consulta, não precisam ser reenviados.
4. Não entregue .git, ambientes virtuais, credenciais ou dados reais. O navegador não recolhe seus documentos automaticamente e o download não envia o trabalho ao professor.

## Erros comuns

- Arquivo não aparece: confira se ficou em Downloads e se foi movido para docs; atualize o Explorador do editor.
- Arquivo abre como página: copie o modelo do pacote extraído ou salve como texto mantendo o nome original, não HTML.
- Nome termina em .md.txt: exiba as extensões no Windows e corrija somente a extensão adicional do arquivo copiado.
- Comando no prompt >>>: saia do interpretador e abra PowerShell.
- Git não reconhecido/sem permissão: registre a mensagem e peça suporte, sem alterar políticas do sistema.
- Raiz Git inesperada: interrompa a inicialização e chame o professor; não exclua histórico.
- git diff vazio para arquivo novo: não significa ausência do arquivo; confira git status e abra o documento no editor.
