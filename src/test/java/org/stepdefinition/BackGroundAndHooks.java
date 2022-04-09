package org.stepdefinition;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.sample.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class BackGroundAndHooks extends BaseClass {
	@Before(order=5)
	public void preCondition1() {
		windowMaximize();
	}
	@Before(order=3)
	public void preCondition2() {
		launchBrowser();
	}
	@After(order=20)
	public void postCondition2(Scenario s) {
		if(s.isFailed())
		{
			TakesScreenshot t=(TakesScreenshot) driver;
			byte[] ss=t.getScreenshotAs(OutputType.BYTES);
			s.embed(ss, "image/png");
			System.out.println("Failed scenario name: "+s.getName());
			
		}
	}
	@After(order=10)
	public void postCondition1() {
		closeBrowser();
	}
}
