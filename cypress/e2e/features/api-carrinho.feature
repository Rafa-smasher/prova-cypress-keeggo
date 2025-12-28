Feature: API do Carrinho

  Scenario: Adicionar produto ao carrinho do usuário
    Given que possuo dados válidos para adicionar um produto ao carrinho
    When realizo uma requisição POST para a API do carrinho
    Then o produto deve ser adicionado ao carrinho com sucesso
