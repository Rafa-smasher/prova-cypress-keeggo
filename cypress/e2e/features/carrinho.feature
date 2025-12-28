Feature: Adicionar produto ao carrinho

  Scenario: Adicionar produto ao carrinho com sucesso
    Given que estou na página de produtos
    When adiciono um produto ao carrinho
    Then o produto deve ser exibido no carrinho
    And o carrinho deve apresentar as informações corretas do produto
