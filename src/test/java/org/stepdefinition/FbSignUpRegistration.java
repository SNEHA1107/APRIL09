package org.stepdefinition;
import io.cucumber.datatable.*;
import junit.framework.Assert;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.sample.BaseClass;
import org.sample.FbSignInPojo;

import cucumber.api.java.en.*;

public class FbSignUpRegistration extends BaseClass {
	FbSignInPojo f;
	@Given("To launch the chrome browser and maximize the window")
	public void to_launch_the_chrome_browser_and_maximize_the_window() {
		launchBrowser();
		windowMaximize();
	}

	@When("To launch the facebook application in browser")
	public void to_launch_the_facebook_application_in_browser() {
		launchUrl("https://www.facebook.com/");
	}

	@When("To click on the new account registration button")
	public void to_click_on_the_new_account_registration_button() {
		WebElement click=driver.findElement(By.xpath("(//a[@role='button'])[2]"));
		clickbutton(click);
	}

	@When("To enter the first name in the text box")
	public void to_enter_the_first_name_in_the_text_box() throws InterruptedException {
		Thread.sleep(3000);
		
		f=new FbSignInPojo();
		
		fillText(f.getFname(),"sneha");
		Assert.assertTrue(false);
		
	}

	@When("To enter the last name in the text box")
	public void to_enter_the_last_name_in_the_text_box(DataTable d) {
		
		f=new FbSignInPojo();
		Map<String,String>m=d.asMap(String.class, String.class);
		fillText(f.getLname(),m.get("lastname2"));
	}

	@When("To enter the email id in the text box")
	public void to_enter_the_email_id_in_the_text_box() {
		f=new FbSignInPojo();		
		fillText(f.getPhone(),"1315347684");
		
	}

	@When("To enter the password in the text box")
	public void to_enter_the_password_in_the_text_box(DataTable d) {
		f=new FbSignInPojo();
		List<Map<String,String>> l2=d.asMaps();
		fillText(f.getPassword(),l2.get(0).get("password1"));
	}

	@Then("The user need to close the current browser of FB application")
	public void the_user_need_to_close_the_current_browser_of_FB_application() {
		closeBrowser();
	}

}
