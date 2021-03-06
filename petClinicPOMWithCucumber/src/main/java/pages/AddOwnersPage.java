package pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

public class AddOwnersPage extends PageBase {

	// **This Constructor is automatic autogenerated when i inherit this child class
	// from superclass**
	// **cause superclass have constructor so that all childs should inherit it**
	public AddOwnersPage(WebDriver driver) {
		// **invoke or call parent class constructor**
		super(driver);
	}

	// ** Web Elements**
	By firstNameTxtBoX = By.id("firstName");
	By lastNameTxtBoX = By.id("lastName");
	By adressTxtBoX = By.xpath("//input[@id='address']");
	By cityTxtBoX = By.xpath("//input[@id='city']");
	By telephoneTxtBoX = By.xpath("//input[@id='telephone']");
	By addOwnerButton = By.xpath("//button[@type='submit']");

	// ** Web Elements_ Error Messages**
	private static By errorMessageFirstName = By
			.xpath("//*[@id=\"add-owner-form\"]/div[1]/div[1]/div/span[@class = 'help-inline']");

	private static By errorMessageLastName = By
			.xpath("//*[@id=\"add-owner-form\"]/div[1]/div[2]/div/span[@class = 'help-inline']");

	private static By errorMessageAddress = By
			.xpath("//*[@id=\"add-owner-form\"]/div[1]/div[3]/div/span[@class = 'help-inline']");

	private static By errorMessageCity = By
			.xpath("//*[@id=\"add-owner-form\"]/div[1]/div[4]/div/span[@class = 'help-inline']");

	private static By errorMessageTelephone = By
			.xpath("//*[@id=\"add-owner-form\"]/div[1]/div[5]/div/span[@class = 'help-inline']");

//	By classOfallErrorMessageOfTheTextBoxes = By.cssSelector("span.help-inline");

	// ********** Page Methods**********

	// ********** set owner data**********
	public AddOwnersPage setOwnerData(String firstName, String lastName, String adresse, String city,
			String telephone) {
		setTextElementText(firstNameTxtBoX, firstName);
		setTextElementText(lastNameTxtBoX, lastName);
		setTextElementText(adressTxtBoX, adresse);
		setTextElementText(cityTxtBoX, city);
		setTextElementText(telephoneTxtBoX, telephone);
		return this;
	}

	// **********Add valid owner**********
	public OwnerInformationPage addValidOwner() {
		clickButton(addOwnerButton);
		return new OwnerInformationPage(driver);
	}

	// **********Add invalid owner**********
	public AddOwnersPage addInvalidOwner() {
		clickButton(addOwnerButton);
		return this;
	}

	// **********Check error messages**********
	public void checkErrorMessages(String firstNameErrorMsg, String lastNameErrorMsg, String addressErrorMsg,
			String cityErrorMsg, String telephoneErrorMsg) {
		if (firstNameErrorMsg != null) {
			String actualText = driver.findElement(errorMessageFirstName).getText();
			Assert.assertTrue(actualText.contains(firstNameErrorMsg));
		} else {

//			  try { WebDriverWait wait = new WebDriverWait(driver, Duration.ofMillis(0));
//			  wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(
//			  "#add-owner-form > div.form-group.has-feedback > div:nth-child(1) > div > span.help-inline"
//			  ))); Assert.fail("Unexpected error message element shown for name:" +
//			  nameErrorMessagElement.getText()); } catch (TimeoutException e) { 
//				  // ok, we expect to have no error message }

			List<WebElement> foundElements = driver.findElements(errorMessageFirstName);
			Assert.assertEquals(foundElements.size(), 0);

		}

		if (lastNameErrorMsg != null) {
			String actuaText = driver.findElement(errorMessageLastName).getText();
			Assert.assertTrue(actuaText.contains(lastNameErrorMsg));
		} else {
			List<WebElement> foundElements = driver.findElements(errorMessageLastName);
			Assert.assertEquals(foundElements.size(), 0);
		}

		if (addressErrorMsg != null) {
			String actualText = driver.findElement(errorMessageAddress).getText();
			Assert.assertTrue(actualText.contains(addressErrorMsg));
		} else {
			List<WebElement> foundElements = driver.findElements(errorMessageAddress);
			Assert.assertEquals(foundElements.size(), 0);
		}

		if (cityErrorMsg != null) {
			String actualText = driver.findElement(errorMessageCity).getText();
			Assert.assertTrue(actualText.contains(cityErrorMsg));
		} else {
			List<WebElement> foundElements = driver.findElements(errorMessageCity);
			Assert.assertEquals(foundElements.size(), 0);
		}

		if (telephoneErrorMsg != null) {
			String actualText = driver.findElement(errorMessageTelephone).getText();
			Assert.assertTrue(actualText.contains(telephoneErrorMsg));
		} else {
			List<WebElement> foundElements = driver.findElements(errorMessageTelephone);
			Assert.assertEquals(foundElements.size(), 0);
		}

	}

}
