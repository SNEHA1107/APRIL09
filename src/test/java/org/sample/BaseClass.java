package org.sample;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {
	public static WebDriver driver;
	public static void launchBrowser() {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();

	}
	public static void windowMaximize() {
		driver.manage().window().maximize();
	}
	public static void launchUrl(String url) {
		driver.get(url);
	}
	public static void signUpFb(WebElement ref) {
		ref.click();
	}
	public static String pageTitle() {
		String title=driver.getTitle();
		return title;
	}
	public static String pageUrl() {
		String url=driver.getCurrentUrl();
		return url;
	}
	public static void fillText(WebElement ref,String text) {
		ref.sendKeys(text);
	}
	public static void clickbutton(WebElement ref1) {
		ref1.click();
	}
	public static void closeBrowser() {
		driver.quit();
	}
	public static void screenShot(String imgName) throws IOException {
		TakesScreenshot tk=(TakesScreenshot)driver;
		File s=tk.getScreenshotAs(OutputType.FILE);
		File d= new File("C:\\Users\\USER\\eclipse-workspace\\ProjectMaven2\\ScreenShot\\"+imgName+".png");
		FileUtils.copyFile(s, d);
	}
	public static JavascriptExecutor js;
	public static void jseSendKeys(WebElement ref, String value) {
		js=(JavascriptExecutor) driver;
		js.executeScript("return arguments[0].setAttribute('value')", ref);
	}
	public static void jseGetAttibute(WebElement ref) {
		 js=(JavascriptExecutor) driver;
		 System.out.println(js.executeScript("return arguments[0].getAttribute('value')", ref));
	}
	public static void jseButton(WebElement ref) {
		 js=(JavascriptExecutor) driver;
		 js.executeScript("return arguments[0].click()", ref);
	}
	public static Actions a;
	public static void actions(WebElement target ) {
		a= new Actions(driver);
		a.moveToElement(target).perform();
	}
	public static void dragDrop(WebElement source, WebElement target) {
		a.dragAndDrop(source, target).perform();
	}
	public static void handleAlert() {
		Alert a=driver.switchTo().alert();
		a.accept();
	}
	public static void excelRead() throws IOException {
		File f = new File("C:\\Users\\USER\\eclipse-workspace\\ProjectMaven2\\Excel\\DataDriven.xlsx");
		FileInputStream fis= new FileInputStream(f);
		XSSFWorkbook book=new XSSFWorkbook(fis);
		Sheet sh=book.getSheet("Sheet1");
		Row r=sh.getRow(2);
		Cell c=r.getCell(1);
		//System.out.println(c);
		// to get all the rows datas
		for( int i =0;i<sh.getPhysicalNumberOfRows();i++) 
		{
			Row r1=sh.getRow(i);
				for(int j=0;j<r1.getPhysicalNumberOfCells();j++)
				{
					Cell c1=r1.getCell(j);
					int celltype=c1.getCellType();
					if(celltype==1)
					{
						String s=c1.getStringCellValue();
						System.out.println(s);
					}
					else if(DateUtil.isCellDateFormatted(c1))
					{
						Date d=c1.getDateCellValue();
						SimpleDateFormat s1=new SimpleDateFormat("dd MMMM yyyy");
						System.out.println(s1.format(d));
					}
					else
					{
						double dl=c1.getNumericCellValue();
						long l=(long)dl;
						System.out.println(String.valueOf(l));
						
					}
				}
		}
	}
	public static void particularExcelDataRead(int rowNum,int cellNum) throws IOException {
		File f = new File("C:\\Users\\USER\\eclipse-workspace\\ProjectMaven2\\Excel\\DataDriven.xlsx");
		FileInputStream fis= new FileInputStream(f);
		XSSFWorkbook book=new XSSFWorkbook(fis);
		Sheet sh=book.getSheet("Sheet1");
		Row r=sh.getRow(2);
		Cell c=r.getCell(1);
		//System.out.println(c);
		// to get all the rows datas
		Row r1=sh.getRow(rowNum);
		Cell c1=r1.getCell(cellNum);
		int celltype=c1.getCellType();
			if(celltype==1)
				{
					String s=c1.getStringCellValue();
					System.out.println(s);
				}
			else if(DateUtil.isCellDateFormatted(c1))
				{
					Date d=c1.getDateCellValue();
					SimpleDateFormat s1=new SimpleDateFormat("dd MMMM yyyy");
					System.out.println(s1.format(d));
				}
			else
				{
					double dl=c1.getNumericCellValue();
					long l=(long)dl;
					System.out.println(String.valueOf(l));
						
				}
	}	
}
