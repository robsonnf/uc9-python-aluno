"""Exemplo completo de conversão; não implementa a regra de quantidade."""
for texto in ["12", "doze"]:
    try:
        numero = int(texto)
    except ValueError:
        print("Conversão recusada:", repr(texto))
    else:
        print("Conversão concluída:", numero)
