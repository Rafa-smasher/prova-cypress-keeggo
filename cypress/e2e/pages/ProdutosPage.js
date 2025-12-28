class ProdutosPage {
    visitar() {
        cy.visit("/");
    }

    adicionarPrimeiroProdutoAoCarrinho() {
        cy.get("button")
            .contains("Adicionar")
            .first()
            .click();
    }

    acessarCarrinho() {
        cy.get("a")
            .contains("CARRINHO")
            .click();
    }

    validarProdutoNoCarrinho() {
        cy.contains("Moletom").should("be.visible");
    }

    validarInformacoesDoProdutoNoCarrinho() {
        cy.get("h1").contains("SEU CARRINHO").should("be.visible");
        cy.contains("Produto").should("be.visible");
        cy.contains("R$").should("be.visible");
        cy.contains("59.00").should("be.visible");
    }

}

export default new ProdutosPage();
