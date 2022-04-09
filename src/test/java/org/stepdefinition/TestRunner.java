package org.stepdefinition;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.jvm.jvmReport;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\USER\\eclipse-workspace\\CucumberSample\\src\\test\\resources"
,glue="org.stepdefinition",monochrome=true,dryRun=false,strict=true,
plugin= {"html:target","junit:Reports\\junitreport.xml","json:Reports\\jsonreport.json","rerun:FailedScenario\\failedtestcase.txt"})
public class TestRunner {
	@AfterClass
	public static void generatingJvmReport() {
		jvmReport.createReport("C:\\Users\\USER\\eclipse-workspace\\CucumberSample\\Reports\\jsonreport.json");
	}

}
