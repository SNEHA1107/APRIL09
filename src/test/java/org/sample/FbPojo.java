package org.sample;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FbPojo extends BaseClass{
		//Non parameterised constructor
	public FbPojo() {
		PageFactory.initElements(driver, this);
	}
	// Private WebElement
	@FindBy(id="email")
	private WebElement email;
	@FindBy(id="pass")
	private WebElement password;
	@FindBy(name="login")
	private WebElement loginBtn;
	// Getters to access the webelement
	public WebElement getEmail() {
		return email;
	}
	public WebElement getPassword() {
		return password;
	}
	public WebElement getLogiBtn() {
		return loginBtn;
	}
	}
