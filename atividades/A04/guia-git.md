# A04 — Primeiro histórico local revisado

PowerShell na pasta NOVA da prática, com os seis arquivos copiados. Git precisa estar instalado. Estes comandos são para o projeto do aluno, não para a pasta de autoria da UC9.

## 1. Verificar o destino

```powershell
Get-Location
Get-ChildItem -Force
git --version
git rev-parse --show-toplevel
```

Se o último comando indicar uma raiz existente, PARE: você está em outro repositório. Escolha uma pasta fora dele; não crie repositório aninhado. A mensagem de que não é um repositório é esperada neste ponto. Confira o caminho antes de prosseguir.

## 2. Iniciar e revisar

```powershell
git init
git status --short
Get-Content .gitignore
```

Finalize o desafio e o README antes de adicionar. Use só dados fictícios. .gitignore impede inclusão automática de arquivos não rastreados correspondentes; não remove arquivos já rastreados, não apaga segredos do histórico e não garante sigilo. Nunca inclua .venv, .env, caches ou credenciais.

```powershell
git add -- .gitignore README.md requirements.txt app.py regras.py exemplo_excecoes.py
git diff --cached --stat
git diff --cached
git status --short
```

Revise o conteúdo staged, não apenas nomes. git diff sem --cached compara alterações não preparadas de arquivos rastreados; não mostra conteúdo de arquivos novos ainda não adicionados. Se houver segredo ou arquivo inesperado, interrompa antes do commit e peça revisão.

## 3. Identidade e commit

```powershell
git config --get user.name
git config --get user.email
```

Confira a identidade aprovada para o laboratório: ela entra no commit e pode ser exposta se houver publicação futura. Se estiver ausente/incorreta, configure SOMENTE neste repositório, substituindo os exemplos por valores autorizados:

```powershell
git config --local user.name "SEU NOME AUTORIZADO"
git config --local user.email "SEU EMAIL AUTORIZADO"
```

Não use os textos de exemplo como identidade real e não altere configuração global. Faça o commit apenas depois da revisão do conteúdo e da execução:

```powershell
git commit -m "Organiza modulos e valida entradas"
git log -1 --oneline
git status --short
git remote -v
```

Esperado: um commit descrevendo a prática, árvore limpa após salvar tudo e nenhum remoto configurado. Saída vazia em remote -v não é erro. Commit é histórico LOCAL; não equivale a upload, backup externo ou push. Não crie conta, remoto ou token nesta aula. Se Git/identidade não estiverem disponíveis, entregue o código e registre a pendência; não declare o marco de histórico concluído.
