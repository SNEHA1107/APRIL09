package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.sample.BaseClass;

import cucumber.api.java.en.*;

public class FbLoginValidation extends BaseClass{
	@Given("To launch the browser and maximize the window")
	public void to_launch_the_browser_and_maximize_the_window() {
		launchBrowser();
		windowMaximize();
	}

	@When("To launch the FB url in the browser")
	public void to_launch_the_FB_url_in_the_browser() {
		launchUrl("https://www.facebook.com/");
	}

	@When("To pass the valid username in the email field")
	public void to_pass_the_valid_username_in_the_email_field() {
		WebElement email=driver.findElement(By.id("email"));
		fillText(email, "sneha@gmail.com");
	}

	@When("To pass the invalid password in the password field")
	public void to_pass_the_invalid_password_in_the_password_field() {
		WebElement password=driver.findElement(By.id("pass"));
		fillText(password, "123456987");
	}

	@When("To click on to the login button")
	public void to_click_on_to_the_login_button() {
		WebElement btnlogin=driver.findElement(By.name("login"));
		clickbutton(btnlogin);
	}

	@When("To check whether it is navigated to the home page.")
	public void to_check_whether_it_is_navigated_to_the_home_page() {
		System.out.println("Check the browser credentials");
	}

	@Then("To close the browser")
	public void to_close_the_browser() {
		closeBrowser();
	}
}
