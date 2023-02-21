class LoginPage{

    async goToUrl(){
        await page.goto('https://www.saucedemo.com/')
    }

    async submitLoginForm(){
        await page.type('#user-name', 'standard_user')
        await page.type('#password', 'secret_sauce')
        await page.click('#login-button')
    }

    async submitLoginWithParameters(username, password){
        await page.type('#user-name', username)
        await page.type('#password', password)
        await page.click('#login-button')
    }

    async asserUserIsLoggedIn(){
        await page.waitForSelector('.inventory_item')
    }

    async pause(timeout){
        await page.waitForTimeout(parseInt(timeout))
    }
}
module.exports = { LoginPage }