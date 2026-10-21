"""A03: complete as duas funções após escrever seu pseudocódigo.

Contrato: disponível é inteiro não negativo; solicitada é inteiro.
None é uma lacuna didática e produz PENDENTE, não a resposta final.
Cada linha usa um caso independente; não edite os casos fornecidos.
"""


def pode_retirar(disponivel, solicitada):
    # TODO: devolver True ou False conforme a regra do enunciado.
    return None


def saldo_apos_retirada(disponivel, solicitada):
    # TODO: devolver o saldo inteiro, preservando-o se houver recusa.
    return None


if __name__ == "__main__":
    casos = [(3, 2), (3, 4), (3, 3), (3, 0), (0, 1), (3, -1)]
    for disponivel, solicitada in casos:
        permitida = pode_retirar(disponivel, solicitada)
        saldo = saldo_apos_retirada(disponivel, solicitada)
        print(
            "Disponivel:", disponivel,
            "| Solicitada:", solicitada,
            "| Permitida:", "PENDENTE" if permitida is None else permitida,
            "| Saldo:", "PENDENTE" if saldo is None else saldo,
        )
