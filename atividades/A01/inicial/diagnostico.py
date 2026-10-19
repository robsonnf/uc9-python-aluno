"""A01 EX03 — complete somente a função; dados sintéticos para diagnóstico."""


def itens_disponiveis(equipamentos, limite):
    # TODO: devolver os nomes com quantidade maior ou igual ao limite.
    # Lacuna didática intencional: None produz PENDENTE no programa inicial.
    return None


equipamentos = [
    {"nome": "Notebook", "quantidade": 3},
    {"nome": "Projetor", "quantidade": 0},
    {"nome": "Cabo", "quantidade": 5},
]

if __name__ == "__main__":
    for registros, limite in [(equipamentos, 1), (equipamentos, 4), ([], 1)]:
        resultado = itens_disponiveis(registros, limite)
        print("Limite", limite, "=>", "PENDENTE" if resultado is None else resultado)
