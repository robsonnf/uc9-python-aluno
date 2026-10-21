# A04 — Ambiente e execução (Windows / PowerShell)

## Preparar sem alterar o curso

1. Escolha uma pasta nova de prática, fora das pastas aluno/professor e fora de outro repositório. Copie somente o conteúdo de inicial/ para ela, incluindo .gitignore (ative a exibição de arquivos ocultos). Não copie .git, .venv, dados de clientes ou soluções docentes.
2. Abra essa pasta no VS Code e seu terminal PowerShell. Execute Get-Location e Get-ChildItem -Force; devem aparecer app.py, regras.py, exemplo_excecoes.py, README.md, requirements.txt e .gitignore.
3. Confira Python e Git já instalados: python --version e git --version. Se um comando não existir, registre a pendência e peça suporte; não instale programas sem orientação do laboratório.

## Ambiente virtual

Na pasta nova:

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -c "import sys; print(sys.executable); print(sys.prefix != sys.base_prefix)"
.\.venv\Scripts\python.exe -m pip --version
.\.venv\Scripts\python.exe exemplo_excecoes.py
.\.venv\Scripts\python.exe app.py
```

Esperado: executável dentro da .venv e True na comparação de prefixos; pip aponta para o ambiente. O exemplo converte um texto e recusa outro. O app inicial mostra cinco PENDENTE: a lacuna em regras.py é intencional, não um defeito no import.

No VS Code, use Python: Select Interpreter e selecione .venv/Scripts/python.exe. Execute app.py por Run Python File e compare o interpretador com o terminal. Feche e reabra o terminal integrado se a seleção não for refletida. O comando explícito acima não depende de ativação; não execute Set-ExecutionPolicy para esta prática.

## Dependências e reprodução

Não há pacotes externos nesta aula. requirements.txt tem somente comentários. Não é necessário executar pip install nem usar internet. Quando uma aula futura exigir uma biblioteca, use o pip do interpretador correto: python-do-ambiente -m pip, nunca presuma que pip solto pertence a ele. Um módulo local não precisa de pip install.

O ambiente virtual isola pacotes Python; não é barreira de segurança nem contém todo o sistema operacional. Não o envie como entrega e não o copie para outro computador: recrie com uma versão compatível do Python e as dependências declaradas. O código, as instruções e o histórico são artefatos distintos do ambiente.

## Desafio e validação

Edite somente regras.py para cumprir: receber texto str; devolver inteiro maior que zero; rejeitar texto não inteiro, zero e negativos com ValueError. Não transforme falha em zero e não esconda tudo com except Exception. Não há promessa de tratar objetos de outros tipos.

Antes de executar, preveja os cinco casos de app.py. Depois da implementação, deve haver uma quantidade aceita e quatro entradas recusadas, sem encerrar o laço. Teste também espaços em torno de um inteiro, sinal positivo e outras fronteiras; registre entrada, previsão e resultado. int aceita espaços e sinal, mas não converte '3.5' ou '3.0' como inteiro.

Importar regras não deve imprimir nada. app.py cuida da apresentação; regras.py concentra a conversão e a regra. O bloco __name__ permite importar app sem executar a demonstração. Evite nomes como json.py ou venv.py: módulos locais podem encobrir bibliotecas do Python com esses nomes.

## Diagnóstico

- Caminho não encontrado: confira a pasta e se a criação de .venv terminou sem erro.
- Python não localizado: confirme o comando disponível no laboratório (pode ser py); mantenha um único interpretador escolhido e registre a versão.
- ModuleNotFoundError: confira nome, extensão e se app.py e regras.py estão juntos; não tente instalar regras via pip.
- NameError/erro de indentação: leia o traceback e corrija o código; não amplie o except para esconder o defeito.
- Falha no venv/ensurepip: registre a mensagem completa e peça suporte; não use sudo, política global ou downloads improvisados.
