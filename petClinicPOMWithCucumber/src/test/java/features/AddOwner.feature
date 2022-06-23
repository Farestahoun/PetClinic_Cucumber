Feature: Add Owner Test 
Description: The purpose of this feature is to test the add owner feature 




Background: 
            Given  user open find owners page
            When   user open add owner page
            Then   owner page "http://localhost:9099/owners/new" should display
           


Scenario: valid add owner test
            When I enter "Jan", "Maikel", "Stollstr", "Cologne", "123444" 
						And  I add  valid owner
            And  owner "Jan", "Maikel", "Stollstr", "Cologne", "123444"  is added to the database

Scenario: invalid add owner test_telephone contains strings 
            When I enter "Kaber", "taber", "Stollstr", "Cologne", "abcfs" 
						And  I add invalid owner
						Then Error message "numeric value out of bounds (<10 digits>.<0 digits> expected)" is shown at telephone field
            
Scenario: invalid add owner test_telephone contains more than ten intigers 
            When I enter "Kaber", "mager", "Stollstr", "Cologne", "234454827357252" 
						And  I add invalid owner
						Then Error message "numeric value out of bounds (<10 digits>.<0 digits> expected)" is shown at telephone field

#Scenario: invalid add owner test_all required fields blank
            #When I enter "", "", "", "", "" 
						#And  I add invalid owner
						#Then Error messages "must not be empty", "must not be empty", "must not be empty","must not be empty", "numeric value out of bounds (<10 digits>.<0 digits> expected)"  shown at all fields


Scenario:  invalid add owner test_firstName is empty but not other fields so error Msg display at only fName and not at others
            When I enter "", "magerd", "Stolslstr", "Cologdne", "23445" 
						And  I add invalid owner
						Then Error message "must not be empty" is shown at first name field


