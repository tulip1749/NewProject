const {test,expect} = require ("@playwright/test");
const userData = require("../data/testData/userData.json");

const inValidData_1 = JSON.parse(JSON.stringify(userData));

class LoginPage {
    
/**
 * @param {import('@playwright/test').Page} page
 */
    constructor(page){
        this.page = page;
        this.userNameField = this.page.locator("#ap_email_login");
        this.continueButton = this.page.locator("[type='submit']");
        this.pwdField = this.page.locator("[type='password']");
        this.signInButton = this.page.locator("#signInSubmit");
        this.captchaPage = this.page.locator("aacb-captcha-header");
    }

    async navigateToLoginPage(){
        this.page.goto(process.env.URL);        
    }
    async clickSignIn(){
       await this.page.locator(".nav-line-2:has-text('Account & Lists')").click();
       const pageTitle = this.page.title();
       await expect (pageTitle).toContainText("signin");
    }

    async enterInValidCreds(){
        await this.userNameField.fill(inValidData_1.inValidUserName);
        await this.continueButton.click();
        await this.pwdField.fill(process.env.PASSWORD)
        await this.signInButton.click();
        
        
    }



}