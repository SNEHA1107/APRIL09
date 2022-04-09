package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.sample.BaseClass;
import org.sample.FbPojo;

import cucumber.api.java.en.*;

public class PositiveAndNegativeLogin extends BaseClass {
	FbPojo f;
	@Given("The user has to launch the browser window and to maximize it")
	public void the_user_has_to_launch_the_browser_window_and_to_maximize_it() {
		launchBrowser();
		windowMaximize();
	}

	@When("To launch the url for the facebook application")
	public void to_launch_the_url_for_the_facebook_application() {
		launchUrl("https://www.facebook.com/");
	}

	@When("To send the positive and negative {string} in email field")
	public void to_send_the_positive_and_negative_in_email_field(String string) {
	    f=new FbPojo();
	    fillText(f.getEmail(), string);
	}

	@When("To send the positive and negative {string} in password field")
	public void to_send_the_positive_and_negative_in_password_field(String string) {
		 f=new FbPojo();
		 fillText(f.getPassword(), string);
	}

	@When("To click the login button in the facebook application")
	public void to_click_the_login_button_in_the_facebook_application() {
		WebElement btnlogin=driver.findElement(By.name("login"));
		clickbutton(btnlogin);
	}

	@Then("The user has to close the window")
	public void the_user_has_to_close_the_window() {
		closeBrowser();
	}
}
