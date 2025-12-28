import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

let response;

Given("que realizo uma requisição para a API de produtos", () => {
    cy.request("GET", "http://localhost:3000/api/produtos").then((res) => {
        response = res;
    });
});

Then("a API deve retornar a lista de produtos com sucesso", () => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property("products");
    expect(response.body.products).to.be.an("array");
    expect(response.body.products.length).to.be.greaterThan(0);

    const produto = response.body.products[0];
    expect(produto).to.have.property("id");
    expect(produto).to.have.property("name");
    expect(produto).to.have.property("price");
});
