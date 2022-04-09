@Feature2
Feature: To validate the registraion of FB account

@Regression
Scenario: To validate the new accout registration on FB application
#Given To launch the chrome browser and maximize the window
When To launch the facebook application in browser
And To click on the new account registration button
#ONE DIMENSIONAL LIST
And To enter the first name in the text box

#ONE DIMENSIONAL MAP
And To enter the last name in the text box
|lastname1|kumaran|
|lastname2|siva|
|lastname3|gopal|
|lastname4|siva|
|lastname5|lal|
|lastname6|gopal|

#TWO DIMENSIONAL LIST
And To enter the email id in the text box


#TWO DIMENSIONAL MAP
And To enter the password in the text box
|password1|password2|
|12684651565|12356564122|
|21646516516|45679871234|
|89761351313|75364122765|
|00321353513|24552532313|
Then The user need to close the current browser of FB application