/// <reference types="cypress" />

const { email, senha } = require('../fixtures/data.json')
const {homePage} = require('../support/pages/home.page')



describe('Teste de Autenticação', () => {

    it('deve fazer o checkout com sucesso', () => {
        cy.login(email, senha)
        homePage.openMenu('Browse')
        cy.completePurchase()

    })
})





