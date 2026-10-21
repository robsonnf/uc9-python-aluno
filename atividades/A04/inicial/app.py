"""Apresentação: execute este arquivo; implemente a regra no outro módulo."""
from regras import ler_quantidade


def descrever(texto):
    quantidade = ler_quantidade(texto)
    if quantidade is None:
        return "PENDENTE: complete regras.py"
    return f"Quantidade pronta: {quantidade}"


if __name__ == "__main__":
    for texto in ["2", "0", "-1", "abc", "3.5"]:
        try:
            print(repr(texto), "=>", descrever(texto))
        except ValueError:
            print(repr(texto), "=>", "Entrada recusada: informe um inteiro maior que zero.")
