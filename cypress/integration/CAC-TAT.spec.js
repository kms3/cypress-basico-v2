// CAC-TAT.spec.js created with Cypress

describe("Central de Atendimento ao Cliente TAT", function(){

    it("verificar o titulo da aplicação", function() {
        cy.visit("./src/index.html")
        cy.title().should("be.equal", "Central de Atendimento ao Cliente")
    })
})