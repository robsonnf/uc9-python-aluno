# UC09 — Material do aluno

Aplicativos desktop com Python e integração de banco de dados. Curso de 92 horas em 31 encontros.

## Aulas disponíveis neste material

- A01 — Abertura, ambiente e diagnóstico (180 minutos).
- A02 — Requisitos, ética e organização do trabalho (180 minutos).

As demais aulas da grade aparecem como planejadas e serão liberadas ao longo do curso.

## Antes de começar

- Navegador atualizado, como Edge, Chrome ou Firefox.
- Node.js 18 ou superior, com npm, para iniciar o servidor local. Confira no terminal: `node --version` e `npm --version`.
- Python 3 para os exercícios de programação e VS Code com a extensão Python, conforme orientação do professor. Confira: `python --version` (ou `py --version` no Windows).
- Git é opcional para baixar o curso; também é possível usar **Code → Download ZIP** no GitHub.

O servidor das páginas usa Node.js. Os programas dos exercícios usam Python, executado no computador pela IDE ou pelo terminal.

## Baixar e abrir

No GitHub, use **Code → Download ZIP**, extraia tudo e abra a pasta extraída no VS Code por **Arquivo → Abrir Pasta**. Para quem usa Git:

```powershell
git clone https://github.com/robsonnf/uc9-python-aluno.git
cd uc9-python-aluno
```

Abra o terminal na pasta que contém `package.json` e `index.html`.

## Iniciar a aula

1. No terminal da pasta do material, execute:

   ```powershell
   npm start
   ```

2. Abra no navegador o endereço **localhost** mostrado no terminal, normalmente `http://localhost:4321/`. Se a porta estiver ocupada, use a outra porta informada.
3. No índice, clique na aula indicada pelo professor. Na primeira aula do curso, abra **A1 — Abertura, ambiente e diagnóstico**.
4. Leia os objetivos e acompanhe os blocos da aula. A tecla **P** mostra ou oculta a grade; **Escape** fecha a grade. O botão de apresentação amplia a leitura.
5. Mantenha o terminal aberto durante o uso. Para encerrar o servidor, pressione **Ctrl+C**.

Não é necessário executar `npm install`: este servidor não tem dependências externas. Como alternativa, abra `index.html` diretamente no navegador. Abrir o arquivo HTML no GitHub mostra seu código; para acompanhar a aula, use a cópia baixada.

## Prática e entrega

Na A1, abra `atividades/A01/inicial/` no VS Code. No terminal dessa pasta:

```powershell
python primeiro_programa.py
python leitura.py
python diagnostico.py
```

Se o computador usa o iniciador `py`, substitua `python` por `py`. O texto `PENDENTE` no diagnóstico é parte da atividade. Nesta aula não é necessário instalar pacotes com pip.

Na A2, leia `atividades/A02/guia-ferramentas.md` e copie os modelos para uma pasta nova da equipe. Preencha briefing, requisitos, backlog e evidências com dados fictícios. A atividade é de análise e organização; siga o guia antes dos comandos Git.

Durante a aula, responda às questões e preencha a seção de registros com nome, turma, data, anotações da prática e reflexão. Antes de fechar ou recarregar a página, clique em **Exportar registros da aula**. Será baixado um arquivo como `registro-a01-2026-10-19.md`, que pode ser lido no VS Code ou em um editor de texto.

Anexe esse arquivo, os modelos preenchidos e os arquivos Python solicitados no canal de entrega indicado pelo professor. A exportação faz o download; o envio é feito por você. Os arquivos produzidos fora da página precisam ser anexados separadamente. Recarregar a página limpa as respostas e anotações da sessão.

## Problemas comuns

- **ENOENT / package.json não encontrado:** o terminal está na pasta errada. Confira com `Get-Location` e `Get-ChildItem` no PowerShell. Entre na pasta que contém `package.json`.
- **npm ou node não reconhecido:** confira se o Node.js está instalado e reabra o terminal após a instalação. Enquanto isso, é possível abrir `index.html` diretamente.
- **npm.ps1 bloqueado no PowerShell:** use `npm.cmd start` ou execute `npm start` no Prompt de Comando, sem alterar a política do computador.
- **python não reconhecido:** tente `py --version` e siga a orientação de preparação do laboratório.
- **Endereço não abre:** mantenha o servidor ligado e copie o endereço mostrado na execução atual; a porta pode mudar.
- **Conteúdo antigo:** atualize a página com `Ctrl+F5` e confira se abriu a pasta correta.

As páginas e os anexos locais funcionam offline; baixar ferramentas e consultar fontes externas pode exigir internet.
