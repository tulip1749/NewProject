const {Given, When, Then, And} = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const LoginPage = require("../pages/loginPage");


Given("I launch the website", async ()=>{
    loginPageObj = new LoginPage(this.page);
    await loginPageObj.navigateToLoginPage();
});

When ("I click signIn option", async()=>{
    loginPageObj = new LoginPage(this.page);
    await loginPageObj.clickSignIn();
});

When ("I provide invalid credentials and continue", async()=>{
    loginPageObj = new LoginPage(this.page);
    await loginPageObj.enterInValidCreds();
});

Then ("I am navigated to captcha page", async ()=>{
    loginPageObj = new LoginPage(this.page);
    await loginPageObj.navigationToCaptchaPage();
});