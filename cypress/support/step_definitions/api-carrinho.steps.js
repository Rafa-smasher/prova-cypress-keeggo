import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;
let payload;

Given("que possuo dados válidos para adicionar um produto ao carrinho", () => {
  payload = {
    userId: 1,
    productId: 101,
    quantity: 2
  };
});

When("realizo uma requisição POST para a API do carrinho", () => {
  cy.request({
    method: "POST",
    url: "/api/carrinho",
    body: payload,
    failOnStatusCode: false
  }).then((res) => {
    response = res;
  });
});

Then("o produto deve ser adicionado ao carrinho com sucesso", () => {
  expect(response.status).to.eq(200);

  expect(response.body).to.have.property("message");
  expect(response.body.message).to.eq(
    "Produto adicionado ao carrinho com sucesso."
  );
});
