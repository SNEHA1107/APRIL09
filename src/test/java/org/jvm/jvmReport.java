package org.jvm;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class jvmReport {
public static void createReport(String jsonpath) {
	// step 1
	File f = new File("C:\\Users\\USER\\eclipse-workspace\\CucumberSample\\src\\test\\resources");
	//step 2
	Configuration c = new Configuration(f, "facebook");
	c.addClassifications("Platform Name", "Windows");
	c.addClassifications("Platform version", "11");
	c.addClassifications("Browser Name", "Chrome");
	c.addClassifications("Browser version", "99.09");
	c.addClassifications("Sprint", "2");
	// step 3
	List<String>l= new ArrayList<String>();
	l.add(jsonpath);
	//step 4
	ReportBuilder r= new ReportBuilder(l, c);
	// step 
	r.generateReports();
}
}
