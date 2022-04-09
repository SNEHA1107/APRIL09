@Feature1
Feature: To validate FB fuctionality
Background:
#Given To launch the browser and maximize the window

@Smoke
Scenario: To validate the login that is the valid username and invalid password
When To launch the FB url in the browser
And To pass the valid username in the email field
And To pass the invalid password in the password field
And To click on to the login button
And To check whether it is navigated to the home page.
Then To close the browser

@Sanity
Scenario Outline: To validate the login functioality in FB using positive and negative combination
When To launch the url for the facebook application
And  To send the positive and negative "<email id>" in email field
And To send the positive and negative "<password>" in password field
And To click the login button in the facebook application
Then The user has to close the window

Examples:
|email id|password|
|abc@gmail.com|12356564|
|def@gmail.com|45679871|
|hjk@gmail.com|75364122|
|lmn@gmail.com|24552532|