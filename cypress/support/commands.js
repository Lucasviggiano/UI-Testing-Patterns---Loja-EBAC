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
       cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .css-175oi2r > .css-146c3p1').should('have.text', 'Order Success')
})