import { homePage} from "./pages/home.page"
import loginPage from "./pages/login.page"

Cypress.Commands.add('login', (email, senha) => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
    homePage.openMenu('Account')
    loginPage.login(email, senha)
    
})

Cypress.Commands.add('completePurchase', () => {
 cy.get(':nth-child(5) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
        cy.get('[data-testid="addToCart"]').click()
        cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
        cy.get('[data-testid="completeCheckout"]').click()
        cy.contains('Order Success').should('be.visible')
})
