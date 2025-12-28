import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutosPage from "../../e2e/pages/ProdutosPage";
import CheckoutPage from "../../e2e/pages/CheckoutPage";

Given("que possuo um produto no carrinho", () => {
  ProdutosPage.visitar();
  ProdutosPage.adicionarPrimeiroProdutoAoCarrinho();
  ProdutosPage.acessarCarrinho();
});

Given("estou na página de checkout", () => {
  CheckoutPage.acessarCheckout();
});


When("preencho todos os campos obrigatórios", () => {
  CheckoutPage.preencherDadosDoCliente();
});

When("seleciono um método de pagamento", () => {
  CheckoutPage.selecionarPagamento();
});


When("confirmo a compra", () => {
  CheckoutPage.confirmarCompra();
});

Then("devo visualizar a mensagem de compra realizada com sucesso", () => {
  CheckoutPage.validarCompraFinalizada();
});
