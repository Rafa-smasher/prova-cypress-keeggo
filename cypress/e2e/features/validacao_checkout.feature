Feature: Validação de campos obrigatórios no checkout

  Scenario: Tentar finalizar checkout sem preencher campos obrigatórios
    Given que possuo um produto no carrinho
    And estou na página de checkout
    When tento confirmar a compra sem preencher os campos obrigatórios
    Then devo visualizar mensagens de erro informando os campos obrigatórios
