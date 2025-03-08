Feature: Login Functionality

Scenario: To verify unsuccessful Login
Given I launch the website
When I click signIn option
When I provide invalid credentials and continue
Then I am navigated to captcha page