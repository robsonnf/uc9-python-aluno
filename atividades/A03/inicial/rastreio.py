"""Demonstração pública A03: prever no papel antes de executar."""


def rotular_lote(quantidade):
    if quantidade >= 4:
        return "lote grande"
    return "lote pequeno"


if __name__ == "__main__":
    for quantidade in [0, 4, 6]:
        rotulo = rotular_lote(quantidade)
        print(quantidade, "=>", rotulo)
