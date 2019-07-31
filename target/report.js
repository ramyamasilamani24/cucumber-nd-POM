$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/AddCustomer.feature");
formatter.feature({
  "name": "Customer telecom details",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "Telecome customer information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I need to enter the fields present",
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.i_need_to_enter_the_fields_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate whether i got the customer id",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.i_validate_whether_i_got_the_customer_id()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});