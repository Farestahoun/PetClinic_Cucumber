$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddOwner.feature");
formatter.feature({
  "line": 1,
  "name": "Add Owner Test",
  "description": "Description: The purpose of this feature is to test the add owner feature",
  "id": "add-owner-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user open find owners page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user open add owner page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "owner page \"http://localhost:9099/owners/new\" should display",
  "keyword": "Then "
});
formatter.match({
  "location": "AddOwner.user_open_find_owners_page()"
});
formatter.result({
  "duration": 189765000,
  "status": "passed"
});
formatter.match({
  "location": "AddOwner.user_open_add_owner_page()"
});
formatter.result({
  "duration": 106895600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:9099/owners/new",
      "offset": 12
    }
  ],
  "location": "AddOwner.owner_page_should_display(String)"
});
formatter.result({
  "duration": 13226000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "valid add owner test",
  "description": "",
  "id": "add-owner-test;valid-add-owner-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I enter \"Jan\", \"Maikel\", \"Stollstr\", \"Cologne\", \"123444\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I add  valid owner",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "owner \"Jan\", \"Maikel\", \"Stollstr\", \"Cologne\", \"123444\"  is added to the database",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Jan",
      "offset": 9
    },
    {
      "val": "Maikel",
      "offset": 16
    },
    {
      "val": "Stollstr",
      "offset": 26
    },
    {
      "val": "Cologne",
      "offset": 38
    },
    {
      "val": "123444",
      "offset": 49
    }
  ],
  "location": "AddOwner.i_enter(String,String,String,String,String)"
});
formatter.result({
  "duration": 223967200,
  "status": "passed"
});
formatter.match({
  "location": "AddOwner.i_add_valid_owner()"
});
formatter.result({
  "duration": 110703100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan",
      "offset": 7
    },
    {
      "val": "Maikel",
      "offset": 14
    },
    {
      "val": "Stollstr",
      "offset": 24
    },
    {
      "val": "Cologne",
      "offset": 36
    },
    {
      "val": "123444",
      "offset": 47
    }
  ],
  "location": "AddOwner.owner_is_added_to_the_database(String,String,String,String,String)"
});
formatter.result({
  "duration": 371621400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user open find owners page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user open add owner page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "owner page \"http://localhost:9099/owners/new\" should display",
  "keyword": "Then "
});
formatter.match({
  "location": "AddOwner.user_open_find_owners_page()"
});
formatter.result({
  "duration": 58226900,
  "status": "passed"
});
formatter.match({
  "location": "AddOwner.user_open_add_owner_page()"
});
formatter.result({
  "duration": 81716100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:9099/owners/new",
      "offset": 12
    }
  ],
  "location": "AddOwner.owner_page_should_display(String)"
});
formatter.result({
  "duration": 10904600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "invalid add owner test_telephone contains strings",
  "description": "",
  "id": "add-owner-test;invalid-add-owner-test-telephone-contains-strings",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I enter \"Kaber\", \"taber\", \"Stollstr\", \"Cologne\", \"abcfs\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I add invalid owner",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Error message \"numeric value out of bounds (\u003c10 digits\u003e.\u003c0 digits\u003e expected)\" is shown at telephone field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Kaber",
      "offset": 9
    },
    {
      "val": "taber",
      "offset": 18
    },
    {
      "val": "Stollstr",
      "offset": 27
    },
    {
      "val": "Cologne",
      "offset": 39
    },
    {
      "val": "abcfs",
      "offset": 50
    }
  ],
  "location": "AddOwner.i_enter(String,String,String,String,String)"
});
formatter.result({
  "duration": 232111900,
  "status": "passed"
});
formatter.match({
  "location": "AddOwner.i_add_invalid_owner()"
});
formatter.result({
  "duration": 78313300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "numeric value out of bounds (\u003c10 digits\u003e.\u003c0 digits\u003e expected)",
      "offset": 15
    }
  ],
  "location": "AddOwner.error_message_is_shown_at_telephone_field(String)"
});
formatter.result({
  "duration": 74318300,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user open find owners page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user open add owner page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "owner page \"http://localhost:9099/owners/new\" should display",
  "keyword": "Then "
});
formatter.match({
  "location": "AddOwner.user_open_find_owners_page()"
});
formatter.result({
  "duration": 61922500,
  "status": "passed"
});
formatter.match({
  "location": "AddOwner.user_open_add_owner_page()"
});
formatter.result({
  "duration": 65692500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:9099/owners/new",
      "offset": 12
    }
  ],
  "location": "AddOwner.owner_page_should_display(String)"
});
formatter.result({
  "duration": 2591600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "invalid add owner test_telephone contains more than ten intigers",
  "description": "",
  "id": "add-owner-test;invalid-add-owner-test-telephone-contains-more-than-ten-intigers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I enter \"Kaber\", \"mager\", \"Stollstr\", \"Cologne\", \"234454827357252\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I add invalid owner",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Error message \"numeric value out of bounds (\u003c10 digits\u003e.\u003c0 digits\u003e expected)\" is shown at telephone field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Kaber",
      "offset": 9
    },
    {
      "val": "mager",
      "offset": 18
    },
    {
      "val": "Stollstr",
      "offset": 27
    },
    {
      "val": "Cologne",
      "offset": 39
    },
    {
      "val": "234454827357252",
      "offset": 50
    }
  ],
  "location": "AddOwner.i_enter(String,String,String,String,String)"
});
formatter.result({
  "duration": 233517800,
  "status": "passed"
});
formatter.match({
  "location": "AddOwner.i_add_invalid_owner()"
});
formatter.result({
  "duration": 83036700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "numeric value out of bounds (\u003c10 digits\u003e.\u003c0 digits\u003e expected)",
      "offset": 15
    }
  ],
  "location": "AddOwner.error_message_is_shown_at_telephone_field(String)"
});
formatter.result({
  "duration": 63252400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "user open find owners page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user open add owner page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "owner page \"http://localhost:9099/owners/new\" should display",
  "keyword": "Then "
});
formatter.match({
  "location": "AddOwner.user_open_find_owners_page()"
});
formatter.result({
  "duration": 66163300,
  "status": "passed"
});
formatter.match({
  "location": "AddOwner.user_open_add_owner_page()"
});
formatter.result({
  "duration": 76415300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:9099/owners/new",
      "offset": 12
    }
  ],
  "location": "AddOwner.owner_page_should_display(String)"
});
formatter.result({
  "duration": 2934700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 29,
      "value": "#Scenario: invalid add owner test_all required fields blank"
    },
    {
      "line": 30,
      "value": "#When I enter \"\", \"\", \"\", \"\", \"\""
    },
    {
      "line": 31,
      "value": "#And  I add invalid owner"
    },
    {
      "line": 32,
      "value": "#Then Error messages \"must not be empty\", \"must not be empty\", \"must not be empty\",\"must not be empty\", \"numeric value out of bounds (\u003c10 digits\u003e.\u003c0 digits\u003e expected)\"  shown at all fields"
    }
  ],
  "line": 35,
  "name": "invalid add owner test_firstName is empty but not other fields so error Msg display at only fName and not at others",
  "description": "",
  "id": "add-owner-test;invalid-add-owner-test-firstname-is-empty-but-not-other-fields-so-error-msg-display-at-only-fname-and-not-at-others",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I enter \"\", \"magerd\", \"Stolslstr\", \"Cologdne\", \"23445\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I add invalid owner",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Error message \"must not be empty\" is shown at first name field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "magerd",
      "offset": 13
    },
    {
      "val": "Stolslstr",
      "offset": 23
    },
    {
      "val": "Cologdne",
      "offset": 36
    },
    {
      "val": "23445",
      "offset": 48
    }
  ],
  "location": "AddOwner.i_enter(String,String,String,String,String)"
});
formatter.result({
  "duration": 228443300,
  "status": "passed"
});
formatter.match({
  "location": "AddOwner.i_add_invalid_owner()"
});
formatter.result({
  "duration": 89462900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "must not be empty",
      "offset": 15
    }
  ],
  "location": "AddOwner.error_message_is_shown_at_first_name_field(String)"
});
formatter.result({
  "duration": 61968200,
  "status": "passed"
});
});