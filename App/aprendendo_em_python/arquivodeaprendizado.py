import random 

catalogo = [
    {"nome": "Livro A", "preco": 29.90},
    {"nome": "Livro B", "preco": 39.90},
    {"nome": "Livro C", "preco": 19.90},
    {"nome": "Livro D", "preco": 49.90}
]

while True:
    escolha = input("Digite o nome do livro que deseja comprar (ou 'sair' para encerrar): ")
    
    if escolha.lower() == 'sair':
        print("Obrigado por visitar nossa loja!")
        break
    
    livro_encontrado = next((livro for livro in catalogo if livro["nome"].lower() == escolha.lower()), None)
    
    if livro_encontrado:
        print(f"Você escolheu: {livro_encontrado['nome']} - Preço: R${livro_encontrado['preco']:.2f}")
        # Simulando a compra
        print("Processando sua compra...")
        print("Compra realizada com sucesso!")
    else:
        print("Livro não encontrado. Por favor, tente novamente.")