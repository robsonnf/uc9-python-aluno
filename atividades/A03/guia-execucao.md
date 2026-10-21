# A03 — Da mesa para a IDE e o terminal

## Preparação

Use papel/caderno, a pasta extraída do material, Python 3 e VS Code com Python conforme A01. Não instale pacotes pip; não crie banco nem interface gráfica nesta aula.

1. Abra atividades/A03 no editor para ler os modelos e copiar os arquivos para sua pasta de trabalho.
2. Faça a tabela e o pseudocódigo antes de executar. casos.csv serve para leitura dos valores; o programa inicial já contém os mesmos casos e não importa CSV.
3. Abra inicial no VS Code por Arquivo → Abrir Pasta. No terminal integrado PowerShell, confira a pasta e os arquivos:

       Get-Location
       Get-ChildItem
       python --version

4. Execute um comando por vez, nessa pasta:

       python rastreio.py
       python retirada.py

Se a estação usa o iniciador py, troque python por py. O exemplo rastreio.py está completo; retirada.py tem duas funções com lacunas declaradas. No inicial, PENDENTE não significa instalação com defeito.

## Implementação

Complete somente pode_retirar e saldo_apos_retirada. Preserve os parâmetros e os seis casos. Use return para entregar valores às chamadas; o código principal faz a impressão. Salve o arquivo, execute e compare com a previsão de cada caso. False e saldo zero são resultados possíveis, diferentes de None.

Se houver SyntaxError ou IndentationError, confira dois-pontos, recuo e a linha indicada. Erro lógico pode ocorrer sem exceção: compare a regra com o caminho percorrido no caso que divergiu. Não apague a previsão antiga.

## Contrato

Disponível é inteiro não negativo; solicitada é inteiro. Aceitar somente quantidade positiva que não ultrapasse o disponível. Recusa preserva o saldo. Não há conversão de texto nem tratamento de tipos fora desse contrato; esse conteúdo será ampliado na A04. A implementação trabalha em memória, sem gravação persistente.

## Fechamento

Troque explicações com o revisor, registre uma correção e exporte a página antes de recarregar. Entregue os documentos e o código no canal indicado. Primeiro commit revisado, ambiente virtual, módulos e exceções entram na A04; não execute configuração global ou envio remoto nesta atividade.
