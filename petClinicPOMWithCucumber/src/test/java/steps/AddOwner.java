package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.AddOwnersPage;
import pages.FindOwnersPage;
import pages.HomePage;
import pages.OwnerInformationPage;
import pages.PageBase;
import tests.TestBase;

public class AddOwner extends TestBase {

	long executionTime = System.currentTimeMillis();

	// *********Backround*********
	@Given("^user open find owners page$")
	public void user_open_find_owners_page() {
		(new HomePage(driver)).openFindOwnersPage();
	}

	@When("^user open add owner page$")
	public void user_open_add_owner_page() {
		(new FindOwnersPage(driver)).openAddOwnerPage();
	}

	@Then("^owner page \"([^\"]*)\" should display$")
	public void owner_page_should_display(String expectURL) throws Throwable {
		(new PageBase(driver)).getCurrentURL(expectURL);
	}

	// *********Valid add owner test*********
	@When("^I enter \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void i_enter(String firstName, String lastName, String adress, String city, String telephone) {

		(new AddOwnersPage(driver)).setOwnerData(firstName, lastName + executionTime, adress, city, telephone);
	}

	@When("^I add  valid owner$")
	public void i_add_valid_owner() {
		(new AddOwnersPage(driver)).addValidOwner();
	}

	@Then("^owner \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"  is added to the database$")
	public void owner_is_added_to_the_database(String firstName, String lastName, String adress, String city,
			String telephone) {

		(new OwnerInformationPage(driver)).checkOwnerInformation(firstName, lastName + executionTime, adress, city,
				telephone);
		(new HomePage(driver)).openFindOwnersPage().setsearchData("Maikel" + executionTime).validSearch()
				.checkOwnerInformation(firstName, lastName + executionTime, adress, city, telephone);
	}

	// *********invalid add owner test_telephon contains strings*********
	@When("^I add invalid owner$")
	public void i_add_invalid_owner() throws Throwable {
		(new AddOwnersPage(driver)).addInvalidOwner();
	}

	@Then("^Error message \"([^\"]*)\" is shown at telephone field$")
	public void error_message_is_shown_at_telephone_field(String expectErrorMsg) throws Throwable {
		(new AddOwnersPage(driver)).checkErrorMessages(null, null, null, null, expectErrorMsg);
	}

	// *********invalid add owner test_all required fields blank*********
//	@Then("^Error messages \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\"  shown at all fields$")
//	public void error_messages_shown_at_all_fields(String fNameErrorMSg, String lNameErrorMSg, String adressErroMsg,
//			String cityErrorMSg, String telephoneErrorMsg) throws Throwable {
//		(new AddOwnersPage(driver)).checkErrorMessages(fNameErrorMSg, lNameErrorMSg, adressErroMsg, cityErrorMSg,
//				telephoneErrorMsg);
//
//	}
	// **invalid add owner test_firstName is empty but not otherfields**
	@Then("^Error message \"([^\"]*)\" is shown at first name field$")
	public void error_message_is_shown_at_first_name_field(String fNameErrorMsg) throws Throwable {
		(new AddOwnersPage(driver)).checkErrorMessages(fNameErrorMsg, null, null, null, null);
	}
}
