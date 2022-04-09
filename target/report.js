$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/USER/eclipse-workspace/CucumberSample/src/test/resources/Feature/FbRegisterAccount.feature");
formatter.feature({
  "name": "To validate the registraion of FB account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "To validate the new accout registration on FB application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the facebook application in browser",
  "keyword": "When "
});
formatter.match({
  "location": "FbSignUpRegistration.to_launch_the_facebook_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click on the new account registration button",
  "keyword": "And "
});
formatter.match({
  "location": "FbSignUpRegistration.to_click_on_the_new_account_registration_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter the first name in the text box",
  "keyword": "And "
});
formatter.match({
  "location": "FbSignUpRegistration.to_enter_the_first_name_in_the_text_box()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.stepdefinition.FbSignUpRegistration.to_enter_the_first_name_in_the_text_box(FbSignUpRegistration.java:41)\r\n\tat ✽.To enter the first name in the text box(C:/Users/USER/eclipse-workspace/CucumberSample/src/test/resources/Feature/FbRegisterAccount.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To enter the last name in the text box",
  "rows": [
    {
      "cells": [
        "lastname1",
        "kumaran"
      ]
    },
    {
      "cells": [
        "lastname2",
        "siva"
      ]
    },
    {
      "cells": [
        "lastname3",
        "gopal"
      ]
    },
    {
      "cells": [
        "lastname4",
        "siva"
      ]
    },
    {
      "cells": [
        "lastname5",
        "lal"
      ]
    },
    {
      "cells": [
        "lastname6",
        "gopal"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbSignUpRegistration.to_enter_the_last_name_in_the_text_box(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To enter the email id in the text box",
  "keyword": "And "
});
formatter.match({
  "location": "FbSignUpRegistration.to_enter_the_email_id_in_the_text_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To enter the password in the text box",
  "rows": [
    {
      "cells": [
        "password1",
        "password2"
      ]
    },
    {
      "cells": [
        "12684651565",
        "12356564122"
      ]
    },
    {
      "cells": [
        "21646516516",
        "45679871234"
      ]
    },
    {
      "cells": [
        "89761351313",
        "75364122765"
      ]
    },
    {
      "cells": [
        "00321353513",
        "24552532313"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbSignUpRegistration.to_enter_the_password_in_the_text_box(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user need to close the current browser of FB application",
  "keyword": "Then "
});
formatter.match({
  "location": "FbSignUpRegistration.the_user_need_to_close_the_current_browser_of_FB_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("C:/Users/USER/eclipse-workspace/CucumberSample/src/test/resources/Feature/facebook.feature");
formatter.feature({
  "name": "To validate FB fuctionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login that is the valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "To launch the FB url in the browser",
  "keyword": "When "
});
formatter.match({
  "location": "FbLoginValidation.to_launch_the_FB_url_in_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the valid username in the email field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginValidation.to_pass_the_valid_username_in_the_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the invalid password in the password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginValidation.to_pass_the_invalid_password_in_the_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click on to the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginValidation.to_click_on_to_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check whether it is navigated to the home page.",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginValidation.to_check_whether_it_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLoginValidation.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the login functioality in FB using positive and negative combination",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the url for the facebook application",
  "keyword": "When "
});
formatter.step({
  "name": "To send the positive and negative \"\u003cemail id\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "To send the positive and negative \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "name": "To click the login button in the facebook application",
  "keyword": "And "
});
formatter.step({
  "name": "The user has to close the window",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email id",
        "password"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "12356564"
      ]
    },
    {
      "cells": [
        "def@gmail.com",
        "45679871"
      ]
    },
    {
      "cells": [
        "hjk@gmail.com",
        "75364122"
      ]
    },
    {
      "cells": [
        "lmn@gmail.com",
        "24552532"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functioality in FB using positive and negative combination",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the url for the facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_launch_the_url_for_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To send the positive and negative \"abc@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_send_the_positive_and_negative_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To send the positive and negative \"12356564\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_send_the_positive_and_negative_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button in the facebook application",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_click_the_login_button_in_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to close the window",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.the_user_has_to_close_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functioality in FB using positive and negative combination",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the url for the facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_launch_the_url_for_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To send the positive and negative \"def@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_send_the_positive_and_negative_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To send the positive and negative \"45679871\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_send_the_positive_and_negative_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button in the facebook application",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_click_the_login_button_in_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to close the window",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.the_user_has_to_close_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functioality in FB using positive and negative combination",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the url for the facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_launch_the_url_for_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To send the positive and negative \"hjk@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_send_the_positive_and_negative_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To send the positive and negative \"75364122\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_send_the_positive_and_negative_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button in the facebook application",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_click_the_login_button_in_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to close the window",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.the_user_has_to_close_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login functioality in FB using positive and negative combination",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the url for the facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_launch_the_url_for_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To send the positive and negative \"lmn@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_send_the_positive_and_negative_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To send the positive and negative \"24552532\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_send_the_positive_and_negative_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button in the facebook application",
  "keyword": "And "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.to_click_the_login_button_in_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user has to close the window",
  "keyword": "Then "
});
formatter.match({
  "location": "PositiveAndNegativeLogin.the_user_has_to_close_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});