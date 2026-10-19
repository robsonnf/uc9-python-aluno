# A02 — IDE, CLI e Git local
## Pré-requisitos
Windows/PowerShell, editor ou VS Code e Git instalado com permissão do laboratório.
Nenhuma biblioteca Python é necessária nesta aula. Não alterar políticas do sistema.
Se Git não for reconhecido, consultar o docente; instalação autorizada pelo canal institucional ou https://git-scm.com/install/windows. Reabrir o terminal após instalação e verificar a versão.
Não criar conta remota nem enviar arquivos para a internet nesta prática.

## 1. Escolher a pasta com segurança
Pelo Explorador, crie uma pasta nova e vazia para o projeto, por exemplo uc9-equipe, numa área de trabalho autorizada. Não use a pasta de autoria da aula nem uma pasta de outro projeto.
Abra essa pasta no VS Code (Arquivo → Abrir pasta) e abra Terminal → Novo terminal, com PowerShell.

Execute um comando por vez:
```powershell
Get-Location
Get-ChildItem -Force
git --version
git rev-parse --show-toplevel
```
Antes de inicializar, o último comando deve informar que a pasta não é um repositório (not a git repository).
Se mostrar uma raiz existente, pare: escolha outra pasta fora desse repositório com o docente.
Não crie repositório aninhado por engano. O nome do usuário nos caminhos não deve aparecer na entrega.

## 2. Organizar documentos
Na pasta nova confirmada, execute:
```powershell
New-Item -ItemType Directory -Path docs,src,testes
```
Se uma pasta já existir, confira seu conteúdo; não apague nem substitua arquivos.
Na IDE, salve os modelos preenchidos em docs. A pasta src receberá código nas próximas aulas e testes receberá verificações. Pastas vazias, sozinhas, não são rastreadas pelo Git.
Crie README.md pela IDE com objetivo, estado atual e orientação de abertura dos documentos.
Crie .gitignore pela IDE:
```text
.venv/
__pycache__/
.env
dados-reais/
```
Isto orienta o Git a ignorar arquivos não rastreados correspondentes. Não protege o acesso e não remove arquivos já registrados do histórico. Não coloque dados reais nessa pasta como forma de “protegê-los”.

## 3. Inicializar e inspecionar
Somente na pasta nova e conferida:
```powershell
git init
git status --short
git rev-parse --show-toplevel
git remote -v
```
Esperado: repositório inicializado; documentos novos podem aparecer com ?? (não rastreados); raiz igual à pasta escolhida; nenhuma linha de remoto no repositório recém-criado.
O nome inicial da branch depende da configuração local. Não use isso como critério de erro.
Nenhum commit foi criado. Arquivos não foram enviados para a internet.
Em A04, o docente orientará revisão, seleção de arquivos e primeiro commit. Não usar git add . indiscriminadamente nesta etapa.

## 4. Validar e registrar
Confira docs, src e testes na IDE. Registre a versão, a raiz sem dados pessoais, o estado observado e o que será revisado antes do commit. Não entregue a pasta .git.
Git não instalado ou permissão negada: registre a mensagem, use uma estação preparada ou prossiga com documentos acompanhado. Não marque Git como validado sem executar.

## Erros comuns
- Comando no prompt Python >>>: sair do interpretador e usar PowerShell.
- Git não reconhecido: verificar instalação e reabrir terminal com o docente.
- Raiz inesperada: pasta dentro de outro repositório; pare e escolha local apropriado.
- git diff sem saída para arquivo novo: arquivos não rastreados não aparecem no diff comum; confira git status e abra o arquivo.
- .gitignore “não esconde” arquivo já registrado: ele não apaga histórico nem remove rastreamento.
- Não há commit/remote: isso é esperado nesta etapa; não invente publicação para completar o registro.
