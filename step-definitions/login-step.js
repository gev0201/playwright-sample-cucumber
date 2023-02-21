const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { expect } = require('chai')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given("I visit a login page", async function () {
  await loginPage.goToUrl()
  })

When("I fill the login form with valid credentials", async function () {
  await loginPage.submitLoginForm()
})

Then("I should see the home page", async function () {
  await loginPage.asserUserIsLoggedIn()
})

When(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, async function (username, password) {
  await loginPage.submitLoginWithParameters(username, password)
})

Then(/^I wait for "([^"]*)" seconds$/, async function (timeout) {
  await loginPage.pause(timeout)
})