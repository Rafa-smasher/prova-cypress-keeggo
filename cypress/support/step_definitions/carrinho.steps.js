import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProdutosPage from "../../e2e/pages/ProdutosPage";

Given("que estou na página de produtos", () => {
  ProdutosPage.visitar();
});

When("adiciono um produto ao carrinho", () => {
  ProdutosPage.adicionarPrimeiroProdutoAoCarrinho();
  ProdutosPage.acessarCarrinho();
});

Then("o produto deve ser exibido no carrinho", () => {
  ProdutosPage.validarProdutoNoCarrinho();
});

Then("o carrinho deve apresentar as informações corretas do produto", () => {
  ProdutosPage.validarInformacoesDoProdutoNoCarrinho();
});
