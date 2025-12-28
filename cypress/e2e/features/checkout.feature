Feature: Checkout simples

  Scenario: Finalizar checkout com sucesso
    Given que possuo um produto no carrinho
    And estou na página de checkout
    When preencho todos os campos obrigatórios
    And seleciono um método de pagamento
    And confirmo a compra
    Then devo visualizar a mensagem de compra realizada com sucesso
