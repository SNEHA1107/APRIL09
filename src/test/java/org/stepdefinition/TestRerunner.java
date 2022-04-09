package org.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features="@C:\\Users\\USER\\eclipse-workspace\\CucumberSample\\FailedScenario\\failedtestcase.txt "
,glue="org.stepdefinition",monochrome=true )
public class TestRerunner {
	
}
 