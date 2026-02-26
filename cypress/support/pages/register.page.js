/// <reference types="cypress" />

const { faker } = require("@faker-js/faker")

class registerPage {

  get #firstName() { return cy.get('[data-testid="firstName"]').filter(':visible').first() }
  get #lastName() { return cy.get('[data-testid="lastName"]').filter(':visible').first() }
  get #phone() { return cy.get('[data-testid="phone"]').filter(':visible').first() }
  get #email() { return cy.get('[data-testid="email"]').filter(':visible').first() }
  get #password() { return cy.get('[data-testid="password"]').filter(':visible').first() }
  get #repassword() { return cy.get('[data-testid="repassword"]').filter(':visible').first() }
  get #btnRegister() { return cy.get('[data-testid="create"]').filter(':visible').first() }

  register() {
    const user = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      phone: "31999999999",
      email: faker.internet.email(),
      password: "teste12345678"
    }

    this.#firstName.type(user.firstName)
    this.#lastName.type(user.lastName)
    this.#phone.type(user.phone)
    this.#email.type(user.email)
    this.#password.type(user.password, { log: false })
    this.#repassword.type(user.password, { log: false })
    this.#btnRegister.click()

    return user
  }
}

module.exports = new registerPage()
