# UC09 — Material do aluno

Aplicativos desktop com Python e integração de banco de dados. Curso de 92 horas em 31 encontros.

## Aulas disponíveis neste material

- A01 — Abertura, ambiente e diagnóstico (180 minutos).
- A02 — Requisitos, ética e organização do trabalho (180 minutos).
- A03 — Raciocínio no papel, pseudocódigo e tradução para Python (180 minutos).
- A04 — Ambiente virtual, módulos, exceções e histórico local (180 minutos).

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
3. No índice, clique na aula indicada pelo professor, entre as disponíveis neste pacote. Na primeira aula do curso, abra A1 quando ela estiver incluída.
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

Na A2, comece pela preparação na abertura da própria página. Na área de atividades indicada pelo professor, crie uc9-a02/docs (ou um nome livre, sem substituir trabalhos). Salve nessa pasta os seis materiais pelos links da abertura ou copie-os de atividades/A02 do pacote extraído. Abra uc9-a02 no VS Code, confira os nomes e salve/reabra o briefing antes de prosseguir.

Preencha briefing.md, requisitos.md, backlog.md e evidencias.md na ordem das quatro atividades, usando o cenário fictício de equipamentos. CSV e guia são consulta. Entregue os quatro documentos e o registro exportado. Não há Python para executar ou biblioteca para instalar. Inspecione Git com o professor; se encontrar repositório existente, pare e avalie sem criar outro dentro dele. Guia detalhado em atividades/A02/guia-ferramentas.md.

Na A3, preencha primeiro atividades/A03/tabela-rastreio.md e pseudocodigo.md. Depois leia guia-execucao.md e abra atividades/A03/inicial/ na IDE. No terminal dessa pasta:

    python rastreio.py
    python retirada.py

O primeiro arquivo é o exemplo completo de lotes; o segundo tem duas funções para completar. None/PENDENTE são lacunas didáticas; False e zero são resultados possíveis após implementar. Preserve os seis casos independentes. Não é necessário instalar bibliotecas. Entregue tabela, pseudocódigo, evidências, sua retirada.py e o registro exportado.

Na A4, leia atividades/A04/guia-ambiente.md e guia-git.md. Copie inicial/, incluindo .gitignore, para uma pasta nova fora do material e de outros repositórios. Crie .venv e execute seu Python pelo caminho explícito; não é preciso ativar nem instalar bibliotecas externas. Selecione o mesmo interpretador na IDE.

Implemente a regra em regras.py; app.py e exemplo_excecoes.py estão completos. None/PENDENTE é a lacuna declarada. Compare os cinco casos e registre outros dois. Antes de git init, confirme que a pasta não pertence a outro repositório. Revise conteúdo staged, identidade autorizada e seis arquivos antes do commit local, sem remoto. Entregue projeto, README, evidências e exportação; não envie .venv, .git, caches ou segredos.

Durante a aula, responda às questões e preencha a seção de registros com nome, turma, data, anotações da prática e reflexão. Antes de fechar ou recarregar a página, clique em **Exportar registros da aula**. Será baixado um arquivo como `registro-a04-2026-10-20.md`, que pode ser lido no VS Code ou em um editor de texto.

Anexe esse arquivo, os modelos preenchidos e os arquivos Python solicitados no canal de entrega indicado pelo professor. A exportação faz o download; o envio é feito por você. Os arquivos produzidos fora da página precisam ser anexados separadamente. Recarregar a página limpa as respostas e anotações da sessão.

## Problemas comuns

- **ENOENT / package.json não encontrado:** o terminal está na pasta errada. Confira com `Get-Location` e `Get-ChildItem` no PowerShell. Entre na pasta que contém `package.json`.
- **npm ou node não reconhecido:** confira se o Node.js está instalado e reabra o terminal após a instalação. Enquanto isso, é possível abrir `index.html` diretamente.
- **npm.ps1 bloqueado no PowerShell:** use `npm.cmd start` ou execute `npm start` no Prompt de Comando, sem alterar a política do computador.
- **python não reconhecido:** tente `py --version` e siga a orientação de preparação do laboratório.
- **Endereço não abre:** mantenha o servidor ligado e copie o endereço mostrado na execução atual; a porta pode mudar.
- **Conteúdo antigo:** atualize a página com `Ctrl+F5` e confira se abriu a pasta correta.

As páginas e os anexos locais funcionam offline; baixar ferramentas e consultar fontes externas pode exigir internet.
