class CheckoutPage {

    acessarCheckout() {
        cy.contains("Ir para o Checkout").click();
    }

    preencherDadosDoCliente() {
        cy.get('[id="first-name"]').type("Rafael");
        cy.get('[id="last-name"]').type("Teste");
        cy.get('[id="address"]').type("Rua Teste");
        cy.get('[id="number"]').type("123");
        cy.get('[id="cep"]').type("06124145");
        cy.get('[id="phone"]').type("11985648565");
        cy.get('[id="email"]').type("rafael@email.com");       
    }

    selecionarPagamento () {
        cy.get('#payment-pix').click()
        cy.get('#terms').click()
    }

    confirmarCompra() {
        cy.contains('button', 'Finalizar Pedido').click();
    }

    validarCompraFinalizada() {
        cy.contains('p', 'Pagamento aprovado').should("be.visible");
    }
}

export default new CheckoutPage();
