package org.sample;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FbSignInPojo extends BaseClass {
public FbSignInPojo() {
	PageFactory.initElements(driver, this);
}
@FindBy(xpath="//input[@name='firstname']")
private WebElement fname;
@FindBy(xpath="//input[@name='lastname']")
private WebElement lname;
@FindBy(xpath="(//input[@type='text'])[4]")
private WebElement phone;
@FindBy(xpath="(//input[@type='password'])[2]")
private WebElement password;
public WebElement getFname() {
	return fname;
}
public WebElement getLname() {
	return lname;
}
public WebElement getPhone() {
	return phone;
}
public WebElement getPassword() {
	return password;
}
}
