@Creatingly
Feature: Creatingly Automation Test

  @testcase1 @Positive
  Scenario: As a user, I want to add artboard
    Given I am on the Web Studio Apps Page
    When I click on Art Board
    And I pick the container and drop it to the artboard
    And I dropped a chart inside stack container
    And I resize the chart element to fit it into the container size

  @testcase2 @Negative
  Scenario: Fail to drop container due to missing artboard
  Given I am on the Web Studio Apps Page
  When I click on Art Board
  When I try to pick the container and drop it to an invalid artboard
  Then I should see the "Please Select traget section. Something is wrong." error

  @testcase3 @Positive
  Scenario: User being able to drop and view the navigation bar (setting field)
  Given I am on the Web Studio Apps Page
  When I click on Art Board
  And I pick the chart and drop it to the artboard
  Then the chart should be present on the artboard


