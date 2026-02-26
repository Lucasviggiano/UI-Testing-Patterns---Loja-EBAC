/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page")
const registerPage = require("../support/pages/register.page")
const { firstName, lastName, phone, email, password } = require("../support/pages/register.page")

describe('teste de cadastro', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('deve fazer o cadastro com sucesso', () => {
    homePage.openMenu('Account')
    cy.get('[data-testid="signUp"] > .css-146c3p1').click()
    registerPage.register(firstName, lastName, phone, email, password)
    cy.get('[href="/Tab/Account"]').click()
    cy.get('.r-14lw9ot > :nth-child(5) > .css-146c3p1').should('have.text', 'Logout')

  })

})

